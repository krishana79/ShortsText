import React from "react";

const SideNavigationMenu = () => {
  return (
    <>
      {/* Main Nav */}
      <ul className="sid-nav_ul">
        {/* Select Language */}
        {/* <li class="snv-lng">
                    <div class="sid-nav_li sid-nav_li-ttl">Select Language</div>
                    <div class="sid-nav_div">
                        <ul class="sid-nav_sub">
                            <li class="snv_lg-li"><a class="snv_lg-lnk snv_lg-act ripple" href="#"><span
                                        class="snv_lg-dot snv_lg-dot-act"></span> English</a>
                            </li>
                            <li class="snv_lg-li"><a class="snv_lg-lnk ripple" href="#"><span
                                        class="snv_lg-dot"></span> हिन्दी</a>
                            </li>
                            <li class="snv_lg-li"><a class="snv_lg-lnk ripple" href="#"><span
                                        class="snv_lg-dot"></span> தமிழ்</a>
                            </li>
                            <li class="snv_lg-li"><a class="snv_lg-lnk ripple" href="#"><span
                                        class="snv_lg-dot"></span> বাংলা</a>
                            </li>
  
                        </ul>
                    </div>
                </li> */}
        {/* News Updates */}
        <li className="snv-two">
          <div className="sid-nav_li sid-nav_li-ttl">News Updates</div>
          <ul className="snv_cn-ul">
            <li className="snv_cn-li">
              <a
                className="snv_cn-lnk ripple" // href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="snv_ic-wrp">
                  <svg className="vj_icn vj_coronavirus">
                    <use xlinkHref="#vj_coronavirus" />
                  </svg>
                </div>{" "}
                Coronavirus
              </a>
            </li>
            <li className="snv_cn-li">
              <a
                className="snv_cn-lnk ripple" // href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="snv_ic-wrp">
                  <svg className="vj_icn vj_live-tv">
                    <use xlinkHref="#vj_live-tv" />
                  </svg>
                </div>{" "}
                Live TV
              </a>
            </li>
            <li className="snv_cn-li">
              <a
                className="snv_cn-lnk ripple" // href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="snv_ic-wrp">
                  <svg className="vj_icn vj_latest">
                    <use xlinkHref="#vj_latest" />
                  </svg>
                </div>{" "}
                Latest
              </a>
            </li>
            <li className="snv_cn-li">
              <a
                className="snv_cn-lnk ripple" // href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="snv_ic-wrp">
                  <svg className="vj_icn vj_india">
                    <use xlinkHref="#vj_india" />
                  </svg>
                </div>{" "}
                India
              </a>
            </li>
            <li className="snv_cn-li">
              <a
                className="snv_cn-lnk ripple" // href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="snv_ic-wrp">
                  <svg className="vj_icn vj_videos">
                    <use xlinkHref="#vj_videos" />
                  </svg>
                </div>{" "}
                Video
              </a>
            </li>
            <li className="snv_cn-li">
              <a
                className="snv_cn-lnk ripple" // href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="snv_ic-wrp">
                  <svg className="vj_icn vj_cricket">
                    <use xlinkHref="#vj_cricket" />
                  </svg>
                </div>{" "}
                Cricket
              </a>
            </li>
            <li className="snv_cn-li">
              <a
                className="snv_cn-lnk ripple" // href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="snv_ic-wrp">
                  <svg className="vj_icn vj_gadgets">
                    <use xlinkHref="#vj_gadgets" />
                  </svg>
                </div>{" "}
                Gadeget
              </a>
            </li>
            <li className="snv_cn-li">
              <a
                className="snv_cn-lnk ripple" // href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="snv_ic-wrp">
                  <svg className="vj_icn vj_movies">
                    <use xlinkHref="#vj_movies" />
                  </svg>
                </div>{" "}
                Movies
              </a>
            </li>
          </ul>
        </li>
        {/* Featured Links */}
        <li className="snv-two">
          <div className="sid-nav_li sid-nav_li-ttl">Featured Links</div>
          {/* Sub Nav */}
          <div className="sid-nav_div">
            <ul className="sid-nav_sub">
              <li className="snv_cn-li">
                <a
                  className="snv_cn-lnk ripple" // href="#"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="snv_ic-wrp">
                    <svg className="vj_icn vj_amp-stories">
                      <use xlinkHref="#vj_amp-stories" />
                    </svg>
                  </div>{" "}
                  Web Stories<span className="snv_cn-tg">NEW</span>
                </a>
              </li>
              <li className="snv_cn-li">
                <a
                  className="snv_cn-lnk ripple" // href="#"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="snv_ic-wrp">
                    <svg className="vj_icn vj_hop">
                      <use xlinkHref="#vj_hop" />
                    </svg>
                  </div>{" "}
                  NDTV HOP
                </a>
              </li>
            </ul>
          </div>
        </li>
        {/* More News */}
        <li className="snv-two">
          <div className="sid-nav_li sid-nav_li-ttl">More News</div>
          <div className="snv-hrsrl">
            <ul className="snv_cn-ul">
              <li className="snv_cn-li">
                <a
                  className="snv_cn-lnk ripple"
                  href="https://www.ndtv.com/offbeat"
                >
                  <div className="snv_ic-wrp">
                    <svg className="vj_icn vj_offbeat">
                      <use xlinkHref="#vj_offbeat" />
                    </svg>
                  </div>{" "}
                  Offbeat
                </a>
              </li>
              <li className="snv_cn-li">
                <a
                  className="snv_cn-lnk ripple"
                  href="https://www.carandbike.com"
                >
                  <div className="snv_ic-wrp">
                    <svg className="vj_icn vj_auto">
                      <use xlinkHref="#vj_auto" />
                    </svg>
                  </div>{" "}
                  Auto
                </a>
              </li>
              <li className="snv_cn-li">
                <a
                  className="snv_cn-lnk ripple"
                  href="https://www.ndtv.com/world-news"
                >
                  <div className="snv_ic-wrp">
                    <svg className="vj_icn vj_world-web">
                      <use xlinkHref="#vj_world-web" />
                    </svg>
                  </div>{" "}
                  World
                </a>
              </li>
              <li className="snv_cn-li">
                <a
                  className="snv_cn-lnk ripple"
                  href="https://www.ndtv.com/cities"
                >
                  <div className="snv_ic-wrp">
                    <svg className="vj_icn vj_cities">
                      <use xlinkHref="#vj_cities" />
                    </svg>
                  </div>{" "}
                  Cities
                </a>
              </li>
              <li className="snv_cn-li">
                <a
                  className="snv_cn-lnk ripple"
                  href="https://www.ndtv.com/south"
                >
                  <div className="snv_ic-wrp">
                    <svg className="vj_icn vj_south">
                      <use xlinkHref="#vj_south" />
                    </svg>
                  </div>{" "}
                  South
                </a>
              </li>
              <li className="snv_cn-li">
                <a
                  className="snv_cn-lnk ripple"
                  href="https://www.ndtv.com/opinion"
                >
                  <div className="snv_ic-wrp">
                    <svg className="vj_icn vj_opinion">
                      <use xlinkHref="#vj_opinion" />
                    </svg>
                  </div>{" "}
                  Opinion
                </a>
              </li>
              <li className="snv_cn-li">
                <a
                  className="snv_cn-lnk ripple"
                  href="https://www.ndtv.com/notifications"
                >
                  <div className="snv_ic-wrp">
                    <svg className="vj_icn vj_notification">
                      <use xlinkHref="#vj_notification" />
                    </svg>
                  </div>{" "}
                  Notification
                </a>
              </li>
              <li className="snv_cn-li">
                <a
                  className="snv_cn-lnk ripple"
                  href="https://www.ndtv.com/elections"
                >
                  <div className="snv_ic-wrp">
                    <svg className="vj_icn vj_elections">
                      <use xlinkHref="#vj_elections" />
                    </svg>
                  </div>{" "}
                  Elections
                </a>
              </li>
              <li className="snv_cn-li">
                <a
                  className="snv_cn-lnk ripple"
                  href="https://www.ndtv.com/business"
                >
                  <div className="snv_ic-wrp">
                    <svg className="vj_icn vj_business">
                      <use xlinkHref="#vj_business" />
                    </svg>
                  </div>{" "}
                  Business
                </a>
              </li>
              <li className="snv_cn-li">
                <a className="snv_cn-lnk ripple" href="https://food.ndtv.com">
                  <div className="snv_ic-wrp">
                    <svg className="vj_icn vj_food">
                      <use xlinkHref="#vj_food" />
                    </svg>
                  </div>{" "}
                  Food
                </a>
              </li>
              <li className="snv_cn-li">
                <a
                  className="snv_cn-lnk ripple"
                  href="https://doctor.ndtv.com/"
                >
                  <div className="snv_ic-wrp">
                    <svg className="vj_icn vj_doctor">
                      <use xlinkHref="#vj_doctor" />
                    </svg>
                  </div>{" "}
                  Doctor NDTV
                </a>
              </li>
              <li className="snv_cn-li">
                <a
                  className="snv_cn-lnk ripple"
                  href="https://www.ndtv.com/education"
                >
                  <div className="snv_ic-wrp">
                    <svg className="vj_icn vj_education">
                      <use xlinkHref="#vj_education" />
                    </svg>
                  </div>{" "}
                  Education
                </a>
              </li>
              <li className="snv_cn-li">
                <a
                  className="snv_cn-lnk ripple"
                  href="https://www.ndtv.com/science"
                >
                  <div className="snv_ic-wrp">
                    <svg className="vj_icn vj_science">
                      <use xlinkHref="#vj_science" />
                    </svg>
                  </div>{" "}
                  Science
                </a>
              </li>
              <li className="snv_cn-li">
                <a
                  className="snv_cn-lnk ripple"
                  href="https://swirlster.ndtv.com/"
                >
                  <div className="snv_ic-wrp">
                    <svg className="vj_icn vj_swirlster">
                      <use xlinkHref="#vj_swirlster" />
                    </svg>
                  </div>{" "}
                  Swirlster
                </a>
              </li>
              <li className="snv_cn-li">
                <a
                  className="snv_cn-lnk ripple"
                  href="https://www.ndtv.com/photos"
                >
                  <div className="snv_ic-wrp">
                    <svg className="vj_icn vj_photos">
                      <use xlinkHref="#vj_photos" />
                    </svg>
                  </div>{" "}
                  Photos
                </a>
              </li>
              <li className="snv_cn-li">
                <a className="snv_cn-lnk ripple" href="https://sports.ndtv.com">
                  <div className="snv_ic-wrp">
                    <svg className="vj_icn vj_sports">
                      <use xlinkHref="#vj_sports" />
                    </svg>
                  </div>{" "}
                  Sports
                </a>
              </li>
              <li className="snv_cn-li">
                <a
                  className="snv_cn-lnk ripple"
                  href="https://www.ndtv.com/people"
                >
                  <div className="snv_ic-wrp">
                    <svg className="vj_icn vj_people">
                      <use xlinkHref="#vj_people" />
                    </svg>
                  </div>{" "}
                  People
                </a>
              </li>
              <li className="snv_cn-li">
                <a
                  className="snv_cn-lnk ripple"
                  href="https://social.ndtv.com/static/Weather/report"
                >
                  <div className="snv_ic-wrp">
                    <svg className="vj_icn vj_weather">
                      <use xlinkHref="#vj_weather" />
                    </svg>
                  </div>{" "}
                  Weather
                </a>
              </li>
              <li className="snv_cn-li">
                <a
                  className="snv_cn-lnk ripple"
                  href="https://www.ndtv.com/tv-schedule"
                >
                  <div className="snv_ic-wrp">
                    <svg className="vj_icn vj_tv-schedule">
                      <use xlinkHref="#vj_tv-schedule" />
                    </svg>
                  </div>{" "}
                  TV Schedule
                </a>
              </li>
              <li className="snv_cn-li">
                <a
                  className="snv_cn-lnk ripple"
                  href="https://www.ndtv.com/indian-railway"
                >
                  <div className="snv_ic-wrp">
                    <svg className="vj_icn vj_trains">
                      <use xlinkHref="#vj_trains" />
                    </svg>
                  </div>{" "}
                  Trains
                </a>
              </li>
              <li className="snv_cn-li">
                <a className="snv_cn-lnk ripple" href="https://www.mojarto.com">
                  <div className="snv_ic-wrp">
                    <svg className="vj_icn vj_art">
                      <use xlinkHref="#vj_art" />
                    </svg>
                  </div>{" "}
                  Art
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </>
  );
};

export default SideNavigationMenu;
