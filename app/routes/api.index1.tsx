// ------------------------------------Index Route Data API--------------------------------------
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/server-runtime";
import axios from "axios";
// const pageSize = 10;

let feed_api_url = "";

if (typeof process !== "undefined") {
  feed_api_url = process.env.REMIX_APP_FEED_API_URL || "";
}
let feed_api_key = "";

if (typeof process !== "undefined") {
  feed_api_key = process.env.REMIX_APP_FEED_API_KEY || "";
}

export const loader: LoaderFunction = async ({ request }) => {
  try {
    const url1 = new URL(request.url);
    // const pageNumber = url1.searchParams.get("pageNumber");
    // const language = url1.searchParams.get("language");
    const BASE_URL = `https://${feed_api_url}/shorts-feed/${feed_api_key}`;
    const url = new URL(BASE_URL);

    // url.searchParams.append("pageSize", pageSize + "");
    // url.searchParams.append("pageNumber", pageNumber);
    
    // url.searchParams.append("language", language);
    const response = await axios.get(url.href);
    return json(response.data);
  } catch (error) {
    return json({ status: error });
  }
};
