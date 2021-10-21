const path = require("path")
const express = require("express")
const hbs = require("hbs")
const geocode = require('./utilities/geocode')
const forecast = require('./utilities/forecast')

//MAG NIET VANAF SRC FOLDER STARTEN RUN --> nodemon src/app.js
//of ge moet de views folder in src steken

const app = express()
const port = process.env.PORT || 3000

//define paths for express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,"../templates/views")
const partialsPath = path.join(__dirname,"../templates/partials")

//setup for handlebars engine and views location
app.set("view engine","hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get("",(req,res) => {
    res.render("index", {
      title: "weather",
      name: "hamza"
    })
})

app.get("/about", (req,res) => {
  res.render("about",{
    title: "about",
    name:"hamza"
  })
})

app.get("/help", (req,res) => {
  res.render("help",{
    title: "help",
    name:"hamza"
  })
})

app.get("/weather", (req,res) => {
    if (!req.query.address) {
      return res.send({
        error:"you must provide an address"
      })
    }

    geocode(req.query.address, (error, {latitude,longitude,location} = {}) => {

      if (error) {
        return res.send({error})
      }

      forecast( latitude,longitude, (error, foreCastData) => {
        if (error) {
          return res.send({ error })
        }
        res.send({
          location: location,
          forecast: foreCastData
        })
      })
    })

})

app.get("/products", (req,res) => {
    if (!req.query.search) {
      return res.send({ error })
    }
    console.log(req.query.search)
    res.send({
      products: []
    })

})

app.get('/help/*', (req,res) => {

  res.render("error404",{
    page:"help article ",
    name: "hamza",
    pgName: "error"
  })
})


app.get("*",(req,res) => {
  res.render("error404",{
    page:"",
    name: "hamza",
    pgName: "error"
  })
})


app.listen(port, () => {
    console.log("server is up on port " + port)
})
