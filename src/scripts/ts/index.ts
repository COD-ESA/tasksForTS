const testLoadScript = (item:string) => {
  const h = document.querySelector(item);
  if (h instanceof HTMLElement) {
    h.textContent = 'hello!';
  }
};

testLoadScript('h1');
