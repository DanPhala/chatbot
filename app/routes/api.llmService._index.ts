import { json } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/node";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const action = async ({ request }: ActionFunctionArgs) => {
  const { prompt, model } = await request.json();

  console.log("Received prompt:", prompt);
  console.log("Using model:", model);

  // Call OpenAI and get the completion
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return json({
  message: completion.choices[0].message.content,
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  isUser: false,
});
};
