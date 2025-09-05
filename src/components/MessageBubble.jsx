import React from 'react'

export default function MessageBubble({ message }) {
  const isMe = message.from === 'Me'
  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'} my-1 gap-2 items-end`}>
      {!isMe && (
        <div className="h-7 w-7 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-[10px] font-semibold select-none dark:bg-gray-800 dark:text-gray-300">
          {message.from?.[0] ?? 'U'}
        </div>
      )}
      <div className={`${isMe ? 'bg-blue-600 text-white' : 'bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100'} max-w-[75%] rounded-2xl px-4 py-2 shadow ring-1 ${isMe ? 'ring-blue-600/20' : 'ring-gray-200 dark:ring-gray-800'} ${isMe ? 'rounded-br-sm' : 'rounded-bl-sm'}`}>
        {!isMe && (
          <div className="text-xs font-medium text-gray-500 mb-0.5 dark:text-gray-400">{message.from}</div>
        )}
        <div className="text-sm leading-relaxed">{message.text}</div>
        <div className={`text-[10px] mt-1 ${isMe ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>{message.time}</div>
      </div>
    </div>
  )
}


