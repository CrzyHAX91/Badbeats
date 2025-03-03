'use client'

import { motion } from 'framer-motion'

const menuItems = [
  { name: 'Home', icon: '🏠' },
  { name: 'Search', icon: '🔍' },
  { name: 'Library', icon: '📚' },
  { name: 'AI Playlists', icon: '🤖' },
]

export function Sidebar() {
  return (
    <nav className="w-64 bg-dark-surface p-6 space-y-8">
      <div className="neon-text text-2xl font-bold">BadBeats</div>
      
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <motion.li
            key={item.name}
            whileHover={{ x: 5 }}
            className="cursor-pointer"
          >
            <a className="flex items-center space-x-4 text-gray-300 hover:text-neon-cyan transition-colors">
              <span className="text-xl">{item.icon}</span>
              <span>{item.name}</span>
            </a>
          </motion.li>
        ))}
      </ul>

      <div className="pt-8 border-t border-gray-800">
        <h3 className="text-sm uppercase text-gray-500 mb-4">Recent Playlists</h3>
        <ul className="space-y-2">
          <li className="text-gray-400 hover:text-neon-pink cursor-pointer transition-colors">
            Workout Mix
          </li>
          <li className="text-gray-400 hover:text-neon-pink cursor-pointer transition-colors">
            Chill Vibes
          </li>
          <li className="text-gray-400 hover:text-neon-pink cursor-pointer transition-colors">
            Focus Mode
          </li>
        </ul>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 bg-dark-surface">
        <button className="w-full py-2 px-4 rounded bg-neon-pink bg-opacity-20 hover:bg-opacity-30 text-neon-pink transition-colors">
          Create Playlist
        </button>
      </div>
    </nav>
  )
}
