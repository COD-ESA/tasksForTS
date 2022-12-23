// работа на TS с классами
(function _() {
  const { log } = console;
  log('hello!');

  /* eslint no-underscore-dangle: 0 */
  /* eslint max-classes-per-file: ["error", 3] */
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

  interface User {
    readonly name: string;
    print(s: string): string;
    send(obj: object): object;
  }

  class UserPerson implements User {
    _name: string;

    constructor(name: string) {
      this._name = name;
    }

    get name() {
      return `My name is ${this._name}`;
    }

    set name(value) {
      this._name = value;
    }

    print(msg: string): string {
      return msg;
    }

    send(x: object): object {
      return x;
    }
  }

  const userPerson: UserPerson = new UserPerson('Stas');
  log(userPerson);
  log(userPerson.send({ a: '!!!!', b: '++++' }));
  log(userPerson.name);
  userPerson.name = 'Maxim';
  log(userPerson.name);

  interface Obj {
    name: string;
    age: number;
    address: string;
  }
  const obj: Obj = {} as Obj;
  obj.name = 'Semen';
  obj.age = 25;
  obj.address = 'Moscow';
  const key = Object.keys(obj) as Array<keyof typeof obj>;
  log(key);

  /* eslint wrap-iife: ["error", "inside"] */
})();
