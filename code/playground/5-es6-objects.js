//object property shorthand
const name = "jimbob"
const userAge = 69

const user = {
  name,
  age:userAge,
  location: "somalia"
}

console.log(user)


//object destructuring
const product = {
  label: "banana",
  price:"0.78",
  stock:"45",
  salePrice: undefined
}

// const label = product.label
// const stock = product.stock

const {label:newName,stock} = product
console.log(newName + " " + stock)//kan de waarde niet veranderen dit zijn constanten

const func = (type, {label,stock}) => {
  console.log(type,label,stock)
}
func("order",product)
