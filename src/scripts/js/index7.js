"use strict";
// работа на TS с классами
(function _() {
    const { log } = console;
    log('hello!');
    /* eslint no-underscore-dangle: 0 */
    class Person {
        get age() {
            return this._age;
        }
        set age(value) {
            this._age = value;
        }
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        sayHello() {
            const msg = `Привет меня зовут ${this._name}, мне ${this._age} лет`;
            return msg;
        }
    }
    const igor = new Person('Igor', 25);
    const dima = new Person('Dima', 30);
    log(igor);
    log(igor.sayHello());
    log(dima);
    log(dima.sayHello());
    dima.age = 50;
    log(dima.sayHello());
    /* eslint wrap-iife: ["error", "inside"] */
})();
