(function learn() {
  const { log } = console;

  const salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
  };

  const maxSalaries = (objList: object): string => {
    let thebest = ''; // имя лучшего сотрудника
    let nameMax = 0; // зарплата лучшего сотрудника ;)

    Object.entries(objList).forEach((item) => {
      log(item[1]);
      if (nameMax < item[1]) {
        [thebest, nameMax] = item;
      }
    });

    return thebest;
  };

  log(maxSalaries(salaries));
  /* eslint wrap-iife: ["error", "inside"] */
})();
