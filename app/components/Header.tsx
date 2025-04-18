import React, { useEffect } from "react";
import logo from "../images/news_shorts_logo.svg";
import useStore from "~/utils/store";
const Header = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const setSidenavtoggle = useStore((state) => state.setSidenavtoggle);
  const toggleLoginBtn = useStore((state) => state.toggleLoginBtn);
  const setToggleLoginBtn = useStore((state) => state.setToggleLoginBtn);
  const setOpenLoginPanel = useStore((state) => state.setOpenLoginPanel);
  const setIsDarkMode = useStore((state) => state.setIsDarkMode);
  const hoverMoreIcon = useStore((state) => state.hoverMoreIcon);
  const setLoginText = useStore((state) => state.setLoginText);

  useEffect(() => {
    const loginActive = document.querySelectorAll(".log_btn-act");
    // console.log("loginactive is: ", loginActive)
    if (loginActive.length > 0) {
      setOpenLoginPanel(true);
      setLoginText("View Profile");
    } else {
      setOpenLoginPanel(false);
      setLoginText("Login");
    }
  }, [toggleLoginBtn]);
  useEffect(() => {
    const loginActive = document.querySelectorAll(".log_btn-act");
    if (loginActive.length > 0) {
      setLoginText("View Profile");
    } else {
      setLoginText("Login");
    }
  },[hoverMoreIcon]);

  return (
    <>
      {/*====== Logo, Main Navigation & Right Icons Live Tv, Notification and Search ======*/}
      <nav className="m-nv m-nv_clr m-nv_out NstHd_rgt">
        <div className="vjl-cntr_full">
          <div className="vjl-row">
            <div className="vjl-md-12">
              {/* <nav class="Mb-Nav"> */}
              <nav>
                {/* Menu icon */}
                <div className="brw-nav">
                  {/* Browse Button */}
                  <a
                    // href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setSidenavtoggle(true);
                    }}
                    className="sid-nav-icn_lnk side-nav-trigger"
                    // data-trigger=".nav-trigger"
                    // data-class="js_sid-nav"
                  >
                    <div className="sid-nav-icn_wrp">
                      <svg className="vj_icn vj_menu">
                        <use xlinkHref="#vj_menu" />
                      </svg>
                    </div>
                  </a>
                </div>
                {/* Logo - Dropdown */}
                <div className="hdr-lhs-col fleft Nst_lgo-wr">
                  <a className="ndtv-logo Nst_lgo-lk" href="home-ndtv.html">
                    {/* <img class="vj_icn vj_logo-ndtv" alt=""
                                            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzNjUgNjguOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzY1IDY4Ljk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KCS5zdDF7ZmlsbDojRUUwMDAwO30KPC9zdHlsZT4KPGcgaWQ9IlhNTElEXzFfIj4KCTxwYXRoIGlkPSJYTUxJRF8zXyIgY2xhc3M9InN0MCIgZD0iTTAsMC4xYzguNCwwLDE2LjgtMC4xLDI1LjIsMEMzNS4yLDAuNyw0NCw3LjQsNDguOCwxNmM0LjgsOS4xLDksMTguNSwxMy45LDI3LjUKCQljMS42LDMuMiw0LjgsNS40LDguNCw1LjVDNzAuOSwzMi43LDcxLDE2LjQsNzEsMGM3LjQsMC4xLDE0LjcsMCwyMi4xLDBjMCw3LjEsMCwxNC4yLTAuMSwyMS40Yy01LjEsMi05LjQsNi41LTkuNSwxMi4yCgkJYy0wLjcsNi4yLDMuOSwxMS44LDkuNSwxMy43YzAuMSw3LjIsMCwxNC4zLDAuMSwyMS41Yy03LjMsMC4xLTE0LjcsMC0yMiwwLjFjLTguNSwwLjQtMTYuOS0zLjUtMjIuMy05LjkKCQljLTYtNy4zLTkuMS0xNi41LTEzLjYtMjQuNkMzMi4xLDI4LjYsMjkuOSwyMCwyMiwxOS43YzAsMTYuNC0wLjEsMzIuNywwLjEsNDkuMWMtNy40LDAuMS0xNC43LDAuMS0yMi4xLDBDMC4xLDQ1LjksMC4xLDIzLDAsMC4xeiIKCQkvPgoJPHBhdGggaWQ9IlhNTElEXzZfIiBjbGFzcz0ic3QwIiBkPSJNOTkuNiwwLjFjNjIuNCwwLDEyNC43LTAuMiwxODcuMSwwLjFjOS4zLDE2LjksMTguOCwzMy43LDI4LDUwLjZjOS4yLTE2LjgsMTcuNy0zNCwyNi44LTUwLjgKCQljNy44LDAuMSwxNS42LTAuMSwyMy41LDAuMmMtMS4zLDEuOS0yLjYsMy44LTMuNyw1LjhjLTExLDIxLTIyLjEsNDEuOS0zMy4yLDYyLjhjLTguOSwwLTE3LjksMC0yNi44LDAKCQljLTkuNy0xNy41LTE5LjYtMzUtMjkuMi01Mi41Yy05LjgtMC4xLTE5LjcsMC0yOS41LDBjMCwxNy41LDAuMSwzNSwwLDUyLjVjLTcuMSwwLTE0LjEsMC0yMS4yLDBjMC0xNy41LDAuMS0zNSwwLTUyLjYKCQljLTEwLjgsMC4xLTIxLjcsMC0zMi41LDAuMWMyLDcuNSwxLjgsMTUuMywxLjUsMjNjLTAuMyw3LjgtMi40LDE2LjItOC4yLDIxLjhjLTUuNiw1LjgtMTQsNy44LTIxLjgsNy43CgkJYy0yMC4yLTAuMS00MC40LDAuMS02MC41LTAuMWMwLjEtNy4yLDAtMTQuMywwLjEtMjEuNGM0LjgtMS45LDguOS01LjgsOS40LTExLjJjMS02LjUtMy41LTEyLjYtOS40LTE0LjcKCQlDOTkuNiwxNC4zLDk5LjgsNy4yLDk5LjYsMC4xIE0xMjEuMSwxNi41YzAuMiwxMiwwLjEsMjMuOSwwLjEsMzUuOWMxMi4xLDAuMiwyNC4yLDAuMSwzNi4yLDAuMWM0LjcsMC4yLDEwLjMtMi40LDExLTcuNgoJCWMwLjQtNi43LDAuMy0xMy40LDAuMS0yMC4xYy0wLjUtNS40LTYuMS04LjQtMTEuMS04LjNDMTQ1LjMsMTYuMywxMzMuMiwxNi4yLDEyMS4xLDE2LjV6Ii8+Cgk8cGF0aCBpZD0iWE1MSURfN18iIGNsYXNzPSJzdDEiIGQ9Ik04My41LDMzLjZjMC4xLTUuNyw0LjQtMTAuMyw5LjUtMTIuMmMyLjItMC4yLDQuNS0wLjIsNi43LDBjNS45LDIuMiwxMC40LDguMiw5LjQsMTQuNwoJCWMtMC40LDUuMy00LjYsOS4zLTkuNCwxMS4yYy0yLjIsMC4yLTQuNSwwLjItNi43LDBDODcuNCw0NS40LDgyLjgsMzkuOSw4My41LDMzLjZ6Ii8+CjwvZz4KPC9zdmc+Cg=="> */}
                    <img
                      src={logo}
                      className="vj_icn vj_logo-ndtv Nst_lgo"
                      alt=""
                    />
                  </a>
                  {/*== Language dropdown icon==*/}
                  {/* <div class="tp_lng side-nav-trigger" data-trigger=".nav-trigger"
                                        data-class="js_SchLng">
                                        <div class="tp_lng-ttl Lng_swt drp-lnk"><svg class="vj_icn vj_lang-toggle">
                                                <use xlink:href="#vj_lang-toggle"></use>
                                            </svg>
                                        </div>
                                    </div> */}
                </div>
              </nav>
              {/* Right Icons, Notification and Search */}
              <div className="m-nv_Rt-wr">
                {/* Login / Sign up */}
                <div
                  className="log_btn side-nav-trigger Nst_log-btn"
                  // data-trigger=".nav-trigger"
                  // data-class="js_sid-nav-right"
                  onClick={(e) => {
                    e.stopPropagation();
                    // setOpenLoginPanel(!openLoginPanel);
                    setToggleLoginBtn(!toggleLoginBtn);
                    if (!window.parent_c_islogin()) {
                      let __rurl = window.location.href;
                      console.log(
                        "loadScriptlogin header:",
                        window.location.origin
                      );

                      let scriptUrl =
                        "https://auth.ndtv.com/w/sso.html?siteurl=";
                      if (
                        window.location.origin == "https://stage-www.ndtv.com"
                      ) {
                        scriptUrl =
                          "https://stage-auth.ndtv.com/w/sso.html?siteurl=";
                      }

                      window.location.href =
                        scriptUrl + encodeURIComponent(__rurl);
                      // console.log("Hi Krishna",__rurl,"vahsjv:",encodeURIComponent(__rurl))
                      // alert("Hi from beeps")
                    }
                    // else {
                    //   const toggleClass = element.getAttribute("data-class");
                    //   document.body.classList.toggle(toggleClass);
                    // }
                  }}
                >
                  <div className="log_btn-dt" />
                  <svg className="vj_icn vj_user">
                    <use xlinkHref="#vj_user" />
                  </svg>
                  <div className="log_btn-tx">Login</div>
                  <svg
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      width: 0,
                      height: 0,
                      overflow: "hidden",
                    }}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <symbol id="vj_user" viewBox="0 0 32 32">
                        <path d="M14.631 29.953c-0.266-0.137-0.559-0.109-0.841-0.147-1.647-0.225-3.209-0.719-4.675-1.494-2.334-1.234-4.191-2.991-5.603-5.222-0.206-0.325-0.225-0.619-0.050-0.969 1.281-2.572 3.303-4.216 6.091-4.916 0.219-0.056 0.447-0.087 0.669-0.134 0.441-0.094 0.816 0.031 1.178 0.284 1.441 1.016 3.050 1.469 4.806 1.394 1.334-0.059 2.619-0.381 3.694-1.169 0.803-0.591 1.578-0.566 2.441-0.325 2.441 0.681 4.284 2.131 5.578 4.3 0.144 0.241 0.253 0.503 0.372 0.759 0.087 0.188 0.059 0.369-0.050 0.544-2.119 3.422-5.103 5.688-9.025 6.684-0.697 0.178-1.409 0.278-2.125 0.35-0.059 0.006-0.131-0.022-0.166 0.056-0.762 0.003-1.528 0.003-2.294 0.003z"></path>
                        <path d="M15.828 16.509c-3.988-0.009-7.275-3.309-7.253-7.278 0.019-3.994 3.313-7.272 7.281-7.247 3.991 0.025 7.241 3.288 7.238 7.263 0 3.984-3.291 7.272-7.266 7.262z"></path>
                      </symbol>
                    </defs>
                  </svg>
                </div>
                {/* Change Theme Dark and Light mode */}
                <div
                  className="day_night-wrp ttp"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsDarkMode(!isDarkMode);
                  }}
                >
                  <a
                    className="day_night-lnk"
                    // href="#"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <label className="day_night-icn">
                      <input type="checkbox" />
                      <div />
                    </label>
                  </a>
                  <div className="tip on-bottom">
                    <div className="tip_wrp">Dark / Light mode</div>
                  </div>
                </div>
                {/* Notification Icon */}
                {/* <span class="t-icn-nv t-icn-nt ttp">
                                    <svg class="vj_icn vj_bell">
                                        <use xlink:href="#vj_bell"></use>
                                    </svg>
                                    <div class="tip on-bottom">
                                        <div class="tip_wrp">News alerts are turned off. <a class="ttp-lnk"
                                                href="javascript:void(0);">Click here to turn on.</a></div>
                                    </div>
                                </span> */}
                <ul className="m-nv_ul NsLng_cn">
                  {/* Link 8 */}
                  <li className="m-nv_li dd-nav_hvr NsLng_wr">
                    <svg className="vj_icn vj_lang-toggle dd-drp_icn Ns_lng-icn">
                      <use xlinkHref="#vj_lang-toggle" />
                    </svg>
                    <div className="dd-nav NsLngNv_cn">
                      {/* Inner Link 1 */}
                      <div className="dd-nav_in NsLngNv_wr">
                        <ul className="dd-nav_ul NsLngNv_ul">
                          <li className="dd-nav_li NsLngNv_li">
                            <a
                              className="m-nv_lnk NsLngNv_li-lk" // href="#"
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                            >
                              English
                            </a>
                          </li>
                          <li className="dd-nav_li NsLngNv_li">
                            <a
                              className="m-nv_lnk NsLngNv_li-lk" // href="#"
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                            >
                              Hindi
                            </a>
                          </li>
                          <li className="dd-nav_li NsLngNv_li">
                            <a
                              className="m-nv_lnk NsLngNv_li-lk" // href="#"
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                            >
                              Marathi
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
