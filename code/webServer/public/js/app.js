//https://hamza-outa-weatherapp.herokuapp.com/ | https://git.heroku.com/hamza-outa-weatherapp.git
//git push -u heroku master
//git add .
//git push -u origin HEAD:main

function getForecast(location, callback){
  fetch("/weather?address="+encodeURIComponent(location)+"").then( (response) => {
    response.json().then( (data) => {
      if (data.error) {
        console.log(data.error)
        callback(data)
      }
      else{
        console.log(data)
        callback(data)
      }
    })
  })
}

/*
fetch("http://localhost:3000/weather?address=harare").then( (response) => {
  response.json().then( (data) => {
    if (data.error) {
      console.log(data.error)
    }
    else{
      console.log(data)
    }
  })

})
*/
const weatherForm = document.querySelector("form")
const search = document.querySelector("input")
const messageOne = document.querySelector("#message-1")
const messageTwo = document.querySelector("#message-2")


weatherForm.addEventListener("submit" , (e) => {
    e.preventDefault()
    const location = search.value
    messageOne.textContent = "loading..."
    messageTwo.textContent = " "
    getForecast(location, (data) => {
      if (data.error) {
        messageOne.textContent = "error cant find location"
      }
      messageOne.textContent = "in " + data.location + " the weather is:"
      messageTwo.textContent = data.forecast.weather_descr + " with a temperature of " + data.forecast.temperature + "°C (realfeel " + data.forecast.feellike + "°C) and humidity of " + data.forecast.humidity + "%"
    })


})
