//~ import { upperCase, localeUpperCase } from "upper-case";
const { app, BrowserWindow } = require('electron')
var upcase = require('upper-case');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
    var apc = upcase.upperCase('test');
  console.log(apc);
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})