//  /Users/ouham/mongodb/bin/mongod.exe --dbpath=/Users/ouham/mongodb_data
const mongoose = require("mongoose")


mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})


/*
const me = new User({
  name: "hernandez",
  email: "nookie@limBizz.com",
  password: "slimjim"

})


me.save().then((me) => {
  console.log(me)
}).catch((error) => {
  console.log("error: ", error)
})
*/
