# BadBeats 🎵

A modern music streaming platform with a neon cyberpunk aesthetic, featuring AI-powered playlist generation and real-time audio visualization.

## Features

- 🎨 Sleek neon cyberpunk design with smooth animations
- 🎵 Real-time audio visualization
- 🤖 AI-powered playlist generation
- 📱 Responsive layout for all devices
- 🖥️ Cross-platform desktop application (Electron)
- 🌐 Web version accessible from any browser

## Tech Stack

- **Frontend**:
  - Next.js 14 with App Router
  - React with TypeScript
  - Tailwind CSS for styling
  - Framer Motion for animations

- **Backend**:
  - Express.js server
  - RESTful API endpoints
  - Mock data (ready for real database integration)

- **Desktop**:
  - Electron for cross-platform support
  - IPC communication between renderer and main process

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/badbeats.git
   cd badbeats
   ```

2. Install dependencies:
   ```bash
   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install

   # Install Electron dependencies
   cd ../electron
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=3001
   NEXT_PUBLIC_API_URL=http://localhost:3001
   DEV_SERVER_URL=http://localhost:3000
   PRODUCTION_APP_URL=app://./index.html
   ```

4. Start the development servers:
   ```bash
   # Start Next.js client (in client directory)
   npm run dev

   # Start Express server (in server directory)
   npm run dev

   # Start Electron app (in electron directory)
   npm start
   ```

## Project Structure

```
badbeats/
├── client/                 # Next.js frontend
│   ├── src/
│   │   ├── app/           # App router pages
│   │   ├── components/    # React components
│   │   ├── hooks/        # Custom React hooks
│   │   └── types/        # TypeScript definitions
│   └── public/           # Static assets
├── server/               # Express.js backend
│   ├── index.js         # Server entry point
│   └── routes/          # API routes
└── electron/            # Desktop application
    ├── main.js         # Main process
    └── preload.js      # Preload scripts
```

## Development

- **Client**: The Next.js frontend runs on `http://localhost:3000`
- **Server**: The Express backend runs on `http://localhost:3001`
- **API**: Access the API at `http://localhost:3001/api`
- **Desktop**: The Electron app loads the development server in development mode

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Neon UI inspiration from cyberpunk aesthetics
- Audio visualization powered by Web Audio API
- Icons and graphics from various open-source projects
