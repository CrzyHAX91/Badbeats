const { app, BrowserWindow, Tray, Menu } = require('electron');
const path = require('path');
const Store = require('electron-store');

const store = new Store();
let mainWindow;
let tray;

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    backgroundColor: '#0a0a0a',
    show: false // Don't show until ready
  });

  // Load the app
  const startUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000' 
    : `file://${path.join(__dirname, '../client/out/index.html')}`;

  mainWindow.loadURL(startUrl);

  // Show window when ready
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    
    // Restore last window state
    const windowState = store.get('windowState');
    if (windowState) {
      mainWindow.setBounds(windowState);
    }
  });

  // Save window state on close
  mainWindow.on('close', () => {
    store.set('windowState', mainWindow.getBounds());
  });

  // Create system tray
  createTray();
}

function createTray() {
  // For development, we'll use a text icon. In production, replace with proper icon.
  tray = new Tray(path.join(__dirname, 'assets', 'icon.png'));
  
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Show BadBeats',
      click: () => mainWindow.show()
    },
    {
      label: 'Play/Pause',
      click: () => mainWindow.webContents.send('media-play-pause')
    },
    { type: 'separator' },
    {
      label: 'Quit',
      click: () => app.quit()
    }
  ]);

  tray.setToolTip('BadBeats');
  tray.setContextMenu(contextMenu);

  tray.on('click', () => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
  });
}

// App lifecycle handlers
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Handle offline/online events
app.on('ready', () => {
  const handleConnectivity = (online) => {
    if (mainWindow) {
      mainWindow.webContents.send('connectivity-change', online);
    }
  };

  // Listen for online/offline events
  require('electron').ipcMain.on('online-status-changed', (event, online) => {
    handleConnectivity(online);
  });
});

// Enable offline support
app.on('ready', () => {
  const offlineData = store.get('offlineData') || {};
  
  // Handle saving tracks for offline playback
  require('electron').ipcMain.on('save-for-offline', (event, track) => {
    offlineData[track.id] = track;
    store.set('offlineData', offlineData);
  });

  // Handle removing tracks from offline storage
  require('electron').ipcMain.on('remove-from-offline', (event, trackId) => {
    delete offlineData[trackId];
    store.set('offlineData', offlineData);
  });
});
