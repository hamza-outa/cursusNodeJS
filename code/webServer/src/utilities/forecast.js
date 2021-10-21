const request = require("request")
//destructured response
const forecast = (lat,long,callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=<ZET HIER U EIGEN API>&query='+encodeURIComponent(lat)+','+encodeURIComponent(long)+'&units=m'
  request({url,json:true}, (error,{body}) => {
    if(error){
      callback("unable to connect to location service",undefined)
    }
    else if(body.success === false){
      console.log("cant find location",undefined)
    }
    else{
      callback(undefined,{
        temperature:body.current.temperature,
        humidity:body.current.humidity,
        weather_descr:body.current.weather_descriptions[0],
        feellike: body.current.feelslike
      })
    }
  })

}

module.exports = forecast
