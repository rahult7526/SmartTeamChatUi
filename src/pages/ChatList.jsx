import React from 'react'
import chats from '../data/chats.json'
import ChatItem from '../components/ChatItem.jsx'
import { motion } from 'framer-motion'

export default function ChatList() {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="grid grid-cols-1 gap-3">
      {chats.map((c) => (
        <ChatItem key={c.id} chat={c} />
      ))}
    </motion.div>
  )
}


