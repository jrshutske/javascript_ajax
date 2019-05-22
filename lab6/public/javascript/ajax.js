const init = () => {
  let helloButton = document.querySelector("#helloButton");
  helloButton.addEventListener("click", doSomething);

}

const doSomething = event => {
  let xhr = new XMLHttpRequest();
  let url = "hello";
  xhr.open("get", url);
  xhr.onreadystatechange = () => {
    if(xhr.readyState == 4) {
      helloWorld = xhr.responseText;
      let heading = document.createElement("h1");
      heading.innerHTML = helloWorld;
      document.body.appendChild(heading);
    }
  }
  xhr.send(null);
}

window.onload = init;
