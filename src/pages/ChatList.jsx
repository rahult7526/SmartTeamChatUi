import React from 'react'
import chats from '../data/chats.json'
import ChatItem from '../components/ChatItem.jsx'

export default function ChatList() {
  return (
    <div className="space-y-3">
      {chats.map((c) => (
        <ChatItem key={c.id} chat={c} />
      ))}
    </div>
  )
}


