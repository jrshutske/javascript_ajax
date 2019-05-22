  const init = () => {
    let form = document.createElement("form");
    let formGroup = document.createElement("div");
    let usernameInput = document.createElement("input");
    let clickButton = document.createElement("button");

    document.body.appendChild(form);
    form.appendChild(formGroup);
    formGroup.appendChild(usernameInput);
    formGroup.appendChild(clickButton);
    
    formGroup.setAttribute("class", "form-group");
    usernameInput.setAttribute("class", "form-control");
    usernameInput.setAttribute("type", "text");
    usernameInput.setAttribute("id", "username");
    clickButton.setAttribute("type", "button");
    clickButton.innerHTML = "click me";
  }