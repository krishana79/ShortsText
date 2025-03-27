/* eslint-disable jsx-a11y/anchor-has-content */
import {
  Links,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { rootMeta } from "./utils/MetaUtils";
import { version } from "../package.json";
import atfCss from "./styles/atf.css?url";
import swiperMinCss from "./styles/swiper/swiper-bundle.min.css?url";
import atfBeepDetailsBaseCss from "./styles/atf-beeps-detail-base.css?url";
import SvgIcons from "./components/SvgIcons";
import SideNavigation from "./components/SideNavigation";
import LanguageSwitch from "./components/LanguageSwitch";
import MoreSwipe from "./components/MoreSwipe";
import BackToTop from "./components/BackToTop";
import Header from "./components/Header";
import SubNavigation from "./components/SubNavigation";
import SideLogin from "./components/SideLogin";
import useEnvStore from "./utils/envStore";
import { useEffect } from "react";

export const loader = async ({ request }) => {
  return Response.json({
    REMIX_BASEPATH: process.env.REMIX_BASEPATH,
    REMIX_DOMAIN_HINDI: process.env.REMIX_DOMAIN_HINDI,
    REMIX_DOMAIN_ENG: process.env.REMIX_DOMAIN_ENG,
    REMIX_MENU_API: process.env.REMIX_APP_MENU_API,
    REMIX_MENU_API_HINDI: process.env.REMIX_APP_MENU_API_HINDI,
    REMIX_APP_ENV: process.env.REMIX_APP_ENV,
  });
};

export const links: LinksFunction = () => [
  { rel: "icon", type: "image/x-icon", href: "/shortstext/favicon.ico" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Noto+Sans+Devanagari:wght@300;400;500;600;700&display=swap",
    rel: "stylesheet",
  },
  { rel: "stylesheet", href: "https://use.typekit.net/jkd2jqy.css" },
  { rel: "stylesheet", href: atfCss },
  { rel: "stylesheet", href: swiperMinCss },
  { rel: "stylesheet", href: atfBeepDetailsBaseCss },
];

export const meta: MetaFunction = () => {
  const versionMeta = [{ name: "x-web-version", content: "v" + version }];
  return [...rootMeta, ...versionMeta];
};
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>NDTV News Shorts page</title>
        <Meta />
        <Links />
      </head>
      <body className="nav-trigger Vd-list Vd-Lst-pg NstSlCol_left-n">
        <SvgIcons />
        <div className="Nst_bg-tp" />
        {/* <div class="Nst_bg-ar"></div> */}
        <div className="Nst_bg-btm" />
        {children}
        <ScrollRestoration />
        <Scripts />
        <script src="/shortstext/js/jquery-min.js"></script>
        <script src="/shortstext/js/custom.js"></script>
        <script src="/shortstext/js/swiper/swiper-bundle.min.js"></script>
        <script src="/shortstext/js/news-shorts/news-shorts-element.js"></script>
        <script src="/shortstext/js/news-shorts/news-shorts-slider.js"></script>
        {/* <script src="js/beeps/beep-video.js"></script>  */}
        <script src="/shortstext/js/beeps/beep-element.js"></script>
      </body>
    </html>
  );
}

export default function App() {
  const {
    REMIX_BASEPATH,
    REMIX_DOMAIN_HINDI,
    REMIX_DOMAIN_ENG,
    REMIX_APP_ENV,
  } = useLoaderData<typeof loader>();
  console.log('hello word')

  const setBasePath = useEnvStore((state) => state.setBasePath);
  const getApiUrl = (hostname: string) => {
    if (hostname.endsWith(".com")) {
      return REMIX_DOMAIN_ENG;
    } else if (hostname.endsWith(".in")) {
      return REMIX_DOMAIN_HINDI;
    }
    return REMIX_DOMAIN_ENG;
  };
  useEffect(() => {
    setBasePath(REMIX_BASEPATH);
  }, [REMIX_BASEPATH]);

  return (
    <>
      <div className="vjl-cntr_full h-100">
        <div className="vjl-row h-100">
          <div className="VdPg-Col_Two VdPg-Col_P0 NstSlCol">
            <Header />
            <SubNavigation />
            <Outlet />
          </div>
        </div>
      </div>
      <SideLogin />
      <SideNavigation
        REMIX_DOMAIN_ENG={REMIX_DOMAIN_ENG}
        REMIX_DOMAIN_HINDI={REMIX_DOMAIN_HINDI}
      />
      <LanguageSwitch />
      <MoreSwipe />
      {/*======[ Side nav Overlay ]======*/}
      <a href="#0" className="overlay__side-nav" />
      <BackToTop />
    </>
  );
}
