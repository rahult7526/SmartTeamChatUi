import React, { useState } from 'react'
import AIPlaceholderCard from '../components/AIPlaceholderCard.jsx'

export default function NewChat() {
  const [name, setName] = useState('')
  const [icebreaker, setIcebreaker] = useState('')

  const generateIcebreaker = () => {
    const base = name?.trim() ? name.trim() : 'there'
    setIcebreaker(`Hey ${base}! Quick hello — what’s top of mind for you this week?`)
  }

  return (
    <div className="space-y-4">
      <div className="card p-4">
        <h2 className="font-semibold text-gray-900 mb-3">Start a New Chat</h2>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1">
            <label className="text-xs text-gray-600">Participant name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Alice, Team, Design Guild"
              className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="sm:self-end">
            <button onClick={generateIcebreaker} className="btn btn-primary">
              Generate Icebreaker
            </button>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-2">Tip: Use team or topic names to set context.</p>
      </div>

      <AIPlaceholderCard title="AI Icebreaker">
        {icebreaker ? (
          <p>{icebreaker}</p>
        ) : (
          <p className="text-gray-500">Enter a name and click Generate.</p>
        )}
      </AIPlaceholderCard>
    </div>
  )
}


