import React from "react";
import SocialMediaVertical from "./SocialMediaVertical";

const ScoreCard = () => {
  return (
    <>
      {/* <div className="swiper-slide NstSl_li NstSl_li-hdr"> */}
      <div className="NstSlCrd_cn">
        <div className="NstSlCrd_wr">
          <SocialMediaVertical />
          <div className="nested-swiper-container NstSlHr_rw">
            <div className="swiper-wrapper NstSlHr_ul">
              {/* Slides */}
              <div
                className="swiper-slide nested-swiper-slide NstSlHr_li"
                style={{ background: "#221817" }}
              >
                <img
                  className="NstSlHr_img"
                  src="https://drop.ndtv.com/test/msi-ndtv/images/news-shorts/NstSl_li-sport-shorts.png"
                  alt=""
                />
              </div>
              <div
                className="swiper-slide nested-swiper-slide NstSlHr_li"
                style={{ background: "#221817" }}
              >
                <img
                  className="NstSlHr_img"
                  src="https://drop.ndtv.com/test/msi-ndtv/images/news-shorts/NstSl_li-sport1-shorts.png"
                  alt=""
                />
              </div>
              <div
                className="swiper-slide nested-swiper-slide NstSlHr_li"
                style={{ background: "#221817" }}
              >
                <img
                  className="NstSlHr_img"
                  src="https://drop.ndtv.com/test/msi-ndtv/images/news-shorts/NstSl_li-sport2-shorts.png"
                  alt=""
                />
              </div>
              <div
                className="swiper-slide nested-swiper-slide NstSlHr_li"
                style={{ background: "#221817" }}
              >
                <img
                  className="NstSlHr_img"
                  src="https://drop.ndtv.com/test/msi-ndtv/images/news-shorts/NstSl_li-sport3-shorts.png"
                  alt=""
                />
              </div>
            </div>
            {/* If we need pagination */}
            <div className="swiper-pagination NstSlHr_pgn" />
            {/* If we need navigation buttons */}
            <div
              className="swiper-button-prev NstNvHr_prv"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <svg className="vj_icn vj_arrow-next NstNv_btn-svg">
                <use xlinkHref="#vj_arrow-next" />
              </svg>
            </div>
            <div
              className="swiper-button-next NstNvHr_nxt"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <svg className="vj_icn vj_arrow-next NstNv_btn-svg">
                <use xlinkHref="#vj_arrow-next" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ScoreCard;
