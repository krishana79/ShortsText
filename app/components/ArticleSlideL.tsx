import React from "react";
import SocialMediaVertical from "./SocialMediaVertical";
import SocialMediaHorizontal from "./SocialMediaHorizontal";
import ArticleList from "./ArticleList";
import ArticleHeadImg from "./ArticleHeadImg";
import ArticleHeading from "./ArticleHeading";
import useStore from "~/utils/store";

const ArticleSlideL = () => {
  const setOpenUtilPopUp = useStore((state) => state.setOpenUtilPopUp);
  return (
    // <div className="swiper-slide NstSl_li NstSl_li-hdr">
    <div className="NstSlCrd_cn">
      <div className="NstSlCrd_wr">
        <SocialMediaVertical />
        <div className="NstCrd_cn">
          <div className="NstCrd_wr">
            <div className="NstCrd-a">
              <ArticleHeadImg />
              {/* <div className="NstCrd_img">
                  <div className="img-gr img-gr_a">
                    <img
                      className="lz_img crd_img-full"
                      alt="img"
                      src="https://c.ndtvimg.com/2024-03/v5flrev8_beauty_625x300_01_March_24.jpg"
                    />
                  </div>
                  <div className="NstCrd_lgo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 79.4 15.8"
                    >
                      <defs>
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n                                            .cls-2 {\n                                              fill: #e92729;\n                                              fill-rule: evenodd;\n                                            }\n                                          ",
                          }}
                        />
                      </defs>
                      <path
                        fill="var(--vj-cl-Nst19)"
                        d="M15.7,.1V11.3h-.3c-1,0-1.7-1.1-1.9-1.6l-2.6-5.5C9.7,1.6,7.5,.1,5,.1H0V15.8H4.8V4.6h.2c1.1,0,1.8,1.2,1.9,1.6l2.7,5.5c1.1,2.6,3.4,4.1,5.9,4.1h5V.1h-4.8ZM74.5,.1l-5.8,11.7L62.5,.1H21.8V15.8h13.1c4.5,0,6.6-2.7,6.6-7.2v-1.8c0-.5,0-1.8-.4-3.1h7.2V15.7h4.6V3.7h6.4l6.4,12h5.8L79.4,0h-4.9ZM36.9,9.6c0,1.6-.8,2.5-2.7,2.5h-7.7V3.8h7.7c1.8,0,2.7,1,2.7,2.4v3.4Z"
                      />
                      <path
                        className="cls-2"
                        d="M23.9,8c0,1.6-1.3,2.9-2.9,2.9s-2.9-1.3-2.9-2.9,1.3-2.9,2.9-2.9,2.9,1.4,2.9,2.9"
                      />
                    </svg>
                  </div>
                </div> */}
              <div className="NstCrd_tx-cn">
                <div className="NstCrd_tx-wr">
                  <ArticleHeading />
                  <ArticleList />
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

export default ArticleSlideL;
