import {useEffect, useState, useCallback } from 'react';
import ChatInputComponent from '../components/ui/textArea';
import ChatTextField from '../components/common/chatTextField';
import Header from '../components/ui/header';

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: string
  isLoading?: boolean
}

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetch("/api/chat")
      .then(res => res.json())
      .then(data => {
        if (data.chats) {
          const loadedMessages: Message[] = [];
          data.chats.forEach((chat: any, idx: number) => {
            loadedMessages.push({
              id: `user-${idx}`,
              text: chat.user,
              isUser: true,
              timestamp: new Date(chat.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            });
            loadedMessages.push({
              id: `bot-${idx}`,
              text: chat.bot,
              isUser: false,
              timestamp: new Date(chat.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            });
          });
          setMessages(loadedMessages);
        }
      });
  }, []);

  const handleSendMessage = useCallback(async (message: string, model: string) => {
  model = model;
  setIsLoading(true);

  setMessages(prev => [
    ...prev,
    {
      id: `user-${Date.now()}`,
      text: message,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
    {
      id: `loading-${Date.now()}`,
      text: '',
      isUser: false,
      timestamp: '',
      isLoading: true,
    }
  ]);

  try {
    const response = await fetch("/api/llmService", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: message, model }),
    });
    const data = await response.json();

    await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: message, bot: data.message }),
    });

    setMessages(prev =>
      prev.map(msg =>
        msg.isLoading
          ? {
              ...msg,
              text: data.message,
              isLoading: false,
              timestamp: data.timestamp || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              isUser: data.isUser ?? false,
            }
          : msg
      )
    );
  } catch (error) {
    setMessages(prev =>
      prev.map(msg =>
        msg.isLoading
          ? {
              ...msg,
              text: "Error getting response",
              isLoading: false,
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            }
          : msg
      )
    );
  }
  setIsLoading(false);
}, []);


  return (
    <div className="flex flex-col h-screen">
      <Header /> 
      <div className="flex-1 overflow-y-auto p-4">
        <div className="w-full max-w-6xl mx-auto">
          {messages.map((message) => (
            <ChatTextField
              key={message.id}
              message={message.text}
              isUser={message.isUser}
              timestamp={message.timestamp}
              isLoading={message.isLoading}
              avatar={message.isUser ? <span className="text-xs">🤓</span> : <span className="text-xs">🤖</span>}
            />
          ))}
        </div>
      </div>

      <div className="bg-white p-4">
        <ChatInputComponent 
          onSendMessage={handleSendMessage}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}