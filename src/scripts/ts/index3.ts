// перегрузка функций
(function _() {
  const { log } = console;

  // стиль декларации функций
  function stringNumber(s: string): string;
  /* eslint-disable-next-line */
  function stringNumber(s: string, n?: number): number;
  /* eslint-disable-next-line */
  function stringNumber(s: any, n?: any) {
    if (n !== undefined) {
      return n;
    }
    return s;
  }

  log(stringNumber('Output string'));

  log(stringNumber('Hello!', 10));

  function len(s: string): number;
  /* eslint-disable-next-line */
  function len(arr: any[]): number;
  /* eslint-disable-next-line */
  function len(x: any) {
    return x.length;
  }
  log(len('Solomon!'));

  type Testfunc1<T, U> = {
    (s: T, n: U): T;
  };
  const testFunc1: Testfunc1<string, number> = (s, n) => s + n;

  log(testFunc1('hah', 100));

  /* eslint wrap-iife: ["error", "inside"] */
})();
