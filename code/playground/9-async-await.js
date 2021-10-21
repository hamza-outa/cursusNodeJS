const add = (a,b) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if(a < 0 || b < 0){
         return reject("numbers most be non negative")
      }
      resolve(a+b)
    }, 2000)
  })
}


const doWork = async () => {
  const sum = await add(1,2)
  const sum2 = await add(sum,8)
  const sum3 = await add(sum,12)
  return sum3
}
//async return altijd een promise
doWork().then((value) => {
  console.log(value)
}).catch((e) => {
  console.log(e)
})
