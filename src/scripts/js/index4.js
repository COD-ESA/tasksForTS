"use strict";
(function _() {
    const { log } = console;
    function test(a) {
        log(typeof a);
    }
    test(10);
    test('hello');
    const test2 = (a) => {
        log(typeof a);
    };
    test2(555);
    test('kill');
    /* eslint wrap-iife: ["error", "inside"] */
})();
