"use strict";
(function _() {
    const { log } = console;
    const array = [
        { label: 'label1', id: 1, des: 'here des1' },
        { label: 'label2', id: 2, des: 'here des2' },
        { label: 'label3', id: 3, des: 'here des3' },
    ];
    const parser = (arr, key) => 
    /* eslint-disable-next-line */
    arr.map((item) => ({ [key]: item[key] }));
    log(parser(array, 'label'));
    /* eslint wrap-iife: ["error", "inside"] */
})();
