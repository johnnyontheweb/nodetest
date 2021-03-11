//~ import { upperCase, localeUpperCase } from "upper-case";
const { app, BrowserWindow } = require('electron')
const upcase = require('upper-case');

var apc = upcase.upperCase('test');
function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    additionalArguments: [apc]
    }
  })
  win.toggleDevTools();
  console.log(apc);
  //~ Viewer.check();
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