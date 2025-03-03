'use client'

import { motion } from 'framer-motion'

interface PlaylistCardProps {
  name: string
  trackCount: number
  mood?: 'chill' | 'energetic' | 'focus'
  onClick?: () => void
}

export function PlaylistCard({ name, trackCount, mood = 'chill', onClick }: PlaylistCardProps) {
  const moodEmoji = {
    chill: '🌙',
    energetic: '⚡',
    focus: '🎯'
  }

  const moodGradient = {
    chill: 'from-neon-cyan to-blue-500',
    energetic: 'from-neon-pink to-purple-500',
    focus: 'from-green-400 to-neon-cyan'
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`p-6 rounded-lg bg-dark-surface hover:neon-border transition-all duration-300 cursor-pointer relative overflow-hidden group`}
    >
      {/* Background Gradient */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${moodGradient[mood]} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl">{moodEmoji[mood]}</span>
          <span className="text-sm text-gray-400">{trackCount} tracks</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-neon-cyan transition-colors">
          {name}
        </h3>
        
        {/* Play Button (appears on hover) */}
        <motion.button
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-neon-pink bg-opacity-20 text-neon-pink flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  )
}
