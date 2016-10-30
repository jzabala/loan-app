const {app, BrowserWindow} = require('electron');

let win;

function createMainWindow() {
  win = new BrowserWindow({width: 800, height: 600});

  win.loadURL(`file://${__dirname}/index.html`);

  win.on('closed', () => {
    win = null;
  })
}

app.on('ready', createMainWindow);