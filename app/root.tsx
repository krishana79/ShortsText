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
import customCss from "./styles/custom.css?url";
import SvgIcons from "./components/SvgIcons";
import SideNavigation from "./components/SideNavigation";
import LanguageSwitch from "./components/LanguageSwitch";
import MoreSwipe from "./components/MoreSwipe";
import BackToTop from "./components/BackToTop";
import Header from "./components/Header";
import SubNavigation from "./components/SubNavigation";
import SideLogin from "./components/SideLogin";
import useEnvStore from "./utils/envStore";
import { useEffect, useLayoutEffect, useState } from "react";
import useStore from "./utils/store";

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
  { rel: "stylesheet", href: customCss },
];

export const meta: MetaFunction = () => {
  const versionMeta = [{ name: "x-web-version", content: "v" + version }];
  return [...rootMeta, ...versionMeta];
};
export function Layout({ children }: { children: React.ReactNode }) {
  const openCmntPopUp = useStore((state) => state.openCmntPopUp);
  const sidenavtoggle = useStore((state) => state.sidenavtoggle);
  const isDarkMode = useStore((state) => state.isDarkMode);
  const setOpenUtilPopUp = useStore((state) => state.setOpenUtilPopUp);
  const openLoginPanel = useStore((state) => state.openLoginPanel);
  const updateHeight = () => {
    const ht = window.innerHeight;
    const svVertical2 = document.querySelector(".NstSl_cn");
    if (svVertical2) {
      (svVertical2 as HTMLElement).style.height = `${ht - 71}px`;

      if (window.innerWidth <= 560) {
        (svVertical2 as HTMLElement).style.height = `${ht}px`;
      }
    }
  };
  const loadScriptWithAsync = (src: string) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
  };
  useEffect(() => {
    if (window.innerWidth <= 767) {
      updateHeight();
      window.addEventListener("resize", updateHeight, true);
    }

    return () => {
      window.removeEventListener("resize", updateHeight, true);
    };
  }, []);
  useEffect(() => {}, []);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>NDTV News Shorts page</title>
        <Meta />
        <Links />
      </head>
      <body
        className={
          `nav-trigger Vd-list Vd-Lst-pg NstSlCol_left-n ` +
          (openCmntPopUp ? `VdElCht_on ` : ``) +
          (sidenavtoggle ? " js_sid-nav" : "") +
          (isDarkMode ? " day_night" : ``) +
          (openLoginPanel ? " js_sid-nav-right" : ``)
        }
        onClick={(e) => {
          e.stopPropagation();
          setOpenUtilPopUp(false);
        }}
      >
        <SvgIcons />
        <div className="Nst_bg-tp" />
        {/* <div class="Nst_bg-ar"></div> */}
        <div className="Nst_bg-btm" />
        {children}
        <ScrollRestoration />
        <Scripts />
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

  const setBasePath = useEnvStore((state) => state.setBasePath);
  const setSidenavtoggle = useStore((state) => state.setSidenavtoggle);
  const setOpenLoginPanel = useStore((state) => state.setOpenLoginPanel);
  const [loginScriptExecuted, setLoginScriptExecuted] = useState(false);
  const getApiUrl = (hostname: string) => {
    if (hostname.endsWith(".com")) {
      return REMIX_DOMAIN_ENG;
    } else if (hostname.endsWith(".in")) {
      return REMIX_DOMAIN_HINDI;
    }
    return REMIX_DOMAIN_ENG;
  };

  const loadScript = (id: any, src: any) => {
    return new Promise<void>((resolve, reject) => {
      if (document.getElementById(id)) {
        resolve();
        return;
      }

      const script = document.createElement("script");
      script.id = id;
      script.src = src;
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };

  const executeScript = () => {
    if (!loginScriptExecuted) {
      setLoginScriptExecuted(true);
      const loadScriptlogin = () => {
        console.log("loadScriptlogin root:", window.location.origin);
        const scriptUrl =
          "https://stage-auth.ndtv.com/w/js/config.js?v=2023-10-27-01&site=entertainment&nocss=1";
        return loadScript("__loginScript", scriptUrl);
      };
      Promise.all([loadScriptlogin()])
        .then(() => {

          const overlaySideNav = document.querySelector(".overlay__side-nav");
          const logSdCls = document.querySelector(".LogSd-cls");
          overlaySideNav?.addEventListener("click", removeJsSideNavClass);
          logSdCls?.addEventListener("click", removeJsSideNavClass);

          function removeJsSideNavClass() {
            document.body.classList.remove("js_sid-nav-right");
          }
        })
        .catch((error) => {
          console.log("Error loading scripts:", error);
        });
    }
  };
  useEffect(() => {
    setBasePath(REMIX_BASEPATH);
  }, [REMIX_BASEPATH]);

  useEffect(() => {
    if (loginScriptExecuted) return;
    executeScript();
  }, [loginScriptExecuted]);

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
      <a
        className="overlay__side-nav"
        onClick={(e) => {
          e.preventDefault();
          setSidenavtoggle(false);
          setOpenLoginPanel(false);
        }}
      />
      <BackToTop />
    </>
  );
}
