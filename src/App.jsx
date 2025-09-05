import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Bot, Search, Sparkles, Menu, Plus, MessageSquareText } from 'lucide-react'
import ChatList from './pages/ChatList.jsx'
import ChatWindow from './pages/ChatWindow.jsx'
import NewChat from './pages/NewChat.jsx'

function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = stored || (prefersDark ? 'dark' : 'light')
    setTheme(initial)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      className="btn btn-ghost"
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  )
}

function Header() {
  const location = useLocation()
  const linkBase = 'px-3 py-2 rounded-lg text-sm font-medium transition'
  const inactive = 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800'
  const active = 'bg-gray-900 text-white shadow-sm dark:bg-white dark:text-gray-900'
  return (
    <header className="sticky top-0 z-40 border-b bg-white/60 backdrop-blur-md supports-[backdrop-filter]:bg-white/40 dark:bg-gray-950/60 dark:supports-[backdrop-filter]:bg-gray-950/40 dark:border-gray-800">
      <div className="px-4 py-3 flex items-center gap-3">
        <button className="sm:hidden btn btn-ghost p-2 rounded-xl"><Menu size={18} /></button>
        <Link to="/" className="group inline-flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white grid place-items-center shadow">
            <Bot size={16} />
          </div>
          <span className="text-lg font-semibold tracking-tight">Smart Team Chat</span>
          <span className="pill ml-1 bg-indigo-50 text-indigo-700 ring-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-200 dark:ring-indigo-800 inline-flex items-center gap-1"><Sparkles size={14} /> AI</span>
        </Link>
        <div className="hidden md:flex ml-auto flex-1 max-w-xl">
          <div className="relative w-full">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input placeholder="Search chats..." className="w-full pl-9 pr-3 py-2 rounded-xl bg-white/60 dark:bg-gray-900/60 ring-1 ring-gray-200 dark:ring-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition placeholder:text-gray-400" />
          </div>
        </div>
        <nav className="ml-auto md:ml-3 flex items-center gap-2">
          <Link to="/" className={`${linkBase} ${location.pathname === '/' ? active : inactive}`}>Chats</Link>
          <Link to="/new" className={`${linkBase} ${location.pathname === '/new' ? active : inactive}`}><Plus className="mr-1" size={14}/>New</Link>
          <ThemeToggle />
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-white grid place-items-center text-xs font-semibold shadow">S</div>
        </nav>
      </div>
    </header>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col app-gradient">
      <Header />
      <main className="flex-1">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 p-4 sm:grid-cols-[260px_1fr]">
          <aside className="hidden sm:block rounded-2xl bg-glass/80 backdrop-blur-md ring-1 ring-white/20 dark:ring-white/10 shadow-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider text-gray-500">Chats</span>
              <Link to="/new" className="btn btn-neutral text-xs"><Plus size={14} className="mr-1"/>New</Link>
            </div>
            <div className="space-y-2">
              <Link to="/" className={`flex items-center gap-2 rounded-xl px-3 py-2 transition hover:bg-white/60 dark:hover:bg-gray-900/60 ${location.pathname==='/'?'ring-1 ring-indigo-300/50 dark:ring-indigo-800/40 bg-white/70 dark:bg-gray-900/70':''}`}>
                <MessageSquareText size={16} className="text-indigo-500" />
                <span className="text-sm">All Chats</span>
              </Link>
            </div>
          </aside>
          <section>
            <Routes>
              <Route path="/" element={<ChatList />} />
              <Route path="/chat/:id" element={<ChatWindow />} />
              <Route path="/new" element={<NewChat />} />
            </Routes>
          </section>
        </div>
      </main>
    </div>
  )
}


