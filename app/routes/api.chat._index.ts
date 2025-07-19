import { json } from "@remix-run/node";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { insertChat, getChats } from "~/db/mongo";
import { userSession, getOrCreateUserId } from "~/utils/session";

export const action = async ({ request }: ActionFunctionArgs) => {
  const { user, bot } = await request.json();
  const userId = await getOrCreateUserId(request);

  // Set cookie if not present
  const headers = new Headers();
  const cookieHeader = request.headers.get("Cookie");
  if (!cookieHeader || !cookieHeader.includes("user_id")) {
    headers.append("Set-Cookie", await userSession.serialize(userId));
  }

  await insertChat(user, bot, userId);
  return json({ success: true }, { headers });
};
export const loader = async ({ request }: LoaderFunctionArgs) => {
  const userId = await getOrCreateUserId(request);
  const chats = await getChats({ userId });
  return json({ chats });
};