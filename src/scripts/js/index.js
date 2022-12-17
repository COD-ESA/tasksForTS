"use strict";
// Задача на подсчет количества HTML элементов
const { log } = console;
// возвращает элемент или null если его нет в document
const testLoadScript = (item) => {
    const elem = document.querySelector(item);
    if (elem instanceof HTMLElement)
        return elem;
    return null;
};
const body = testLoadScript('body');
const countIncludeChildrens = (element) => {
    if (element instanceof HTMLElement) {
        const elementArray = Array.from(element.children);
        // log(`Element ${element.tagName} includes ${element.children.length} items`);
        // log('\n');
        elementArray.forEach((item) => {
            if (item instanceof HTMLElement)
                countIncludeChildrens(item);
        });
    }
};
if (body instanceof HTMLElement) {
    countIncludeChildrens(body);
}
