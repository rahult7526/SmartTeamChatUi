import React from 'react'

export default function AIPlaceholderCard({ title, children, actionArea }) {
  return (
    <div className="card p-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-gray-900">{title}</h4>
        {actionArea}
      </div>
      <div className="text-sm text-gray-700 mt-2">
        {children}
      </div>
    </div>
  )
}


