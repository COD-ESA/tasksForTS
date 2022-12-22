"use strict";
// работа на TS с классами
(function _() {
    const { log } = console;
    log('hello!');
    /* eslint no-underscore-dangle: 0 */
    /* eslint max-classes-per-file: ["error", 2] */
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
    class SuperPerson extends Person {
        constructor(name, age) {
            super(name, age);
            this._name = name;
            this._age = age;
        }
        saySuper() {
            const msg = `Я супер герой по имени ${this._name}`;
            return msg;
        }
    }
    const superPerson = new SuperPerson('Stepan', 35);
    log(superPerson);
    log(superPerson.sayHello());
    log(superPerson.saySuper());
    /* eslint wrap-iife: ["error", "inside"] */
})();
