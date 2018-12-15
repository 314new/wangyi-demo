const { app, BrowserWindow } = require('electron');

let win;

function createMianWindow() {
    let winOptions = {
        width: 1000,
        height: 640,
        title: 'MusicBOX',
        transparent: true,
        icon: __dirname + '/assets/icon/app.png',
        frame: false
    }; 
    win = new BrowserWindow(winOptions);
    //win.webContents.openDevTools();
    win.loadFile(__dirname +'/index.html');
    // win.setAutoHideMenuBar(true);

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', () => {
    createMianWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createMianWindow()
    }
})

function toggleFullScreen() {
    mainWindow.setFullScreen(true)
}
