import React from "react";

const SocialMediaVertical = () => {
  return (
    <>
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
            <svg className="vj_icn vj_chat NstEl_icn-svg NstEl_icn-svg">
              <use xlinkHref="#vj_chat" />
            </svg>
          </div>
        </div>
        {/* Share */}
        <div className="NstEl_icn-lk">
          <div className="NstEl_icn">
            {/* Share */}
            <div className="SSR_drp SSR_btn-sm SSR_drp-nav-tp NstEl_shr-pp">
              <a
                className="SSR_btn-lnk" // href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
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
                      // href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
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
                      // href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
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
                      // href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
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
                      // href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
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
                      // href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
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
                      // href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
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
            <svg className="vj_icn vj_more NstEl_icn-svg">
              <use xlinkHref="#vj_more" />
            </svg>
          </div>
          <div className="NstElMr_wr NstElMr_wr1">
            <ul className="NstElMr_ul">
              <li className="NstElMr_li-lk">
                <a // href="#"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="NstElMr_li"
                >
                  Login
                </a>
              </li>
              <li className="NstElMr_li-lk">
                <a // href="#"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="NstElMr_li"
                >
                  Notification
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMediaVertical;
