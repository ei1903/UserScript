// ==UserScript==
// @name         HOJ-ContestMenuUtils
// @version      1.0
// @discription  HOJのコンテスト画面でのメニューを便利に
// @author       ei1903
// @updateURL    
// @include      https://hoj.hamako-ths.ed.jp/onlinejudge/contest/*
// ==/UserScript==

(function() {
    var menu = document.getElementsByTagName('ul')[0];
    menu.childNodes.forEach((node) => {
        console.log(node.nodeName);
    });
})();