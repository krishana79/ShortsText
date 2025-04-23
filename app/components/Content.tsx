import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";
import { useLocation } from "@remix-run/react";
import { Mousewheel, Navigation, Virtual } from "swiper/modules";
import LhsContent from "./LhsContent";
import HeaderContent from "./HeaderContent";
import SwiperNav from "./SwiperNav";
import CardCounter from "./CardCounter";
import VideoSlide from "./VideoSlide";
import VideoSlideH from "./VideoSlideH";
import ArticleSlide from "./ArticleSlide";
import WebstorySlide from "./WebstorySlide";
import ArticleSlideL from "./ArticleSlideL";
import ScoreCard from "./ScoreCard";
import ArticleSlideY from "./ArticleSlideY";
import ArticleSlideIfm from "./ArticleSlideIfm";
import useStore from "~/utils/store";
import { isEncodedString } from "~/utils/constant";

function* indexGenerator(index: number) {
  while (true) {
    yield index;
    index++;
  }
}

const Content = (props: { slideData: any }) => {
  const videoNodes= props.slideData.results.slice(-50)
  // console.log("videoNodes", videoNodes);
  const iterator = indexGenerator(0);
  const location = useLocation();
  const prevPath = useRef("");
  const isPathChange = location.pathname !== prevPath.current;
  const isDataAvailable = (props.slideData?.results?.length || 0) > 0;
  const timeoutIDs: Array<NodeJS.Timeout | number> = [];
  const [isClient, setIsClient] = useState(false);
  const [currentSlideNumber, setCurrentSlideNumber] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);
  const clicked = useStore((state) => state.clicked);
  const setShowHeader = useStore((state) => state.setShowHeader);
  const showHeader = useStore((state) => state.showHeader);
  const setChangeSlide = useStore((state) => state.setChangeSlide);
  const changeSlide = useStore((state) => state.changeSlide);
  const activeIndex = useStore((state) => state.activeIndex);
  const setActiveIndex = useStore((state) => state.setActiveIndex);
  const swipeRef = useRef(null);

  const updateSlideCount = (swiper) => {
    const currentSlide = swiper.activeIndex + 1;
    const totalSlides = swiper.slides.length;
    const progressPercentage = (currentSlide / totalSlides) * 100;
    setCurrentSlideNumber(currentSlide);
    setTotalSlides(totalSlides);

    const progressElement = document.querySelector(".NstCrdSld_prgs");
    if (progressElement) {
      const circumference = progressElement.getTotalLength();
      const offset = circumference * (1 - progressPercentage / 100);
      progressElement.style.strokeDashoffset = offset;
    }
  };
  const handleSlideChange = (index) => {
    const slides = document.querySelectorAll(".swiper-slide");
    const activeSlide = slides[index] ?? null;
    const body = document.body;

    body.classList.toggle(
      "NstSl_vdo",
      activeSlide?.classList.contains("NstSl_li-vdo")
    );
  };
  const handleTimeout = (index) => {
    const allSwiperSlides = document.querySelectorAll(".swiper-slide");
    const headerSlides = document.querySelectorAll(".NstHdr_cn");

    allSwiperSlides.forEach((slide, index) => {
      slide.classList.remove("js_icon-more");
    });

    headerSlides.forEach((slide, index) => {
      slide.classList.remove("show");
    });

    const activeSlide =
      document.querySelectorAll(".swiper-slide-active")[index] || null;
    if (activeSlide) {
      activeSlide.classList.add("js_seek-vis-sec");
      activeSlide.classList.remove("js_swp-vis");
      if (window.innerWidth <= 767) {
        if (!clicked) {
          activeSlide.classList.add("js_seek-vis-sec");
          activeSlide.classList.add("js_swp-vis");
          document.querySelectorAll(".VdEl_vlm-wr").forEach((el) => {
            el.style.display = "flex";
          });
          setTimeout(() => {
            activeSlide.classList.remove("js_seek-vis-sec");
            activeSlide.classList.remove("js_icon-more");
            activeSlide.classList.remove("js_icon-more1");
            document.body.classList.remove("VdElCht_on");
          }, 6000);
        }
      } else {
        if (clicked) {
          activeSlide.classList.add("js_seek-vis");
          setTimeout(() => {
            activeSlide.classList.remove("js_seek-vis-sec");
            activeSlide.classList.remove("js_icon-more");
            activeSlide.classList.remove("js_icon-more1");
          }, 6000);
        }
      }
    }
  };

  const initSwiper = (swiper) => {
    console.log("swiper initialized");
    setTotalSlides(swiper.slides.length);
    const slides = document.querySelectorAll(".swiper-slide");
    if (slides.length > 0) {
      slides.forEach((slide, index) => {
        timeoutIDs[index] = setTimeout(() => {
          handleTimeout(index);
        }, 0);
      });
    }
  };
  const playActiveSlideVideo = (swiper) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const activeSlideVideo = activeSlide?.querySelector("video");

    activeSlideVideo
      ?.play()
      .catch((error) => console.error("Video play failed:", error));
  };
  const handleShowHeader = (e) => {
    e.stopPropagation();
    if (window.innerWidth <= 560) {
      const elements = document.querySelectorAll(".NstSl_li");
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("js_icon-more");
      }
      setShowHeader(!showHeader);
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    prevPath.current = location.pathname;
  }, [location.pathname]);
  useEffect(() => {
    if (isPathChange === true) {
      swipeRef.current?.swiper.slideTo(0, 0);
      setActiveIndex(0);
    }
  }, [isPathChange]);
  return (
    <>
      <LhsContent />
      <div className="NstSlCol_1">
        {/*==== column one ====*/}
        <div className="NstSlCol_rw">
          {/*====== video ======*/}
          <div className="NstSl_cn">
            <div className="NstSl_wr">
              {/* head */}
              <HeaderContent />
              {/* swiper */}
              {isClient && isDataAvailable && (
                <Swiper
                  modules={[Mousewheel, Navigation, Virtual]}
                  ref={swipeRef}
                  className="NstSl_rw"
                  wrapperClass="NstSl_ul"
                  effect="slide"
                  direction="vertical"
                  loop={false}
                  grabCursor={true}
                  centeredSlides={true}
                  initialSlide={0}
                  allowSlideNext={changeSlide ? true : false}
                  allowSlidePrev={changeSlide ? true : false}
                  cssMode={false}
                  speed={400}
                  scrollbar={{
                    el: ".swiper-scrollbar",
                    hide: false,
                    draggable: true,
                  }}
                  slidesPerView={1}
                  mousewheel={{
                    releaseOnEdges: true,
                    invert: false,
                  }}
                  keyboard={true}
                  navigation={{
                    nextEl: ".NstNv_nxt",
                    prevEl: ".NstNv_prv",
                  }}
                  breakpoints={{
                    768: {
                      centeredSlides: true,
                      cssMode: true,
                      direction: "horizontal",
                      loop: false,
                      slidesPerView: 1.65,
                      speed: 400,
                      mousewheel: true,
                      keyboard: true,
                    },
                    1024: {
                      centeredSlides: true,
                      cssMode: true,
                      direction: "horizontal",
                      loop: false,
                      slidesPerView: 2,
                      speed: 80,
                      mousewheel: true,
                      keyboard: true,
                      grabCursor: true,
                    },
                    1550: {
                      centeredSlides: true,
                      cssMode: true,
                      direction: "horizontal",
                      loop: false,
                      slidesPerView: 2.6,
                      speed: 80,
                      mousewheel: true,
                      keyboard: true,
                    },
                  }}
                  onSwiper={(swiper) => {
                    swiper.update();
                  }}
                  onInit={(swiper) => {
                    initSwiper(swiper);
                    playActiveSlideVideo(swiper);
                  }}
                  onSlideChange={(swiper) => {
                    // console.log(
                    //   "swiper active index",
                    //   swiper.activeIndex,
                    //   swiper.realIndex
                    // );
                    setActiveIndex(swiper.activeIndex);
                    if (timeoutIDs[swiper.realIndex]) {
                      clearTimeout(timeoutIDs[swiper.realIndex]);
                    }

                    timeoutIDs[swiper.realIndex] = setTimeout(() => {
                      handleTimeout(swiper.realIndex);
                    }, 0);
                    updateSlideCount(swiper);
                    playActiveSlideVideo(swiper);
                    handleSlideChange(swiper.activeIndex);
                  }}
                  virtual
                >
                  {/* <div className="swiper-container NstSl_rw"> */}
                  {/* <div className="swiper-wrapper NstSl_ul"> */}
                  {videoNodes.map((item, index) => {
                    const dataIndex = iterator.next().value;
                    const isActive = activeIndex === dataIndex;
                    const d = item;
                    const slides: React.ReactNode[] = [];

                    if (item.type === "video") {
                      slides.push(
                        <SwiperSlide
                          key={d.id}
                          virtualIndex={dataIndex}
                          className="NstSl_li NstSl_li-hdr NstSl_li-vdo"
                        >
                          <VideoSlide
                            id={d.id}
                            pubDate={d.pubDate}
                            title={
                              isEncodedString(d.title)
                                ? decodeURIComponent(escape(d.title))
                                : d.title
                            }
                            link={d.link}
                            thumbImage={d.thumb_image}
                            image={d.fullimage}
                            category={d.category}
                            categoryName={d.category_name}
                            description={d.description}
                            highlights={d.highlights}
                            show={d.show}
                            filepath={d["media:filepath"]}
                            duration={d["media:duration"]}
                            applink={d.applink}
                            isActive={isActive}
                            swiperRef={swipeRef}
                          />
                        </SwiperSlide>
                      );
                    }

                    if (item.type === "story") {
                      slides.push(
                        <SwiperSlide
                          key={d.id}
                          virtualIndex={dataIndex}
                          className="NstSl_li NstSl_li-hdr"
                        >
                          <ArticleSlide
                            id={d.id}
                            title={
                              isEncodedString(d.title)
                                ? decodeURIComponent(escape(d.title))
                                : d.title
                            }
                            description={d.excerpt}
                            link={d.link}
                            image={d.fullimage}
                            thumbImage={d.thumb_image}
                            category={d.category}
                            categoryName={d.category_name}
                            highlights={d.highlights}
                            applink={d.applink}
                            pubDate={d.pubDate}
                            swiperRef={swipeRef}
                            isActive={isActive}
                          />
                        </SwiperSlide>
                      );
                    }

                    return slides;
                  })}

                  {/* <SwiperSlide
                    className="NstSl_li NstSl_li-hdr NstSl_li-vdo"
                    onClick={(e) => {
                      handleShowHeader(e);
                    }}
                  >
                    <VideoSlide />
                  </SwiperSlide>
                  <SwiperSlide className="NstSl_li NstSl_li-hdr NstSl_li-vdo">
                    <VideoSlideH />
                  </SwiperSlide>
                  <SwiperSlide className="NstSl_li NstSl_li-hdr NstSl_li-vdo">
                    <VideoSlide />
                  </SwiperSlide>

                  <SwiperSlide
                    className="NstSl_li NstSl_li-hdr"
                    onClick={(e) => {
                      handleShowHeader(e);
                    }}
                  >
                    <ArticleSlide />
                  </SwiperSlide>

                  <SwiperSlide className="NstSl_li">
                    <WebstorySlide />
                  </SwiperSlide>

                  <SwiperSlide className="NstSl_li NstSl_li-hdr">
                    <ArticleSlideL />
                  </SwiperSlide>

                  <SwiperSlide className="NstSl_li NstSl_li-hdr">
                    <ScoreCard />
                  </SwiperSlide>

                  <SwiperSlide className="NstSl_li NstSl_li-hdr">
                    <ArticleSlideY />
                  </SwiperSlide>
                  <SwiperSlide className="NstSl_li NstSl_li-hdr">
                    <ArticleSlideIfm />
                  </SwiperSlide>

                  <SwiperSlide className="NstSl_li NstSl_li-hdr">
                    <ScoreCard />
                  </SwiperSlide>

                  <SwiperSlide className="NstSl_li NstSl_li-hdr">
                    <ArticleSlide />
                  </SwiperSlide> */}
                  {/* </div> */}

                  <CardCounter
                    currentSlideNumber={currentSlideNumber}
                    totalSlides={totalSlides}
                  />
                  <SwiperNav />
                </Swiper>
              )}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
