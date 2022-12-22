// работа на TS с классами
(function _() {
  const { log } = console;
  log('hello!');

  /* eslint no-underscore-dangle: 0 */
  /* eslint max-classes-per-file: ["error", 2] */
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

  class SuperPerson extends Person {
    constructor(name: string, age: number) {
      super(name, age);
      this._name = name;
      this._age = age;
    }

    saySuper(): string {
      const msg = `Я супер герой по имени ${this._name}`;
      return msg;
    }
  }

  const superPerson: SuperPerson = new SuperPerson('Stepan', 35);
  log(superPerson);
  log(superPerson.sayHello());
  log(superPerson.saySuper());
  /* eslint wrap-iife: ["error", "inside"] */
})();
