//This is an electron app to create a desktop application based on chrome
const electron = require("electron");
const { app, BrowserWindow } = electron;

let mainWindow;
let addWindow;
app.on("ready", () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    title:"Function Plotter",
    
  });
  mainWindow.loadFile("index.html");
  mainWindow.on("closed", () => {
    app.quit();
  });
mainWindow.maximize();
mainWindow.removeMenu();
});
