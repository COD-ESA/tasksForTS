"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    const obj = {
        label1: ['1'],
        label2: ['2'],
        label3: ['3'],
    };
    const res = JSON.parse(JSON.stringify(obj, ['label1']));
    log(res);
    const getPost = () => __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://jsonplaceholder.typicode.com/posts');
        log(response);
        // const res = response.json();
        response.json().then((t) => log(t));
        // res.then((t) => log(t));
    });
    getPost();
    /* eslint wrap-iife: ["error", "inside"] */
})();
