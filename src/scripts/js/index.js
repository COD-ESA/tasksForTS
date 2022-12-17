"use strict";
const testLoadScript = (item) => {
    const h = document.querySelector(item);
    if (h instanceof HTMLElement) {
        h.textContent = 'hello!';
    }
};
testLoadScript('h1');
