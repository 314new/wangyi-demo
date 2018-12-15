document.body.addEventListener('click', function(event) {
    if(event.target.dataset.pannel) {
        //隐藏所有的面板
        hideAllPannel()

        //移除所有有背景的导航按钮
        removeBgNavBtn()

        //给当前导航按钮添加背景色
        event.target.classList.add('is-focus');

        //判断当前的显示面板，进行显示
        let pannel = event.target.dataset.pannel;
        if(pannel) {
            getPannel = document.querySelector('.' + pannel + '-pannel');
            getPannel.classList.add('is-show');
        }

        
    }
}, true)

function hideAllPannel() {
    let pannels = document.querySelectorAll(".js-content.is-show");
    Array.prototype.forEach.call(pannels, (pannel)=> {
        pannel.classList.remove('is-show')
    })
}

function removeBgNavBtn() {
    let pannels = document.querySelectorAll(".js-nav.is-focus");
    Array.prototype.forEach.call(pannels, (pannel)=> {
        pannel.classList.remove('is-focus')
    })
}


// 默认显示发现音乐

function defaultVisiablePannel() {
    let defaultVisiablePannel = document.querySelector('.js-nav[data-pannel="find-music"]');
    defaultVisiablePannel.classList.add('is-show');
    defaultVisiablePannel.click();
}

defaultVisiablePannel();