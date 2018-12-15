let findMusicSpans = document.querySelectorAll('.find-music-nav');

Array.prototype.forEach.call(findMusicSpans, (fms)=> {
    fms.addEventListener('click', (event)=> {
        hideAllMusicNavBarBorder();
        event.target.classList.add('actived');
        //在展示数据自前，请求数据
        let type = event.target.dataset.content;
        switch(type) {
            case "suggest":
                //处理banner
                getBanner(function(data) {
                    console.log(data.banners);
                }) 
                //处理推荐歌单
                getPersonalized(function(data) {
                    let centerContent = document.querySelector('.u-suggest');
                    let suggestDom = '';
                    data.result.forEach((value, index)=> {
                        suggestDom += 
                        `<div class="suggest-box">
                            <img src="${ value.picUrl }" draggable="false"/>
                            <p>${ value.name }</p>
                        </div>`
                    })
                    centerContent.innerHTML = suggestDom;
                })

                //处理独家放送

                //处理最新音乐

                //处理推荐mv

                //处理主播电台
                break;
            case "orders":

                break;
            case "hoster":

                break;
            case "new-music":

                break;
            case "singers":

                break;
            default:
                console.log('you get a unknown nav!');
                break;
        }

        showContent(event);
    })
});

function hideAllMusicNavBarBorder() {
    Array.prototype.forEach.call(findMusicSpans, (fms)=> {
        fms.classList.remove('actived');
    });
}

function showContent(e) {
    let content = e.target.dataset.content;
    if(content) {
        let willShowContent = document.querySelector('.u-' + content);
        let currentShowContent = document.querySelector('.u-show');
        currentShowContent.classList.remove('u-show');
        willShowContent.classList.add('u-show');
    }
}

function defaultSwitchShow() {
    let defualtSwitch = document.querySelector('.default-switch');
    defualtSwitch.click();
}
defaultSwitchShow();

