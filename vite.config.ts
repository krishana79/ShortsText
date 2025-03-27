import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { flatRoutes } from "remix-flat-routes";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
      ignoredRouteFiles: ["**/.*", "**/*.css"],
      
      buildDirectory: `public${process.env.REMIX_BASEPATH ?? ""}/build`,
      routes: async (defineRoutes) => {
        return flatRoutes("routes", defineRoutes, {
          basePath: process.env.REMIX_BASEPATH ?? "",
          ignoredRouteFiles: ["**/.*", "**/*.css",],
        });
      },
    }),
    tsconfigPaths(),
  ],
  server: {
    allowedHosts: ["local.ndtv.com", "local.ndtv.in"]
  },
});
