// работа на TS с классами
(function _() {
  const { log } = console;
  log('hello!');

  /* eslint no-underscore-dangle: 0 */
  class Person {
    _name: string;

    _age: number;

    get age() {
      return this._age;
    }

    set age(value: number) {
      this._age = value;
    }

    constructor(name: string, age: number) {
      this._name = name;
      this._age = age;
    }

    sayHello(): string {
      const msg = `Привет меня зовут ${this._name}, мне ${this._age} лет`;
      return msg;
    }
  }
  const igor: Person = new Person('Igor', 25);
  const dima: Person = new Person('Dima', 30);
  log(igor);
  log(igor.sayHello());
  log(dima);
  log(dima.sayHello());
  dima.age = 50;
  log(dima.sayHello());
  /* eslint wrap-iife: ["error", "inside"] */
})();
