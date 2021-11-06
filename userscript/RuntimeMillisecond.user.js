// ==UserScript==
// @name         RuntimeMillisecond
// @version      1.1
// @description  実行時間を1000倍しmsで表示します
// @author       ei1903
// @updateURL    https://github.com/ei1903/UserScript/raw/master/userscript/RuntimeMillisecond.user.js
// @include      https://hoj.hamako-ths.ed.jp/onlinejudge/state
// @include      https://hoj.hamako-ths.ed.jp/onlinejudge/state?*
// @include      https://hoj.hamako-ths.ed.jp/onlinejudge/state/me
// @include      https://hoj.hamako-ths.ed.jp/onlinejudge/state/me?*
// @include      https://hoj.hamako-ths.ed.jp/onlinejudge/*/state
// @include      https://hoj.hamako-ths.ed.jp/onlinejudge/*/state?*
// @include      https://hoj.hamako-ths.ed.jp/onlinejudge/*/state/me
// @include      https://hoj.hamako-ths.ed.jp/onlinejudge/*/state/me?*
// ==/UserScript==

(function() {
    let url = location.href;
    let table = document.getElementsByTagName('table').item(0).children.item(1);
    for (let i = 0; i < table.childElementCount; ++i) {
        if (table.children.item(i).childElementCount <= 6) continue;
        let td = table.children.item(i).children.item((url.indexOf('me') == -1 ? 6 : 5));
        let sec = parseFloat(td.children.item(0).innerHTML);
        td.children.item(0).innerHTML = sec * 1000;
        td.innerHTML = td.innerHTML.replace('> s', '>');
        let font = td.children.item(0);
        let span = document.createElement('span');
        span.innerHTML = ' ms';
        font.after(span);
    }
})();