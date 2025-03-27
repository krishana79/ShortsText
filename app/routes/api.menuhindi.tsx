// api.menuhindi.tsx
import { json } from "@remix-run/node";
import axios from "axios";
let API_URL: string;
if (typeof process !== "undefined") {
   API_URL = process.env.REMIX_APP_MENU_API_HINDI || "";
}
export const loader = async () => {
  try {
    const response = await axios.get(API_URL);
    return Response.json(response.data);
  } catch (error) {
    console.error("Error fetching hindi menu data:", error);
    return Response.json({ error: "Failed to fetch menu data" }, { status: 500 });
  }
};
