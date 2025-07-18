import type { MetaFunction } from "@remix-run/node";
import  ChatScreen from "./chat._index"

export const meta: MetaFunction = () => {
  return [
    { title: "Chatbot" },
    { name: "description", content: "A simple chatbot interface" },
  ];
};

export default function Index() {
  return (
    <ChatScreen/>
  );
}
