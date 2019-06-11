const loger = e => {
  console.log(e.screenX);
};
document.querySelector(".feature").addEventListener("mousemove", loger);
