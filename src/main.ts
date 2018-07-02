import {app, BrowserWindow} from "electron";
import { doSimpleKeyboardTest } from "./keyboard";

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({width: 800, height: 600});

  // and load the index.html of the app.
  win.loadFile("index.html");

  doSimpleKeyboardTest();
}

app.on("ready", createWindow);
