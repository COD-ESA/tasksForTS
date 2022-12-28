(function _() {
  const { log } = console;
  /* eslint-disable max-len */
  const random = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  log(random(3, 6));

  const target = document.querySelector('.container') as HTMLElement;
  const callback: IntersectionObserverCallback = <T extends IntersectionObserverEntry>(
    entries: T[],
    observer: IntersectionObserver,
  ) => {
    // log(entries);
    log(observer);
    entries.forEach((entry) => {
      const { isIntersecting, intersectionRatio, boundingClientRect } = entry;
      log('isIntersecting = ', isIntersecting);
      log('intersectionRatio = ', intersectionRatio);
      log('boundingClientRect x = ', boundingClientRect.x);
      log('boundingClientRect y= ', boundingClientRect.y);
      log('сработка Observer!');
    });
  };
  const options: IntersectionObserverInit = {
    // root: document.querySelector('.conteiner') as HTMLElement,
    rootMargin: '0px',
    threshold: 1.0,
  };

  const observer = new IntersectionObserver(callback, options);

  observer.observe(target);
  /* eslint wrap-iife: ["error", "inside"] */
})();
