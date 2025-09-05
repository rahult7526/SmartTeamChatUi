import React, { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import chats from '../data/chats.json'
import MessageBubble from '../components/MessageBubble.jsx'
import AIPlaceholderCard from '../components/AIPlaceholderCard.jsx'
import TypingIndicator from '../components/TypingIndicator.jsx'
import { motion } from 'framer-motion'

export default function ChatWindow() {
  const { id } = useParams()
  const chat = useMemo(() => chats.find((c) => String(c.id) === String(id)), [id])
  const [showSummary, setShowSummary] = useState(false)
  const [showSmartReply, setShowSmartReply] = useState(false)

  if (!chat) {
    return <div className="text-gray-600 dark:text-gray-300">Chat not found.</div>
  }

  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-white/70 dark:bg-gray-900/60 ring-1 ring-white/30 dark:ring-white/10 backdrop-blur-md shadow-lg overflow-hidden">
        <div className="sticky top-[4.5rem] z-10 bg-white/60 dark:bg-gray-950/40 backdrop-blur px-4 py-3 flex items-center justify-between">
          <h2 className="font-semibold text-gray-900 dark:text-gray-100">{chat.name}</h2>
          <div className="hidden sm:flex items-center gap-2">
            <button onClick={() => setShowSummary(true)} className="btn bg-white/70 text-gray-800 hover:bg-white shadow ring-1 ring-gray-200 dark:bg-gray-900/70 dark:text-gray-100 dark:ring-gray-800 rounded-full px-4">Summarize Thread</button>
            <button onClick={() => setShowSmartReply(true)} className="btn rounded-full px-4 bg-gradient-to-r from-violet-500 to-emerald-500 text-white shadow-lg hover:opacity-95">Smart Reply</button>
          </div>
        </div>
        <div className="px-4 py-4">
          {chat.messages.map((m, idx) => (
            <MessageBubble key={idx} message={m} />
          ))}
          <div className="pl-8"><TypingIndicator /></div>
        </div>
        <div className="px-4 pb-4 sm:hidden flex items-center gap-2">
          <button onClick={() => setShowSummary(true)} className="btn bg-white/70 text-gray-800 hover:bg-white shadow ring-1 ring-gray-200 dark:bg-gray-900/70 dark:text-gray-100 dark:ring-gray-800 rounded-full flex-1">Summarize</button>
          <button onClick={() => setShowSmartReply(true)} className="btn rounded-full flex-1 bg-gradient-to-r from-violet-500 to-emerald-500 text-white shadow-lg hover:opacity-95">Smart Reply</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AIPlaceholderCard
          title="Summarize Thread"
          actionArea={(
            <button onClick={() => setShowSummary(true)} className="btn bg-white/20 hover:bg-white/30 text-white rounded-full text-xs">Summarize</button>
          )}
        >
          {showSummary ? (
            <p>
              This conversation is friendly and status-focused. Key points: project update is near completion; reminders and schedule coordination happened. Tone is concise and positive.
            </p>
          ) : (
            <p className="opacity-80">Click Summarize to show a dummy summary.</p>
          )}
        </AIPlaceholderCard>

        <AIPlaceholderCard
          title="Smart Reply Suggestion"
          actionArea={(
            <button onClick={() => setShowSmartReply(true)} className="btn bg-white/20 hover:bg-white/30 text-white rounded-full text-xs">Suggest</button>
          )}
        >
          {showSmartReply ? (
            <div className="flex items-center gap-2">
              <span className="text-sm bg-white/20 backdrop-blur px-2 py-1 rounded-md ring-1 ring-white/30">“Sounds good — I’ll share a brief update this afternoon.”</span>
              <button className="btn bg-white/20 hover:bg-white/30 text-white rounded-full text-xs">Copy</button>
            </div>
          ) : (
            <p className="opacity-80">Click Suggest to show a placeholder response.</p>
          )}
        </AIPlaceholderCard>
      </div>
    </div>
  )
}


