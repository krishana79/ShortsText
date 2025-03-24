import React from "react";

const ScoreCard = () => {
  return (
    <>
      <div className="swiper-slide NstSl_li NstSl_li-hdr">
        <div className="NstSlCrd_cn">
          <div className="NstSlCrd_wr">
            <div className="NstEl_icn-wr1">
              {/* HeartLike */}
              <div className="NstEl_icn-lk">
                <div className="NstEl_icn js-HeartLike">
                  <svg className="vj_icn vj_heart">
                    <use xlinkHref="#vj_heart" />
                  </svg>
                </div>
              </div>
              {/* chat */}
              <div className="NstEl_icn-lk">
                <div className="NstEl_icn js-MorInf">
                  <svg className="vj_icn vj_chat NstEl_icn-svg">
                    <use xlinkHref="#vj_chat" />
                  </svg>
                </div>
              </div>
              {/* Share */}
              <div className="NstEl_icn-lk">
                <div className="NstEl_icn">
                  {/* Share */}
                  <div className="SSR_drp SSR_btn-sm SSR_drp-nav-tp NstEl_shr-pp">
                    <a className="SSR_btn-lnk" href="javascript:void(0)">
                      <svg className="SSR_icn vj_icn vj_share2">
                        <use xlinkHref="#vj_share2" />
                      </svg>
                      <span className="SSR_btn-tx"> Share</span>
                    </a>
                    <div className="SSR_drp-nav SSR_WEB">
                      <ul className="SSR_drp-nav-ul">
                        <li className="SSR_drp-nav-li">
                          <a
                            className="SSR_drp-nav-lnk"
                            href="javascript:void(0)"
                          >
                            <svg className="vj_icn vj_facebook-fill vj_ss-icn">
                              <use xlinkHref="#vj_facebook-fill" />
                            </svg>
                            Facebook
                          </a>
                        </li>
                        <li className="SSR_drp-nav-li">
                          <a
                            className="SSR_drp-nav-lnk"
                            href="javascript:void(0)"
                          >
                            <svg className="vj_icn vj_twitter-fill vj_ss-icn">
                              <use xlinkHref="#vj_twitter-fill" />
                            </svg>
                            Twitter
                          </a>
                        </li>
                        <li className="SSR_drp-nav-li">
                          <a
                            className="SSR_drp-nav-lnk"
                            href="javascript:void(0)"
                          >
                            <svg className="vj_icn vj_whatsapp-fill vj_ss-icn">
                              <use xlinkHref="#vj_whatsapp-fill" />
                            </svg>
                            Whatsapp
                          </a>
                        </li>
                        <li className="SSR_drp-nav-li">
                          <a
                            className="SSR_drp-nav-lnk"
                            href="javascript:void(0)"
                          >
                            <svg className="vj_icn vj_reddit-fill vj_ss-icn">
                              <use xlinkHref="#vj_reddit-fill" />
                            </svg>
                            Reddit
                          </a>
                        </li>
                        <li className="SSR_drp-nav-li">
                          <a
                            className="SSR_drp-nav-lnk"
                            href="javascript:void(0)"
                          >
                            <svg className="vj_icn vj_email-fill vj_ss-icn">
                              <use xlinkHref="#vj_email-fill" />
                            </svg>
                            Email
                          </a>
                        </li>
                        <li className="SSR_drp-nav-li">
                          <a
                            className="SSR_drp-nav-lnk"
                            href="javascript:void(0)"
                          >
                            <svg className="vj_icn vj_copy-link vj_ss-icn">
                              <use xlinkHref="#vj_copy-link" />
                            </svg>
                            Copy Link
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* chat */}
              <div className="NstEl_icn-lk NstEl_icn-mr1">
                <div className="NstEl_icn">
                  <svg className="vj_icn vj_chat NstEl_icn-svg">
                    <use xlinkHref="#vj_more" />
                  </svg>
                </div>
                <div className="NstElMr_wr NstElMr_wr1">
                  <ul className="NstElMr_ul">
                    <li className="NstElMr_li-lk">
                      <a href="#" className="NstElMr_li">
                        Login
                      </a>
                    </li>
                    <li className="NstElMr_li-lk">
                      <a href="#" className="NstElMr_li">
                        Notification
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
              <div className="swiper-button-prev NstNvHr_prv">
                <svg className="vj_icn vj_arrow-next NstNv_btn-svg">
                  <use xlinkHref="#vj_arrow-next" />
                </svg>
              </div>
              <div className="swiper-button-next NstNvHr_nxt">
                <svg className="vj_icn vj_arrow-next NstNv_btn-svg">
                  <use xlinkHref="#vj_arrow-next" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreCard;
