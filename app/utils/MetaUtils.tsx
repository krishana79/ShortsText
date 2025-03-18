// metaUtils.ts
import type { MetaFunction, json } from "@remix-run/node";

export const rootMeta = [
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
    },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    {
      name: "title",
      content:
        "Watch Entertainment, Gadgets, Movies, Sports Videos on NDTV Shorts",
    },
    {
      name: "description",
      content:
        "Find the latest videos on entertainment, movies, lifestyle, health, sports, education, and more at NDTV Shorts.",
    },
    {
      name: "keywords",
      content: "NDTV, News, Videos, Shorts, News shorts, Latest trends",
    },
  
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent",
    },
    { name: "msapplication-tap-highlight", content: "no" },
    {
      name: "google-site-verification",
      content: "yThRoDT_1iDUIum7IPIGT96Y-8rpvmFwlYBBK9EMGXM",
    },
    { httpEquiv: "Content-Type", content: "text/html; charset=UTF-8" },
    { name: "content-language", content: "en" },
    { httpEquiv: "X-UA-Compatible", content: "IE=edge" },
    { tagName: "link", rel: "canonical", href: "https://www.ndtv.com/video" },
  ];

// Common default metadata
export const defaultMeta = [
  {
    title: "Watch Entertainment, Gadgets, Movies, Sports Videos on NDTV Shorts",
  },
  {
    description:
      "Find the latest videos on entertainment, movies, lifestyle, health, sports, education, and more at NDTV Shorts.",
  },
  {
    property: "og:title",
    content:
      "Watch Entertainment, Gadgets, Movies, Sports Videos on NDTV Shorts",
  },
  { property: "og:type", content: "video.other" },
  {
    property: "og:image",
    content: "https://cdn.ndtv.com/common/images/ogndtv.png",
  },

  {
    property: "og:description",
    content:
      "Find the latest videos on entertainment, movies, lifestyle, health, sports, education, and more at NDTV Shorts.",
  },
];

