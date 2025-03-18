import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
  MetaFunction,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { rootMeta, defaultMeta } from "../app/utils/MetaUtils";
import { version } from "../package.json";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
];

export const meta: MetaFunction = () => {
  const versionMeta = [{ name: "x-web-version", content: "v" + version }];
  return [...rootMeta, ...defaultMeta, ...versionMeta];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <h1>Hello from App </h1>
    </>
  );
}
