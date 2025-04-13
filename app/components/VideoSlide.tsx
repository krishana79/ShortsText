import React, { useEffect, useState } from "react";
import SocialMediaVertical from "./SocialMediaVertical";
import SocialMediaHorizontal from "./SocialMediaHorizontal";
import useStore from "~/utils/store";
import { BASEPATH } from "~/utils/constant";

const VideoSlide = () => {
  const setClicked = useStore((state) => state.setClicked);
  const [showVolWrp, setShowVolWrp] = useState(false);
  const [isMidWrActive, setIsMidWrActive] = useState(false);
  const setOpenLoginPopUp = useStore((state) => state.setOpenLoginPopUp);

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
  useEffect(() => {
    showVlmWr();
  }, []);
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
                  className="BepSl_vdo"
                  src="https://ndtvod.pc.cdn.bitgravity.com/23372/ndtv/17032024_n_EdSheeran_106145_78031_5000.mp4"
                  muted
                  preload="auto"
                  autoPlay
                  width="100%"
                  height="100%"
                  playsInline
                />
                <div className="VdEl_cn">
                  {/* back and volume */}
                  <div
                    className="VdEl_top-wr"
                    onClick={() => {
                    }}
                  >
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
                          "Ram not the dispute, Ram is the solution", said PM
                          Modi while addressing the gathering at the Ram Mandir
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
                          <div className="VdEl_sk-tm">02:35/05:00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* VOD More Overlay and  */}
                  <div
                    className="VdElMr_ovrly"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenLoginPopUp(false);
                    }}
                  />
                  {/* VOD Share Overlay */}
                  <div
                    className="VdEl_ovl"
                    onClick={() => {
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="NstElMr_ovrly NstElMr_ovrly1"
          onClick={(e) => {
            e.stopPropagation();
            setOpenLoginPopUp(false);
          }}
        />
      </div>
    </div>
    // </div>
  );
};

export default VideoSlide;
