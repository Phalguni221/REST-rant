const React = require('react')
const Def = require('./default')

    function home () {
        return (
          <Def>
              <main>
                  <head>
                       <h1>HOME</h1>
                  </head>
            <div>
    <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Walnut Salad"/>
            </div>
            <div>
        Photo by <a href="https://unsplash.com/@shootdelicious">Eiliv-Sonas Aceron</a> on <a href="https://unsplash.com/s/photos/free">Unsplash</a>
      </div>
              <a href="/places">
  <button className="btn-primary">Places Page</button>
              </a>
              </main>
          </Def>
        )
    }

module.exports = home