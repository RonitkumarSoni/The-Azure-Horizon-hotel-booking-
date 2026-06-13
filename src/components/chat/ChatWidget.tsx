'use client'

import { useState, useRef, useEffect } from 'react'

type Message = {
  role: 'user' | 'model'
  text: string
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Welcome to The Azure Horizon! How can I help you book your stay today?' }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          history: messages.slice(1) // exclude the first greeting from raw history to prevent duplication if we want, or just send it
        })
      })

      const data = await response.json()
      
      if (data.text) {
        setMessages(prev => [...prev, { role: 'model', text: data.text }])
      } else {
        setMessages(prev => [...prev, { role: 'model', text: 'Sorry, I am having trouble connecting right now.' }])
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'An error occurred. Please try again.' }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="w-[350px] h-[500px] max-w-[calc(100vw-48px)] bg-travertine/70 backdrop-blur-xl border border-golden-amber/30 rounded-2xl shadow-2xl mb-4 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
          <div className="bg-pivot-black/80 backdrop-blur-md text-travertine p-4 flex justify-between items-center border-b border-golden-amber/20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-golden-amber flex items-center justify-center text-pivot-black font-display font-bold">
                AH
              </div>
              <div>
                <h3 className="font-display text-lg leading-none">Horizon Assistant</h3>
                <p className="text-[10px] font-mono tracking-widest text-golden-amber/80 uppercase mt-1">Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-travertine/60 hover:text-travertine p-1">
              ✕
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-transparent">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm font-body ${
                  msg.role === 'user' 
                    ? 'bg-golden-amber text-pivot-black rounded-br-sm' 
                    : 'bg-white text-ink rounded-bl-sm border border-concrete/20 shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl px-4 py-3 bg-white text-ink/50 rounded-bl-sm border border-concrete/20 shadow-sm text-sm flex gap-1">
                  <span className="animate-bounce">.</span><span className="animate-bounce delay-75">.</span><span className="animate-bounce delay-150">.</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-3 bg-white/10 backdrop-blur-xl border-t border-white/20 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-white/20 border border-white/30 rounded-full px-4 py-2 text-sm focus:outline-none focus:bg-white/30 focus:border-golden-amber/50 text-ink placeholder:text-ink/60 transition-colors backdrop-blur-md shadow-inner"
              disabled={isLoading}
            />
            <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className="w-10 h-10 rounded-full bg-white/20 border border-white/30 text-golden-amber flex items-center justify-center hover:bg-white/30 disabled:opacity-50 transition-all backdrop-blur-md shadow-sm"
            >
              ↑
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-pivot-black shadow-2xl flex items-center justify-center hover:scale-105 transition-transform duration-300 border-2 border-golden-amber/50 group"
      >
        {isOpen ? (
          <span className="text-travertine text-2xl">✕</span>
        ) : (
          <svg className="w-8 h-8 text-golden-amber group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
    </div>
  )
}
