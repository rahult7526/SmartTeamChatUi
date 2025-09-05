import React from 'react'
import { Link } from 'react-router-dom'

export default function ChatItem({ chat }) {
  return (
    <Link to={`/chat/${chat.id}`} className="block card p-4 hover:shadow-md transition">
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-sm font-semibold shadow-sm">
          {chat.name?.[0] ?? 'C'}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-semibold text-gray-900 truncate">{chat.name}</h3>
            <span className="text-[11px] text-gray-500 shrink-0">{chat.time}</span>
          </div>
          <p className="text-sm text-gray-600 mt-0.5 line-clamp-1">{chat.lastMessage}</p>
        </div>
      </div>
    </Link>
  )
}


