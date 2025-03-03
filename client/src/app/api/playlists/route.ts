import { NextResponse } from 'next/server';
import type { Playlist } from '@/types';

// Mock data
const playlists: Playlist[] = [
  {
    id: '1',
    name: 'Workout Mix',
    mood: 'energetic',
    tracks: [
      {
        id: '1-1',
        title: 'Eye of the Tiger',
        artist: 'Survivor',
        duration: 251
      },
      {
        id: '1-2',
        title: 'Stronger',
        artist: 'Kanye West',
        duration: 312
      },
      {
        id: '1-3',
        title: 'Till I Collapse',
        artist: 'Eminem',
        duration: 298
      }
    ]
  },
  {
    id: '2',
    name: 'Chill Vibes',
    mood: 'chill',
    tracks: [
      {
        id: '2-1',
        title: 'Waves',
        artist: 'Mr Probz',
        duration: 237
      },
      {
        id: '2-2',
        title: 'Sunday Morning',
        artist: 'Maroon 5',
        duration: 293
      },
      {
        id: '2-3',
        title: 'Circles',
        artist: 'Post Malone',
        duration: 242
      }
    ]
  },
  {
    id: '3',
    name: 'Focus Mode',
    mood: 'focus',
    tracks: [
      {
        id: '3-1',
        title: 'Experience',
        artist: 'Ludovico Einaudi',
        duration: 315
      },
      {
        id: '3-2',
        title: 'Time',
        artist: 'Hans Zimmer',
        duration: 275
      },
      {
        id: '3-3',
        title: 'River Flows in You',
        artist: 'Yiruma',
        duration: 223
      }
    ]
  }
];

export async function GET() {
  // Return playlist summaries (without full track lists)
  const summaries = playlists.map(playlist => ({
    id: playlist.id,
    name: playlist.name,
    mood: playlist.mood,
    trackCount: playlist.tracks.length
  }));

  return NextResponse.json(summaries);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newPlaylist: Playlist = {
      id: (playlists.length + 1).toString(),
      ...body,
      tracks: body.tracks || []
    };
    
    playlists.push(newPlaylist);
    return NextResponse.json(newPlaylist, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid playlist data' },
      { status: 400 }
    );
  }
}
