// разбор дженериков
(function _() {
  const { log } = console;

  type Struct = {
    [k: string | number]: any[];
  };

  const parametersStr: Struct = {
    lines: ['title', 'description'],
    liquids: ['title', 'description'],
    liquid: ['title', 'description', 'pg', 'vg', 'streength', 'count', 'price'],
  };
  const parametersNum: Struct = {
    1: ['title', 'description'],
    2: ['title', 'description'],
    3: ['title', 'description', 'pg', 'vg', 'streength', 'count', 'price'],
  };

  // type Mykey = { [key in keyof typeof parametersStr]: any };

  const test = <T extends Struct>(arr: T): any[] => {
    const res = Object.values(arr);
    return res;
  };
  log(test(parametersStr));
  log(test(parametersNum));

  // const ret: number | string = 100;

  function cheked(ret2: number | string): ret2 is number {
    return Number.isFinite(ret2);
  }
  log(cheked('555'));

  enum Days {
    Sat,
    Sun,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
  }
  log(Days);
  const enum Directionss {
    Up,
    Down,
    Left,
    Right,
  }
  const directions = [Directionss.Up, Directionss.Down, Directionss.Left, Directionss.Right];
  log(directions);

  const click = (teg: string) => {
    const button = document.querySelector(teg);
    log(button);
    if (button instanceof HTMLInputElement) {
      button.addEventListener('click', () => log('hello!!'));
      button.click();
    }
  };
  click('input');

  /* eslint wrap-iife: ["error", "inside"] */
})();
