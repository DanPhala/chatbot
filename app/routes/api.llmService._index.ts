import { json } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/node";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const default_model = process.env.MODEL
if (!default_model) {
  throw new Error("MODEL environment variable is not set");
}
export const action = async ({ request }: ActionFunctionArgs) => {
  const { prompt } = await request.json();
  
  const completion = await openai.chat.completions.create({
    model:default_model ,
    messages: [{ role: "user", content: prompt }],
  });

  console.log("OpenAI response:", completion);
  
  return json({
  message: completion.choices[0].message.content,
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  isUser: false,
});
};
