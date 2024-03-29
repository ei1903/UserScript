// ==UserScript==
// @name         HOJ-RuntimeMillisecond
// @version      1.3
// @description  HOJの提出一覧画面での実行時間を1000倍しmsで表示
// @author       ei1903
// @updateURL    https://github.com/ei1903/UserScript/raw/master/HOJ/RuntimeMillisecond.user.js
// @downloadURL  https://github.com/ei1903/UserScript/raw/master/HOJ/RuntimeMillisecond.user.js
// @match        https://hoj.hamako-ths.ed.jp/onlinejudge/state
// @match        https://hoj.hamako-ths.ed.jp/onlinejudge/state?*
// @match        https://hoj.hamako-ths.ed.jp/onlinejudge/state/me
// @match        https://hoj.hamako-ths.ed.jp/onlinejudge/state/me?*
// @match        https://hoj.hamako-ths.ed.jp/onlinejudge/*/state
// @match        https://hoj.hamako-ths.ed.jp/onlinejudge/*/state?*
// @match        https://hoj.hamako-ths.ed.jp/onlinejudge/*/state/me
// @match        https://hoj.hamako-ths.ed.jp/onlinejudge/*/state/me?*
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