import React from "react";
import SocialMediaVertical from "./SocialMediaVertical";

const WebstorySlide = () => {
  return (
    <>
      <div className="swiper-slide NstSl_li">
        <div className="NstSlCrd_cn">
          <div className="NstSlCrd_wr">
            <SocialMediaVertical />
            <div className="NstCrd_cn">
              <div className="NstCrd_wr">
                <div className="NstCrd-a">
                  <div
                    className="NstCrd_ifrm-cn"
                    style={{
                      width: "100%",
                      position: "relative",
                      height: "100%",
                      margin: "0 auto",
                      border: 0,
                    }}
                  >
                    <div
                      className="NstCrd_ifrm-wr"
                      style={{
                        height: "100%",
                        objectFit: "cover",
                        width: "100%",
                      }}
                    >
                      <iframe
                        className="NstCrd_ifrm"
                        src="https://drop.ndtv.com/test/msi-ndtv/widgets/ndtv/news-shorts/2025/popup.html"
                        style={{ width: "100%", border: 0, height: "100%" }}
                      />
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
        {/* <div class="NstSl_wbStBtm-cn">
                                          <div class="NstSl_wbStBtm-wr">
                                           <a href="#" class="NstSl_wbStBtm-btn">Expand webstory
                                              
                                           </a>
                                          </div>   
                                      </div> */}
        {/* <div class="NstSl_wbSt-Ovrly"></div> */}
      </div>
    </>
  );
};

export default WebstorySlide;
