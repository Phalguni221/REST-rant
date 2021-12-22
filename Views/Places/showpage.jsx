const React = require('react')
const Def = require('./default')
const app = express()

function showPage () {
    return (
      <Def>
          <main>
              <h1>PLACES SHOW PAGE</h1>
              <p>Details for one page</p>
          </main>
      </Def>
  )
  }
module.exports = index