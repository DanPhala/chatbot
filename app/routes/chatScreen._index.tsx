import React from 'react';
import ChatInputComponent from '../components/ui/textArea';

export default function ChatScreen() {
    return (
        <div className="flex items-end justify-center min-h-screen p-4 pb-8">
            <ChatInputComponent />
        </div>
    );
}