import React from "react";
import SocialMediaVertical from "./SocialMediaVertical";
import SocialMediaHorizontal from "./SocialMediaHorizontal";
import ArticleParagraph from "./ArticleParagraph";
import ArticleHeadNdtvIfm from "./ArticleHeadNdtvIfm";
import ArticleHeading from "./ArticleHeading";

const ArticleSlideIfm = () => {
  return (
    <>
      <div className="swiper-slide NstSl_li NstSl_li-hdr">
        <div className="NstSlCrd_cn">
          <div className="NstSlCrd_wr">
            <SocialMediaVertical />
            <div className="NstCrd_cn">
              <div className="NstCrd_wr">
                <div className="NstCrd-a">
                  <ArticleHeadNdtvIfm />
                  <div className="NstCrd_tx-cn">
                    <div className="NstCrd_tx-wr">
                      <ArticleHeading />
                      <ArticleParagraph />
                      <div className="NstCrd_btn-cn NstCrd_btn-cntr">
                        <div className="NstCrd_btn-lk">
                          <a // href="#"
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="NstCrd_btn"
                          >
                            Read full article
                          </a>
                        </div>
                        <SocialMediaHorizontal />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="NstCrd_ad-wr">
                  <div className="NstCrd_ad-cn NstCrd_ad-cn1">
                    <div className="NstCrd_ad-tl">Advertisement</div>
                    <div className="NstCrd_ad">
                      <a // href="#"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        className="NstCrd_ad-lk"
                      >
                        <img
                          className="NstCrd_ad-img"
                          // src="images/ad1.jpg"
                          src=""
                          alt="#"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="NstElMr_ovrly NstElMr_ovrly1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleSlideIfm;
