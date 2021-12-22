const React = require('react')
const Def = require('../default')
const app = express()

function index () {
    let placesFormatted = data.places.map((place) => {
      return (
        <Def>
          <h2>{place.name}</h2>
          <img src={place.pic} alt={place.name}></img>
        </Def>
      )
    })
    return (
      <Def>
          <main>
              <h1>PLACES INDEX PAGE</h1>
              {placesFormatted}
          </main>
      </Def>
  )
  }
module.exports = index