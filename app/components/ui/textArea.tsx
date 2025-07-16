import { useState, useRef } from 'react'
import { Field, Textarea } from '@headlessui/react'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import SelectInput from '../common/selectInput'

interface ChatInputProps {
  onSendMessage: (message: string, model: string, document?: string) => void
  isLoading?: boolean
}

export default function ChatInputComponent({ onSendMessage, isLoading = false }: ChatInputProps) {
  const [message, setMessage] = useState('')
  const [selectedModel, setSelectedModel] = useState('default')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const modelOptions = ["default", "gpt4", "claude", "gemini", "llama3"]

  const handleSubmit = () => {
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim(), selectedModel)
      setMessage('')
      textareaRef.current?.focus()
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Field className="space-y-3">
        <div className="relative">
          <Textarea 
            ref={textareaRef}
            name="description"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            className="w-full px-4 pt-3 pb-12 pr-20 border-2 resize-none focus:ring-2 focus:ring-offset-2 transition-colors dark:bg-gray-800 dark:text-white placeholder:text-gray-500 text-sm md:text-base rounded-lg disabled:opacity-50"
            style={{ borderColor: '#1ab06f' }}
            placeholder="Ask anything 😀"
          />

          <div className="absolute bottom-2 left-2 flex gap-2 z-10">
            <SelectInput 
              options={modelOptions}
              defaultValue="default"
              placeholder="Model"
              onChange={setSelectedModel}
              className="w-24"
            />
          </div>

          <button 
            type="button"
            onClick={handleSubmit}
            disabled={!message.trim() || isLoading}
            className="absolute bottom-2 right-2 p-2 text-white rounded-md hover:opacity-90 focus:ring-2 focus:ring-offset-2 transition-colors disabled:opacity-50"
            style={{ background: 'linear-gradient(135deg, #1ab06f 0%, #16965e 100%)' }}
          >
            <PaperAirplaneIcon className="w-6 h-6" />
          </button>
        </div>
      </Field>
    </div>
  )
}

