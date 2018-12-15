'use strict';
const basicUrl = 'http://118.24.21.144:3000/';

const Apis = {
    personalized: 'personalized',
    banner: 'banner'
};

function getData(url, init, successCall) {
    fetch(url, init)
        .then((response)=> {
            return response.json()
        }).then((data)=> {
            successCall(data);
        }).catch((err)=> {
            console.log(err);
        });
}

//  获取banner图
const getBanner = function(callFun) {
    getData(basicUrl + Apis.banner, {}, callFun)
}

//  获取推荐歌单
const getPersonalized = function(callFun) {
    getData(basicUrl + Apis.personalized, {}, callFun)
}
