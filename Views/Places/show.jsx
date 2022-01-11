const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="/css/style.css"/>
            </head>
          <main>
            <h1>{data.place.name}</h1>
            <h2>Restaurant Rating</h2>
            <p>Currently Unrated</p>
               <img src={data.place.pic} alt={data.place.name} />
                  <h3>
                Located in {data.place.city}, {data.place.state}
                  </h3>
              <h2>
          Description
        </h2>
        <h3>
          {data.place.showEstablished()}
        </h3>
        <h4>
          Serving {data.place.cuisines}
        </h4>
            <h3>Comment Section</h3>
            <p>No comments today!</p>
             <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
              Edit
            </a>  
      
                <form method="POST" action={`places/${data.id}?_method=DELETE`}> 
                 <button type="submit" className="btn btn-danger">
                     Delete
                </button>
                </form>           
          </main>

        </Def>
    )
}

module.exports = show
