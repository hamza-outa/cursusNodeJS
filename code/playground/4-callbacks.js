//van de callback les
/*
const geocode = (address,callback) => {
  setTimeout( () => {
    const data = {
      latitude: 0,
      longitude: 0
    }
    callback(data)
  },2000 )

}


// geocode("jimtown", (data) => {
//   console.log(data)
// })

const add = (x,y,callback) => {
  setTimeout( () => {
    callback(x+y)
  },2000)
}

add(1,4,(som) => {
  console.log(som)
})
*/

const doWorkCallback = (callback) => {
    setTimeout(() => {
      //callback("this is my error")
      callback(undefined,[45,123,8])
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
      return console.log(error)
    }

    console.log(result)

})
