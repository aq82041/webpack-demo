import x from "./x.js";

import png from "./assets/1.png";
const div = document.getElementById("app");
div.innerHTML = `<img src='${png}'>`;

const button = document.createElement("button");
button.innerText = "懒加载";
div.appendChild(button);
button.onclick = () => {
  const promise = import("./lazy.js"); //异步
  promise.then(
    (module) => {
      const fn = module.default;
      fn();
    },
    () => {
      console.log("模块加载错误");
    }
  );
};
