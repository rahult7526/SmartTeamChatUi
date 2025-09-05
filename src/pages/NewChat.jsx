import React, { useState } from 'react'
import AIPlaceholderCard from '../components/AIPlaceholderCard.jsx'
import { motion } from 'framer-motion'
import { Wand2 } from 'lucide-react'

export default function NewChat() {
  const [name, setName] = useState('')
  const [icebreaker, setIcebreaker] = useState('')

  const generateIcebreaker = () => {
    const base = name?.trim() ? name.trim() : 'there'
    setIcebreaker(`Hey ${base}! Quick hello — what’s top of mind for you this week?`)
  }

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="max-w-xl mx-auto">
      <div className="rounded-2xl bg-white/70 dark:bg-gray-900/60 ring-1 ring-white/30 dark:ring-white/10 backdrop-blur-md shadow-lg p-6 text-center">
        <h2 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 text-lg">Start a New Chat</h2>
        <div className="flex flex-col gap-3">
          <div className="flex-1">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Participant name, team, or topic"
              className="mt-1 w-full rounded-xl bg-white/70 dark:bg-gray-900/70 ring-1 ring-gray-200 dark:ring-gray-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <button onClick={generateIcebreaker} className="btn rounded-full px-4 bg-gradient-to-r from-violet-500 to-emerald-500 text-white shadow-lg hover:opacity-95 inline-flex items-center gap-2">
              <Wand2 size={16} /> Generate Icebreaker
            </button>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-2">Tip: Use team or topic names to set context.</p>
      </div>

      <div className="mt-4">
        <AIPlaceholderCard title="AI Icebreaker">
          {icebreaker ? (
            <p>{icebreaker}</p>
          ) : (
            <p className="opacity-80">Enter a name and click Generate.</p>
          )}
        </AIPlaceholderCard>
      </div>
    </motion.div>
  )
}


