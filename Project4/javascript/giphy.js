const init = () => {
  const searchField = document.querySelector("#search")
  document.querySelector("#searchButton")
          .addEventListener("click", () => { getGifs(searchField.value) });
  document.querySelector("#clearButton")
          .addEventListener("click", clearGifs);
}
const getGifs = (search) => {
  fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&limit=10&api_key=A2PKUQxvxJOQem57vfimCfD4aqrYA6s8`)
    .then(function(results) {
      return results.json();
    }).then(function(resulsJSON) {
      console.log();
      const resultsDiv = document.querySelector("#results-div");
      resultsDiv.innerHTML = "";
      resulsJSON.data.map((result) => {
        const resultDiv = document.createElement("div");
        resultDiv.setAttribute("id", "result-div");
        resultDiv.setAttribute("class", "col-sm-4 mt-3");
        const gif = document.createElement("IMG");
        gif.setAttribute("src", `https://media.giphy.com/media/${result.id}/giphy.gif`);
        gif.setAttribute("width", "100%");
        resultsDiv.appendChild(resultDiv);
        resultDiv.appendChild(gif);
      })
    }).catch(function(err) {
      console.log("There was an error finding that." + err);
    });
}

const clearGifs = () => {
  const resultsDiv = document.querySelector("#results-div");
  resultsDiv.innerHTML = "";
}

window.onload = init;