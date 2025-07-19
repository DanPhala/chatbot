import { createCookie } from "@remix-run/node";
import { v4 as uuidv4 } from "uuid";

export const userSession = createCookie("user_id", {
  maxAge: 60 * 60 * 24 * 365, 
  httpOnly: true,
  sameSite: "lax",
  path: "/",
});

export async function getOrCreateUserId(request: Request) {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = await userSession.parse(cookieHeader);
  if (cookie) return cookie;
  return uuidv4();
}