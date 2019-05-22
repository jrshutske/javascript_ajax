const init = () => {
  ajaxRequest("get","allTasks.php", loadTasks, undefined, "XML");
}
const loadTasks = (response) => {
  let tasks = response.getElementsByTagName("tasks")[0].childNodes;
  let tasklist = document.createElement("ul");
  tasklist.setAttribute("id", "tasklist");
  tasklist.setAttribute("class", "list-group col-md-3");
  tasks.forEach((task) => {
    let id = task.childNodes[0].textContent;
    let description = task.childNodes[1].textContent;
    let item = document.createElement("li");
    item.setAttribute("class", "list-group-item bg-secondary mt-3");
    item.setAttribute("data-task-id", id);
    item.innerHTML = description;
    let icon = document.createElement("i");
    icon.setAttribute("class","fa fa-trash fa-2x text-dark float-right");
    icon.addEventListener("click", removeTask);
    item.appendChild(icon);
    tasklist.appendChild(item);
  });
  let taskdiv = document.getElementById("taskdiv");
  taskdiv.appendChild(tasklist);
}

const addTask = () => {
  let input = document.getElementById("description").value;
  let params = `description=${input}`
  ajaxRequest("post","addTask.php", tasklistReload, params);
}

const removeTask = e => {
  let btn = e.currentTarget;
  let li = btn.parentNode;
  let idToRemove = li.getAttribute("data-task-id");
  let params = `id=${idToRemove}`
  ajaxRequest("post","deleteTask.php", tasklistReload, params);
}

const tasklistReload = () => {
  document.getElementById("tasklist").remove();
  init();
}

const ajaxRequest = (method, url, callback, params, responseType) => {
  let xhr = new XMLHttpRequest();
  if(params && method == "get") {
    url += `?${params}`
  }
  xhr.open(method, url);
  xhr.onreadystatechange = () => {
    if(xhr.readyState == 4) {
      if(responseType == "JSON") {
        callback(JSON.parse(xhr.responseText));
      } else if(responseType == "XML") {
        callback(xhr.responseXML);
      } else {
        callback(xhr.responseText);
      }
    }
  }
  if(method == "post") {
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    xhr.send(params);
  } else {
    xhr.send(null);
  }
}

window.onload = init();
