import React from "react";
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

const Content = () => {
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
              <div className="swiper-container NstSl_rw">
                <div className="swiper-wrapper NstSl_ul">
                  <VideoSlide />
                  <VideoSlideH />
                  <VideoSlide />
                  <ArticleSlide />
                  <WebstorySlide />
                  <ArticleSlideL />
                  <ScoreCard />
                  <ArticleSlideY />
                  <ArticleSlideIfm />
                  <ScoreCard />
                  <ArticleSlide />
                </div>
                <SwiperNav />
                {/* <CardCounter /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
