// const square = function (x) {
//   return x * x
// }

//functie strcutuur met pijl    func naam = inputs => {function body}
//lieft niet bedoeld voor member functions want ge kunt this niet gebruiken
// const square = (x) => {
//   return x * x
// }

//dezelfde structuur maar zonder return, die return nu impliciet wat er staat
//werkt enkel als u functie gewoon iets moet returen zoals, een simpele calculatie
//const square = (x) => x * x

//console.log(square(69))
//------------------------------------------------------------------------------------------------
//SECOND EXAMPLE

const event = {   //dit is een object
  name: "lola palooza",
  guestList: ["jim","tim","rob"],
  printGuestList() {
    console.log("guest list for " + this.name)
    this.guestList.forEach((item) => {
      console.log(item + " is attending " + this.name)
    })


  }
}

event.printGuestList()
