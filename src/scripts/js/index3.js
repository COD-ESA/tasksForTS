"use strict";
// перегрузка функций
(function _() {
    const { log } = console;
    /* eslint-disable-next-line */
    function stringNumber(s, n) {
        if (n !== undefined) {
            return n;
        }
        return s;
    }
    log(stringNumber('Output string'));
    log(stringNumber('Hello!', 10));
    /* eslint-disable-next-line */
    function len(x) {
        return x.length;
    }
    log(len('Solomon!'));
    /* eslint wrap-iife: ["error", "inside"] */
})();
