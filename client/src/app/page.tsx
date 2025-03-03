'use client'

import { MusicPlayer } from '@/components/MusicPlayer'
import { PlaylistCard } from '@/components/PlaylistCard'
import { Visualizer } from '@/components/Visualizer'
import { LoadingPlaceholder } from '@/components/LoadingSpinner'
import { usePlaylists } from '@/hooks/usePlaylists'

export default function Home() {
  const { playlists, loading, error } = usePlaylists()

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="gradient-text text-4xl font-bold mb-8">Welcome to BadBeats</h1>
        
        {/* Featured Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-neon-cyan mb-4">Featured Playlists</h2>
          
          {loading && <LoadingPlaceholder />}
          
          {error && (
            <div className="p-4 rounded-lg bg-dark-surface border border-neon-pink">
              <p className="text-neon-pink">Error: {error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-2 px-4 py-2 rounded bg-neon-pink bg-opacity-20 hover:bg-opacity-30 text-neon-pink transition-colors"
              >
                Try Again
              </button>
            </div>
          )}
          
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {playlists.map((playlist) => (
                <PlaylistCard
                  key={playlist.id}
                  name={playlist.name}
                  trackCount={playlist.trackCount}
                  mood={playlist.mood}
                  onClick={() => console.log(`Playing ${playlist.name}`)}
                />
              ))}
            </div>
          )}
        </section>

        {/* Now Playing Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neon-pink mb-4">Now Playing</h2>
          <div className="p-6 rounded-lg bg-dark-surface neon-border">
            <MusicPlayer />
            <Visualizer />
          </div>
        </section>
      </div>
    </div>
  )
}
