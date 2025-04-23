import React, { useEffect, useRef, useState } from "react";
import SocialMediaVertical from "./SocialMediaVertical";
import SocialMediaHorizontal from "./SocialMediaHorizontal";
import useStore from "~/utils/store";
import { BASEPATH, isEncodedString } from "~/utils/constant";
import VideoPlayer from "~/hooks/useVideoPlayer";
import parse from "html-react-parser";
import { isMobile } from "react-device-detect";
import Hls from "hls.js";

const VideoSlide = (props) => {
  const swiperRef = props.swiperRef?.current;
  const videoElement = useRef<HTMLVideoElement>(null);
  const setClicked = useStore((state) => state.setClicked);
  const [showVolWrp, setShowVolWrp] = useState(false);
  const [isMidWrActive, setIsMidWrActive] = useState(false);
  const seekBar = useRef(null);
  const progressBar = useRef(null);
  const seekThumb = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const setOpenUtilPopUp = useStore((state) => state.setOpenUtilPopUp);

  const convertToHLSUrl = (url) => {
    return url.replace("/ndtv/", "/hls/").replace(".mp4", "/master.m3u8");
  };
  const hlssrc = convertToHLSUrl(props.filepath);
  const fetchLowestQualityManifest = async (manifestUrl) => {
    const response = await fetch(manifestUrl);
    const text = await response.text();
    // console.log("text:", text);
    // Parse the manifest to find the lowest quality variant
    const lines = text.split("\n");
    let minQualityUrl = "";
    let minBandwidth = Infinity;

    lines.forEach((line, i) => {
      if (line.startsWith("#EXT-X-STREAM-INF")) {
        const bandwidth = parseInt(line.match(/BANDWIDTH=(\d+)/)?.[1] || "0");
        if (bandwidth < minBandwidth) {
          minBandwidth = bandwidth;
          minQualityUrl = lines[i + 1];
        }
      }
    });

    if (!minQualityUrl) {
      throw new Error("No quality variant found in the manifest.");
    }

    // Resolve the correct URL structure
    const basePath = manifestUrl.substring(0, manifestUrl.lastIndexOf("/") + 1); // Base path of the manifest
    const fullUrl = new URL(minQualityUrl, basePath).toString();

    console.log("Your updated URL is:", fullUrl);
    return fullUrl;
  };
  const sendToShorts = (e) => {
    const backLink = `${window.location.origin}${BASEPATH} `;
    e.stopPropagation();
    window.location.href = backLink;
  };
  const hideVlmWr = () => {
    setTimeout(() => {
      setShowVolWrp(false);
    }, 1000);
  };

  const showVlmWr = () => {
    setShowVolWrp(true);
    setTimeout(hideVlmWr, 6000);
  };

  const handleCardClick = (event) => {
    if (window.innerWidth <= 767) {
      setClicked(true);
      event.stopPropagation();

      const swiperSlideActive = event.target.closest(".swiper-slide-active");

      if (swiperSlideActive) {
        swiperSlideActive.classList.toggle("js_seek-vis-sec");

        const NstSl = swiperSlideActive.querySelector(".NstSl_li");

        if (NstSl) {
          if (NstSl.classList.contains("js_seek-vis-sec")) {
            document.body.classList.add("NstSl_vdo");
            NstSl.classList.add("js_swp-vis");
            NstSl.classList.remove("js_seek-vis-sec");
          } else {
            swiperSlideActive.classList.remove("js_swp-vis");
          }

          if (NstSl.classList.contains("js_swp-vis")) {
            NstSl.classList.add("js_seek-vis");
            document.body.classList.remove("NstSl_vdo-vis");
          }
        }
      }
    }
  };
  const handleNextVideo = (e: any) => {
    console.log("handleNextVideo");
    swiperRef.swiper.slideNext();
    console.log("swiperRef", swiperRef);
  };
  const {

    playVideo,
    pauseVideo,
  } = VideoPlayer(
    videoElement,
    seekBar,
    progressBar,
    seekThumb,
    handleNextVideo,
    setIsMidWrActive
  );

  useEffect(() => {
    showVlmWr();
  }, []);

  useEffect(() => {
    if (Hls.isSupported()) {
      //alert("hello from canplay kk")
      const hls = new Hls();
      hls.loadSource(hlssrc);
      if (videoElement.current) {
        hls.attachMedia(videoElement.current);
      }

      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        console.log("HLS is attached to the video element.");
      });
      hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
        // console.log("Manifest loaded, available quality levels:", data.levels);

        let maxIndexLvl = -1;
        data.levels.forEach((level, index) => {
          console.log(level, index);
          if (level.width == 480) {
            maxIndexLvl = index;
          }
        });
        console.log("maxIndexLvl-> ", maxIndexLvl);
        hls.autoLevelCapping = maxIndexLvl;
      });
      hls.on(Hls.Events.ERROR, (event, data) => {
        console.error("HLS error:", data);
      });

      return () => {
        hls.destroy();
      };
    } else if (
      videoElement.current?.canPlayType("application/vnd.apple.mpegurl")
    ) {
      fetchLowestQualityManifest(props.hlssrc).then((newUrl) => {
        // console.log("url sourav", newUrl);
        if (!videoElement.current) return;
        videoElement.current.src = newUrl;
        videoElement.current.type = "application/x-mpegURL";
        videoElement.current.loop = false;
        videoElement.current.load();
        videoElement.current.autoplay = false;
      });

      //videoElement.current.autoplay = true;
    }
  }, [props.hlssrc]);
  useEffect(() => {
    if (props.isActive) {
      playVideo();
    } else {
      pauseVideo();
    }
  }, [props.isActive]);
  return (
    // <div className="swiper-slide NstSl_li NstSl_li-hdr NstSl_li-vdo">
    <div className="NstSlCrd_cn">
      <div className="NstSlCrd_wr">
        <SocialMediaVertical />
        <div className="BepSl_crd-wr">
          <div className="BepSl_crd" onClick={handleCardClick}>
            <div className="BepSl_vdo-cn">
              <div className="BepSl_vdo-wr">
                <video
                  ref={videoElement}
                  className="BepSl_vdo"
                  // src={props.filepath}
                  muted
                  preload="auto"
                  // autoPlay
                  width="100%"
                  height="100%"
                  playsInline
                />
                <div className="VdEl_cn">
                  {/* back and volume */}
                  <div className="VdEl_top-wr" onClick={() => {}}>
                    <div className="VdEl_top-bck" onClick={sendToShorts}>
                      <div className="VdEl_icn-lk">
                        <div className="VdEl_icn1">
                          <svg className="vj_icn vj_back2">
                            <use xlinkHref="#vj_back2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* <div class="VdEl_top-vol">
                                                                              <div class="VdEl_icn-lk">
                                                                                  <div class="VdEl_icn1 VdEl_icn-vol">
                                                                                      <div class="VdEl_icn-vol-full">
                                                                                          <svg class="vj_icn vj_volume">
                                                                                              <use xlink:href="#vj_volume">
                                                                                              </use>
                                                                                          </svg>
                                                                                      </div>
                                                                                      <div class="VdEl_icn-mute">
                                                                                          <svg class="vj_icn vj_mute">
                                                                                              <use xlink:href="#vj_mute">
                                                                                              </use>
                                                                                          </svg>
                                                                                      </div>
                                                                                  </div>
                                                                              </div>
                                                                          </div> */}
                  </div>
                  <div
                    className={`VdEl_mid-wr ${
                      isMidWrActive ? "js_VdEl_sk_vlm-act" : ""
                    }`}
                    onClick={(event) => {
                      console.log("clicked VdEl_mid-wr");
                      event.stopPropagation();
                      showVlmWr();
                      setIsMidWrActive((prev) => !prev);
                    }}
                  >
                    {/*== Next Prev, Related Button ==*/}
                    <div
                      className={`VdEl_vlm-wr ${
                        showVolWrp ? "visible-flx" : "hidden"
                      }`}
                    >
                      {/* Volumn  / Mute */}
                      <div className="VdEl_sk_vlm-btn">
                        <div className="VdEl_sk_vlm VdEl_ripl-lgt">
                          <svg className="VdEl_sk_vlm-ic1 vj_icn vj_volume">
                            <use xlinkHref="#vj_volume" />
                          </svg>
                          <svg className="VdEl_sk_vlm-ic2 vj_icn vj_mute">
                            <use xlinkHref="#vj_mute" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="VdEl_lod-rw"
                    onClick={(e) => {
                      e.stopPropagation();
                      showVlmWr();
                    }}
                  >
                    <div className="VdEl_lod-cl VdEl_lod-cl1">
                      <div className="VdEl_inf-wr">
                        <div className="VdEl_inf">
                          {isEncodedString(props.title)
                            ? parse(props.title)
                            : props.title}
                        </div>
                        {/* <div class="VdEl_inf-mr">more</div> */}
                      </div>
                      <SocialMediaHorizontal />
                    </div>
                    <div className="VdEl_lod-cl">
                      {/*==  Time, Progress Bar  ==*/}
                      <div className="VdEl_lod-cn">
                        {/* Progress Bar */}
                        <div className="VdEl_lod-wrp">
                          {/* Progress Bar */}
                          <div className="VdEl_lod">
                            <div className="VdEl_lod-br">
                              <div className="VdEl_dot">
                                {/* Seek thumbnails pointer events */}
                                <div
                                  className="VdEl_tmb-cn"
                                  style={{ display: "none" }}
                                >
                                  <span className="VdEl_tmb-wr">
                                    <span className="VdEl_tmb-in">
                                      <span className="VdEl_tmb-im" />
                                    </span>
                                  </span>
                                  <span className="VdEl_tmb-tm">01:11</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Time */}
                          <div className="VdEl_sk-tm">
                            02:35/05:00
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* VOD More Overlay and  */}
                  <div
                    className="VdElMr_ovrly"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenUtilPopUp(false);
                    }}
                  />
                  {/* VOD Share Overlay */}
                  <div className="VdEl_ovl" onClick={() => {}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="NstElMr_ovrly NstElMr_ovrly1"
          onClick={(e) => {
            e.stopPropagation();
            setOpenUtilPopUp(false);
          }}
        />
      </div>
    </div>
    // </div>
  );
};

export default VideoSlide;
