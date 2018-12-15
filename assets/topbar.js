const electron = require('electron');
const win = electron.remote.getCurrentWindow();
const map = {
    isMax: false 
};

// 最小化的操作
let small = document.querySelector('.small'); 
small.addEventListener('click', function() {
    win.minimize()
})

// 最大化，取消最大化的切换操作
let full = document.querySelector('.full'); 
full.addEventListener('click', function() {
    //判断当前窗口的是否为最大化或者最小化
    // let isMaximized = win.isMaximized()
    if(map.isMax) {
        document.documentElement.style.padding = 5 + "px"; 
        win.unmaximize()
        map.isMax = false
    }else {
        document.documentElement.style.padding = 0 + "px"; 
        win.maximize()
        map.isMax = true
    }
})

// 退出程序
let close = document.querySelector('.close'); 
close.addEventListener('click', function() {
    if (process.platform !== 'darwin') {
        electron.remote.app.quit()
    }
})