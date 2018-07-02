import {app, BrowserWindow} from "electron";

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({width: 800, height: 600});

  // and load the index.html of the app.
  win.loadFile("index.html");
}

app.on("ready", createWindow);
