(function _() {
  const { log } = console;

  type X = {
    d: string;
    c: number;
    n: number;
    k: string;
  };
  type Y = {
    c: number;
    n: number;
    m: string;
    p: string;
    k: string;
  };

  type A_XorY = Y | X;
  type B_XandY = X & Y;

  const a: A_XorY = {
    m: 'mmmm',
    n: 555,
    p: 'pppp',
    c: 555,
    k: 'daddawd',
  };
  const m: A_XorY = {
    c: 555,
    n: 300,
    k: 'dasda',
    m: 'xasxsx',
    p: 'xaxasx',
    d: 'saass',
  };
  log(a);
  log(m);
  const b: B_XandY = {
    c: 100,
    n: 100,
    m: 'dsccdscs',
    p: 'sdcdsc',
    k: 'csdcsd',
    d: 'axsa',
  };
  const l: B_XandY = {
    c: 100,
    n: 100,
    m: 'dsccdscs',
    p: 'sdcdsc',
    k: 'csdcsd',
    d: 'asxaxsx',
  };
  log(b);
  log(l);
  /* eslint wrap-iife: ["error", "inside"] */
})();
