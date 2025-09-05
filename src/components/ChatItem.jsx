import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ChatItem({ chat }) {
  return (
    <Link to={`/chat/${chat.id}`}>
      <motion.div
        whileHover={{ y: -2, boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="p-4 rounded-2xl bg-white/70 dark:bg-gray-900/60 ring-1 ring-white/30 dark:ring-white/10 backdrop-blur-md shadow-lg"
      >
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-600 to-emerald-500 text-white flex items-center justify-center text-sm font-semibold shadow">
            {chat.name?.[0] ?? 'C'}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 truncate">{chat.name}</h3>
              <span className="text-[11px] text-gray-500 shrink-0">{chat.time}</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-0.5 line-clamp-1">{chat.lastMessage}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}


