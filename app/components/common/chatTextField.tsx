import { ReactNode } from 'react'

interface ChatTextFieldProps {
  message: string
  isUser: boolean
  timestamp?: string
  isLoading?: boolean
  avatar?: ReactNode
  className?: string
}

export default function ChatTextField({ 
  message, 
  isUser, 
  timestamp,
  isLoading = false,
  avatar,
  className = ""
}: ChatTextFieldProps) {
  const userStyles = {
    container: "ml-auto max-w-[80%] flex justify-end",
    bubble: "bg-gradient-to-r from-[#1ab06f] to-[#16965e] text-white",
    alignment: "text-right"
  }

  const botStyles = {
    container: "mr-auto max-w-[80%] flex justify-start",
    bubble: "bg-gradient-to-r from-[#a8e6cf] to-[#88d5ae] text-gray-800",
    alignment: "text-left"
  }

  const styles = isUser ? userStyles : botStyles

  return (
    <div className={`mb-4 ${styles.container} ${className}`}>
      <div className="flex items-end gap-2">
        {!isUser && avatar && (
          <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mb-1">
            {avatar}
          </div>
        )}
        
        <div className="flex flex-col">
        <div className={`
            px-4 py-3 rounded-2xl shadow-sm min-w-0 max-w-full overflow-hidden
            ${styles.bubble}
            ${isUser ? 'rounded-br-md' : 'rounded-bl-md'}
        `}>
            {isLoading ? (
              <div className="flex items-center gap-1">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
                <span className="ml-2 text-sm opacity-70">Typing...</span>
              </div>
            ) : (
            <p className={`text-sm leading-relaxed whitespace-pre-wrap break-words word-break overflow-wrap-anywhere hyphens-auto ${styles.alignment}`}>
                {message}
            </p>
            )}
          </div>
          
          {timestamp && !isLoading && (
            <span className={`text-xs text-gray-500 mt-1 ${styles.alignment}`}>
              {timestamp}
            </span>
          )}
        </div>

        {isUser && avatar && (
          <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mb-1">
            {avatar}
          </div>
        )}
      </div>
    </div>
  )
}