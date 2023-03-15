(() => {
  class btn {
    constructor(text, func) {
      this.func = func;
      this.btn = document.createElement("button");
      this.btn.innerText = text;
      this.btn.addEventListener("click", func);
      this.btn.style.cssTest = "";
    };
    set text(text) {
      this.btn.innerText = text;
    };
    set func(newFunc) {
      this.btn.removeEventListener("click", func);
      this.btn.addEventListener("click", newFunc);
      this.func = newFunc;
    };
  };
  
  const box = document.createElement("div");
  box.style.cssText = "position:absolute; right:0; bottom:0; background-color:black; width:50px; z-index:1000;";
  
  const exit = () => {
    box.remove();
  };
  
  box.append(new btn("exit", exit));
  document.body.append(box);
})()
