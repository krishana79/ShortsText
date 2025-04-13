import React from "react";
import useStore from "~/utils/store";

const HeaderContent = () => {
  const showHeader=  useStore((state) => state.showHeader);
  return (
    <>
      {/* <div className="NstHdr_cn"> */}
      <div className={`NstHdr_cn ` + (showHeader ? "show" : "")}>
        <div className="NstHdr_wr">
          <div className="NstHdr_ul">
            <div className="NstHdr_li">
              {/* Menu icon */}
              <div className="brw-nav">
                {/* Browse Button */}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="sid-nav-icn_lnk side-nav-trigger"
                  data-trigger=".nav-trigger"
                  data-class="js_sid-nav"
                >
                  <div className="sid-nav-icn_wrp NstHdr_li-sidNav">
                    <svg className="vj_icn vj_menu">
                      <use xlinkHref="#vj_menu" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="NstHdr_li">
              <div className="NstHdr_btn-lk">
                <a // href="#"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="NstHdr_btn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 79.4 15.8"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n                                    .cls-2 {\n                                      fill: #e92729;\n                                      fill-rule: evenodd;\n                                    }\n                                  ",
                        }}
                      />
                    </defs>
                    <path
                      fill="#ffffff"
                      d="M15.7,.1V11.3h-.3c-1,0-1.7-1.1-1.9-1.6l-2.6-5.5C9.7,1.6,7.5,.1,5,.1H0V15.8H4.8V4.6h.2c1.1,0,1.8,1.2,1.9,1.6l2.7,5.5c1.1,2.6,3.4,4.1,5.9,4.1h5V.1h-4.8ZM74.5,.1l-5.8,11.7L62.5,.1H21.8V15.8h13.1c4.5,0,6.6-2.7,6.6-7.2v-1.8c0-.5,0-1.8-.4-3.1h7.2V15.7h4.6V3.7h6.4l6.4,12h5.8L79.4,0h-4.9ZM36.9,9.6c0,1.6-.8,2.5-2.7,2.5h-7.7V3.8h7.7c1.8,0,2.7,1,2.7,2.4v3.4Z"
                    />
                    <path
                      className="cls-2"
                      d="M23.9,8c0,1.6-1.3,2.9-2.9,2.9s-2.9-1.3-2.9-2.9,1.3-2.9,2.9-2.9,2.9,1.4,2.9,2.9"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="NstHdr_li">
              <div className="NstHdr_rfsh-lk">
                <a // href="#"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="NstHdr_rfsh NstHdr_icn"
                >
                  <svg className="vj_icn vj_refresh">
                    <use xlinkHref="#vj_refresh" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderContent;
