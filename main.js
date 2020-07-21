const {app, BrowserWindow} = require('electron')

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 900,
        webPreferences: {
            // nodeIntegration: true
        }
    })

    // mainWindow.loadFile('index.html')
    // 改为使用loadURL加载微信网页版url地址
    mainWindow.loadURL('https://gitee.com/jeemoo_1/dashboard/')

    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow)