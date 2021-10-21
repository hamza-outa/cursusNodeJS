const geocode = require('./utilities/geocode')
const forecast = require('./utilities/forecast')
const url = "http://api.weatherstack.com/current?access_key=<ZET U EIGEN API KEY HIER>&query=37.8267,-122.4233&units=m"

/*

geocode("madrid", (error, data) => {
  console.log('error: ', error)
  console.log("data ", data)
})


//eerst lat dan long
forecast( 44.1545,-75.7088, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})
*/

const input = process.argv[2]

if(input === undefined){
  console.log("argument needed: address")
  process.exit()
}

//callback chaining
geocode(input, (error, {latitude,longitude,location} = {}) => {

  if (error) {
    return console.log(error)
  }

  forecast( latitude,longitude, (error, foreCastData) => {
    if (error) {
      return console.log(error)
    }
    console.log(location)
    console.log(foreCastData)
  })
})
