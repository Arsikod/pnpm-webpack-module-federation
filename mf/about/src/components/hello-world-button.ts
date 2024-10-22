import classes from "./hello-world-button.module.css";

export class HelloWorldButton {
  buttonCssClass = classes.button;
  render() {
    const button = document.createElement("button");

    button.classList.add(this.buttonCssClass);
    button.innerHTML = "Hello World!!";
    button.onclick = function () {
      const p = document.createElement("p");
      p.innerHTML = "Hello World";
      p.style.color = "red";
      document.body.appendChild(p);
    };
    document.body.appendChild(button);
  }
}

export default HelloWorldButton;
