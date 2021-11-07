// ==UserScript==
// @name         HOJ-ContestMenuUtils
// @version      1.0
// @discription  HOJのコンテスト画面でのメニューを便利に
// @author       ei1903
// @updateURL    https://github.com/ei1903/UserScript/raw/contestMenuUtils/HOJ/contestMenuUtils.user.js
// @include      https://hoj.hamako-ths.ed.jp/onlinejudge/contest/*
// ==/UserScript==

(function() {
    var menu = document.getElementsByTagName('ul')[0];
    menu.childNodes.forEach((node) => {
        let child = node.firstChild;
        if (child && child.href == location.href) {
            node.className = 'pure-menu-selected';
        }
    });
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = 'https://hoj.hamako-ths.ed.jp/onlinejudge/';
    a.innerHTML = '<i class="fa fa-home fa-fw"></i>TOP'
    li.appendChild(a);
    menu.children[0].children[0].innerHTML = '<i class="fa fa-users fa-fw"></i>コンテストTOP';
    menu.childNodes[0].before(li);
})();