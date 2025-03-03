'use client'

import { motion } from 'framer-motion'

interface LoadingSpinnerProps {
  size?: number
  color?: 'pink' | 'cyan'
}

export function LoadingSpinner({ size = 40, color = 'cyan' }: LoadingSpinnerProps) {
  const colorClass = color === 'pink' ? 'text-neon-pink' : 'text-neon-cyan'
  const glowClass = color === 'pink' ? 'shadow-neon-pink' : 'shadow-neon-cyan'

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`rounded-full border-2 border-t-transparent ${colorClass} ${glowClass}`}
        style={{
          width: size,
          height: size,
          boxShadow: `0 0 15px currentColor`,
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}

export function LoadingPlaceholder() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8">
      <LoadingSpinner />
      <p className="text-gray-400 animate-pulse">Loading awesome beats...</p>
    </div>
  )
}
