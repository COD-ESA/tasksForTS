"use strict";
(function _() {
    const { log } = console;
    /* eslint-disable max-len */
    const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    log(random(3, 6));
    const target = document.querySelector('.container');
    const callback = (entries, observer) => {
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
    const options = {
        // root: document.querySelector('.conteiner') as HTMLElement,
        rootMargin: '0px',
        threshold: 1.0,
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(target);
    /* eslint wrap-iife: ["error", "inside"] */
})();
