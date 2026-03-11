const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, "assets/icon.ico"),
    webPreferences: {
      contextIsolation: true
    }
  });

  win.loadURL("https://lilian0eb1f1d930134343bc9e545cf0e9cab9audit.salesmate.app:444/");
}

app.whenReady().then(createWindow);