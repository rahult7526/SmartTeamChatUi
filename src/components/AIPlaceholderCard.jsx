import React from 'react'
import { motion } from 'framer-motion'

export default function AIPlaceholderCard({ title, children, actionArea }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="p-4 rounded-2xl bg-gradient-to-r from-violet-600 to-emerald-600 text-white shadow-lg"
    >
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">{title}</h4>
        {actionArea}
      </div>
      <div className="text-sm mt-2">
        {children}
      </div>
    </motion.div>
  )
}


