"use strict";
(function _() {
    /* eslint max-classes-per-file: ["error", 3] */
    // разбор паттернов Фабрика, паттерн Компаньон и Строитель
    const { log } = console;
    log('insex8');
    class SharpWhite {
        constructor() {
            this.color = 'white';
        }
    }
    class SharpBlack {
        constructor() {
            this.color = 'Black';
        }
    }
    class SharpGreen {
        constructor() {
            this.color = 'Green';
        }
    }
    /* eslint-disable-next-line */
    let Sharp = {
        /* eslint-disable-next-line */
        create(type) {
            switch (type) {
                case 'SharpBlack':
                    return new SharpBlack();
                case 'SharpWhite':
                    return new SharpWhite();
                default: {
                    return new SharpGreen();
                }
            }
        },
    };
    const sharp1 = Sharp.create('SharpBlack');
    log(sharp1);
    const sharp2 = Sharp.create('SharpWhite');
    log(sharp2);
    /* eslint wrap-iife: ["error", "inside"] */
})();
