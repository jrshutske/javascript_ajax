  const init = () => {
    let dotbtn1 = document.querySelector("#dotNotation1");
    let dotbtn2 = document.querySelector("#dotNotation2");
    let dotbtn3 = document.querySelector("#dotNotation3");
    dotbtn1.onclick = dotNotationEventHandler;
    dotbtn2.onclick = dotNotationEventHandler;
    dotbtn3.onclick = dotNotationEventHandler;

    let listenbtn1 = document.querySelector("#eventListener1")
                             .addEventListener("click", w3c);
    let listenbtn2 = document.querySelector("#eventListener2")
                             .addEventListener("click", w3c);
    let listenbtn3 = document.querySelector("#eventListener3")
                             .addEventListener("click", w3c);
  }
  const inlineEvent = control => {
    console.log(control.getAttribute("color"));
  }
  const dotNotationEventHandler = event => {
    console.log(event.currentTarget.getAttribute("rating"));
  }
  const w3c = event => {
    console.log(event.currentTarget.getAttribute("height"));
  }
