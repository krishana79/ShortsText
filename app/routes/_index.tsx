import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import axios from "axios";
import { useState } from "react";
import Content from "~/components/Content";
import { BASEPATH, getApiUrl, getLanguageFromDomain } from "~/utils/constant";
import { json } from "@remix-run/node";

const fetchData = async (pageNumber = 1, language) => {
  const api_url = getApiUrl(language);
  const response = await axios.get(
    `${api_url}${BASEPATH}/api/index1?pageNumber=${pageNumber}&language=${language}`
  );
  return response.data || { total: "0", results: [] };
};
export const loader = async ({ request }) => {
  try {
    const language = getLanguageFromDomain(request.url);
    const response = await fetchData(1, language);
    if (!response.results) {
      throw new Response("Not Found", { status: 404 });
    }
    return json({ ...response, language });
  } catch (err) {
    console.error("Error:", err);
    return json({ total: "0", results: [] });
  }
};

export default function Index() {
  const loaderData = useLoaderData();
  const { results: defaultData, language } = loaderData;

  const [data, setData] = useState(defaultData);
  return (
    <>
      <Content slideData={{ results: data }} />
    </>
  );
}
