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

  const obj = {
    label1: ['1'],
    label2: ['2'],
    label3: ['3'],
  };
  const res = JSON.parse(JSON.stringify(obj, ['label1']));
  log(res);
  const getPost = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    log(response);
    // const res = response.json();
    response.json().then((t) => log(t));
    // res.then((t) => log(t));
  };
  getPost();

  /* eslint wrap-iife: ["error", "inside"] */
})();
