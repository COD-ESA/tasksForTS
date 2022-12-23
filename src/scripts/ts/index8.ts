(function _() {
  /* eslint max-classes-per-file: ["error", 3] */
  // разбор паттернов Фабрика, паттерн Компаньон и Строитель
  const { log } = console;
  log('insex8');

  type Sharp = {
    color: string;
  };
  class SharpWhite implements Sharp {
    color = 'white';
  }

  class SharpBlack implements Sharp {
    color = 'Black';
  }

  class SharpGreen implements Sharp {
    color = 'Green';
  }

  /* eslint-disable-next-line */
  let Sharp = {
    /* eslint-disable-next-line */
    create(type: 'SharpBlack' | 'SharpWhite'): Sharp {
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
  /* eslint wrap-iife: ["error", "inside"] */
})();
