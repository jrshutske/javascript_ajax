let div;
const init = () => {
  div = document.createElement("div");
  document.body.appendChild(div);
  document.querySelector("#submitButton")
          .addEventListener("click", getLatLng);
}

const getLatLng = () => {
  let postalcode = document.querySelector("#postalcode").value;
  let xhr = new XMLHttpRequest();
  let url = `http://api.geonames.org/postalCodeSearchJSON?username=jackshutske&country=US&postalcode=${postalcode}`;
  xhr.open("get", url);
  xhr.onreadystatechange = () => {
    if(xhr.readyState == 4) {
      postalCodeJSON = JSON.parse(xhr.responseText);
      if (postalCodeJSON.postalCodes.length != 1) {
        div.innerHTML = "Enter a valid postal code."
      }
      else {
        let lng = postalCodeJSON.postalCodes[0].lng
        let lat = postalCodeJSON.postalCodes[0].lat
        let city = postalCodeJSON.postalCodes[0].placeName
        getWeather(lng, lat, city)
      }
    }
  }
  xhr.send(null);
}

const getWeather = (lng, lat, placeName) => {
  let xhr = new XMLHttpRequest();
  let url = `http://api.geonames.org/findNearByWeatherJSON?username=jackshutske&lat=${lat}&lng=${lng}`;
  xhr.open("get", url);
  xhr.onreadystatechange = () => {
    if(xhr.readyState == 4) {
      div.innerHTML = "";
      weatherJSON = JSON.parse(xhr.responseText);
      let tempC = weatherJSON.weatherObservation.temperature;
      let tempF = (tempC*1.8)+32;
      let windSpeed = weatherJSON.weatherObservation.windSpeed;
      let br = document.createElement("BR");
      let city = document.createElement("h1");
      let temp = document.createElement("h1");
      let wind = document.createElement("h1");
      let citytext = document.createTextNode(placeName);
      let temptext = document.createTextNode(tempF + "° Fahrenheit");
      let windtext = document.createTextNode(windSpeed + " mph Wind");
      city.appendChild(citytext);
      temp.appendChild(temptext);
      wind.appendChild(windtext);
      div.appendChild(city);
      tempElement = div.appendChild(temp);
      windElement = div.appendChild(wind);
      let windimg = document.createElement("IMG");
          windimg.setAttribute("src", "../images/wind.png");
          windimg.setAttribute("width", "200");
          windimg.setAttribute("height", "200");
          windimg.setAttribute("alt", "Wind Icon");
      let coldimg = document.createElement("IMG");
          coldimg.setAttribute("src", "../images/cold.png");
          coldimg.setAttribute("width", "200");
          coldimg.setAttribute("height", "200");
          coldimg.setAttribute("alt", "Cold Icon");
      let hotimg = document.createElement("IMG");
          hotimg.setAttribute("src", "../images/hot.png");
          hotimg.setAttribute("width", "200");
          hotimg.setAttribute("height", "200");
          hotimg.setAttribute("alt", "Hot Icon");
      if (windSpeed > 15) {windElement.appendChild(windimg)}
      if (tempF <= 34) {tempElement.appendChild(coldimg)}
      if (tempF >= 83) {tempElement.appendChild(hotimg)}

    }
  }
  xhr.send(null);
}

window.onload = init;
