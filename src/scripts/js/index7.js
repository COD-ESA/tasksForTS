"use strict";
// работа на TS с классами
(function _() {
    const { log } = console;
    log('hello!');
    /* eslint no-underscore-dangle: 0 */
    /* eslint max-classes-per-file: ["error", 3] */
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
    class UserPerson {
        constructor(name) {
            this._name = name;
        }
        get name() {
            return `My name is ${this._name}`;
        }
        set name(value) {
            this._name = value;
        }
        print(msg) {
            return msg;
        }
        send(x) {
            return x;
        }
    }
    const userPerson = new UserPerson('Stas');
    log(userPerson);
    log(userPerson.send({ a: '!!!!', b: '++++' }));
    log(userPerson.name);
    userPerson.name = 'Maxim';
    log(userPerson.name);
    const obj = {};
    obj.name = 'Semen';
    obj.age = 25;
    obj.address = 'Moscow';
    const key = Object.keys(obj);
    log(key);
    /* eslint wrap-iife: ["error", "inside"] */
})();
