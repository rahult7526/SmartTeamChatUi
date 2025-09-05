import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
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
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b dark:bg-gray-950/80 dark:supports-[backdrop-filter]:bg-gray-950/60 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold tracking-tight">Smart Team Chat</Link>
        <nav className="flex items-center gap-2">
          <Link to="/" className={`${linkBase} ${location.pathname === '/' ? active : inactive}`}>Chats</Link>
          <Link to="/new" className={`${linkBase} ${location.pathname === '/new' ? active : inactive}`}>New Chat</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-5xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<ChatList />} />
            <Route path="/chat/:id" element={<ChatWindow />} />
            <Route path="/new" element={<NewChat />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}


