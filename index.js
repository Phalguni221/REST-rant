//Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()

//Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//Controllers and Routes
app.use('/places', require('./controllers/places'))


// app.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-thai-ml-tables.png'
  }, {
      name: 'Coding Cat Cafe',
      city: 'Phoenix',
      state: 'AZ',
      cuisines: 'Coffee, Bakery',
      pic: '/images/coffee-cat.jpg'
  }]
//   res.render('../index', { places })
// })

app.get('/', (req, res) => {
  res.render('home')
})


app.get('*', (req, res) => {
  res.render('error404')
})

app.get('/places', (req, res) => {
  res.render('places')
})

//Listen for Connections
app.listen(process.env.PORT)