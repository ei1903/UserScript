// ==UserScript==
// @name         HOJ-MyProblems
// @version      1.2
// @discriptioni HOJのメニューに"自分の問題"へのリンクを追加
// @author       ei1903
// @updateURL    https://github.com/ei1903/UserScript/raw/master/userscript/myProblems.user.js
// @include      https://hoj.hamako-ths.ed.jp/onlinejudge/*
// @exclude      https://hoj.hamako-ths.ed.jp/onlinejudge/contest/*
// ==/UserScript==

(function() {
    const usersURL = 'https://hoj.hamako-ths.ed.jp/onlinejudge/users';
    const problemsURL = 'https://hoj.hamako-ths.ed.jp/onlinejudge/problems';
    function getUsetName(callBack) {
        let userName = null;
        document.getElementsByClassName('pure-menu-list')[0].childNodes.forEach((node) => {
            if (String(node.innerHTML).indexOf('ユーザー名') != -1) {
                let left = String(node.innerHTML).indexOf('<br>') + 4;
                let right = String(node.innerHTML).lastIndexOf('</div>');
                userName = String(node.innerHTML).substring(left, right);
                callBack(userName);
            }
        });
    }
    function callBack(userName) {
        if (!userName) return;
        var id = localStorage.getItem(userName);
        if (!id) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', usersURL, true);
            xhr.onload = () => { addMenu(getID(xhr.responseURL)); };
            xhr.send(null);
        } else {
            addMenu(id);
        }
        function getID(url) {
            if (url.indexOf('login') != -1) return (null);
            const userID = url.substr(url.lastIndexOf('/') + 1, url.length - url.lastIndexOf('/') - 1);
            return (userID);
        };
        function addMenu(userID) {
            if (!userID) return;
            localStorage.setItem(userName, userID);
            const userProblemsURL = problemsURL + '/?user=' + userID;
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.className = 'pure-menu-link';
            a.href = userProblemsURL;
            a.innerHTML = '<i class="fa fa-list-ul fa-fw"></i>自分の問題';
            li.appendChild(a);
            var problems;
            document.getElementsByClassName('pure-menu-list')[0].childNodes.forEach((node) => {
                if (String(node.innerHTML).indexOf('問題一覧') != -1) {
                    problems = node;
                }
            });
            problems.after(li);
            if (location.href.indexOf(userProblemsURL) != -1) {
                li.className = 'pure-menu-item pure-menu-selected';
                problems.className = 'pure-nemu-item';
            } else {
                li.className = 'pure-menu-item';
            }
        };
    };
    getUsetName(callBack);
})();