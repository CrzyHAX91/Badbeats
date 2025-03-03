export interface Track {
  id: string;
  title: string;
  artist: string;
  duration: number; // in seconds
  coverUrl?: string;
}

export interface Playlist {
  id: string;
  name: string;
  mood: 'chill' | 'energetic' | 'focus';
  tracks: Track[];
}

export interface PlaylistSummary {
  id: string;
  name: string;
  mood: 'chill' | 'energetic' | 'focus';
  trackCount: number;
}
