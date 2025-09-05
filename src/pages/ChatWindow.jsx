import React, { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import chats from '../data/chats.json'
import MessageBubble from '../components/MessageBubble.jsx'
import AIPlaceholderCard from '../components/AIPlaceholderCard.jsx'

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
      <div className="card p-0">
        <div className="sticky top-[4.5rem] z-10 bg-white/90 backdrop-blur border-b rounded-t-2xl px-4 py-3 flex items-center justify-between">
          <h2 className="font-semibold text-gray-900">{chat.name}</h2>
          <div className="hidden sm:flex items-center gap-2">
            <button onClick={() => setShowSummary(true)} className="btn btn-ghost">Summarize</button>
            <button onClick={() => setShowSmartReply(true)} className="btn btn-primary">Suggest Reply</button>
          </div>
        </div>
        <div className="px-4 py-4">
          {chat.messages.map((m, idx) => (
            <MessageBubble key={idx} message={m} />
          ))}
        </div>
        <div className="px-4 pb-4 sm:hidden flex items-center gap-2">
          <button onClick={() => setShowSummary(true)} className="btn btn-ghost flex-1">Summarize</button>
          <button onClick={() => setShowSmartReply(true)} className="btn btn-primary flex-1">Suggest Reply</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AIPlaceholderCard
          title="Summarize Thread"
          actionArea={(
            <button onClick={() => setShowSummary(true)} className="btn btn-neutral text-xs">Summarize</button>
          )}
        >
          {showSummary ? (
            <p>
              This conversation is friendly and status-focused. Key points: project update is near completion; reminders and schedule coordination happened. Tone is concise and positive.
            </p>
          ) : (
            <p className="text-gray-500">Click Summarize to show a dummy summary.</p>
          )}
        </AIPlaceholderCard>

        <AIPlaceholderCard
          title="Smart Reply Suggestion"
          actionArea={(
            <button onClick={() => setShowSmartReply(true)} className="btn btn-primary text-xs">Suggest Reply</button>
          )}
        >
          {showSmartReply ? (
            <div className="flex items-center gap-2">
              <span className="text-sm bg-blue-50 text-blue-800 px-2 py-1 rounded-md ring-1 ring-blue-200">“Sounds good — I’ll share a brief update this afternoon.”</span>
              <button className="btn btn-ghost text-xs">Copy</button>
            </div>
          ) : (
            <p className="text-gray-500">Click Suggest Reply to show a placeholder response.</p>
          )}
        </AIPlaceholderCard>
      </div>
    </div>
  )
}


