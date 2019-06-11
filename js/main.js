const stickyNavBar = c => {
  if (window.pageYOffset > 0) {
    document.querySelector(".navbar").classList.add(c);
  } else {
    document.querySelector(".navbar").classList.remove(c);
  }
};
if (document.querySelector(".navbar").dataset.toggele)
  window.addEventListener("scroll", () => {
    stickyNavBar(document.querySelector(".navbar").dataset.toggele);
  });

// toggler
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

document.querySelector(".toggler").addEventListener("click", e => {
  e.target.style.display = "none ";
  animate(document.querySelector(".nav"), { left: 0 }, 500);
  document.querySelector(".close").style.display = "block";
});

document.querySelector(".close").addEventListener("click", e => {
  e.target.style.display = "none";
  animate(document.querySelector(".nav"), { left: "-300px" }, 500);
  document.querySelector(".toggler").style.display = "block";
});

let box = document.getElementById("box");
let long = document.getElementById("long");
console.log(document.body.scrollLeft);
box.style.left = long.offsetLeft + document.body.scrollLeft + "px";
box.style.top = long.offsetTop + document.body.scrollTop + "px";
box.style.width = long.offsetWidth + "px";
box.style.height = long.offsetHeight + "px";
