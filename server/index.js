require('dotenv').config({ path: '../.env' });
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Mock data for development
const mockPlaylists = {
  'workout': [
    { title: 'Eye of the Tiger', artist: 'Survivor' },
    { title: 'Stronger', artist: 'Kanye West' },
    { title: 'Till I Collapse', artist: 'Eminem' }
  ],
  'chill': [
    { title: 'Waves', artist: 'Mr Probz' },
    { title: 'Sunday Morning', artist: 'Maroon 5' },
    { title: 'Circles', artist: 'Post Malone' }
  ]
};

// Routes
app.post('/api/playlist/generate', async (req, res) => {
  try {
    const { prompt } = req.body;
    const playlistType = prompt.toLowerCase().includes('workout') ? 'workout' : 'chill';
    
    res.json({ 
      playlist: mockPlaylists[playlistType],
      message: 'AI-generated playlist coming soon!'
    });
  } catch (error) {
    console.error('Error generating playlist:', error);
    res.status(500).json({ error: 'Failed to generate playlist' });
  }
});

app.post('/api/track/tag', async (req, res) => {
  try {
    const { trackInfo } = req.body;
    
    // Mock tags based on track info
    const mockTags = ['electronic', 'pop', 'dance'];
    res.json({ tags: mockTags });
  } catch (error) {
    console.error('Error tagging track:', error);
    res.status(500).json({ error: 'Failed to tag track' });
  }
});

// Basic health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
