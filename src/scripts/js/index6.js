"use strict";
// разбор дженериков
(function _() {
    const { log } = console;
    const parametersStr = {
        lines: ['title', 'description'],
        liquids: ['title', 'description'],
        liquid: ['title', 'description', 'pg', 'vg', 'streength', 'count', 'price'],
    };
    const parametersNum = {
        1: ['title', 'description'],
        2: ['title', 'description'],
        3: ['title', 'description', 'pg', 'vg', 'streength', 'count', 'price'],
    };
    // type Mykey = { [key in keyof typeof parametersStr]: any };
    const test = (arr) => {
        const res = Object.values(arr);
        return res;
    };
    log(test(parametersStr));
    log(test(parametersNum));
    // const ret: number | string = 100;
    function cheked(ret2) {
        return Number.isFinite(ret2);
    }
    log(cheked('555'));
    let Days;
    (function (Days) {
        Days[Days["Sat"] = 0] = "Sat";
        Days[Days["Sun"] = 1] = "Sun";
        Days[Days["Mon"] = 2] = "Mon";
        Days[Days["Tue"] = 3] = "Tue";
        Days[Days["Wed"] = 4] = "Wed";
        Days[Days["Thu"] = 5] = "Thu";
        Days[Days["Fri"] = 6] = "Fri";
    })(Days || (Days = {}));
    log(Days);
    const directions = [0 /* Directionss.Up */, 1 /* Directionss.Down */, 2 /* Directionss.Left */, 3 /* Directionss.Right */];
    log(directions);
    const click = (teg) => {
        const button = document.querySelector(teg);
        log(button);
        if (button instanceof HTMLInputElement) {
            button.addEventListener('click', () => log('hello!!'));
            button.click();
        }
    };
    click('input');
    /* eslint wrap-iife: ["error", "inside"] */
})();
