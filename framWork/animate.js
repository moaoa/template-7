const animate = (el, obj, time = 1000, callBack) => {
  const addStyle = (el, obj) => {
    for (let i in obj) {
      el.style[i] = obj[i];
    }
  };
  el.style.transition = `all ${time / 1000}s ease-in-out`;
  addStyle(el, obj);
  console.log(typeof callBack);
  if (typeof callBack === "function") {
    callBack();
  }
};
