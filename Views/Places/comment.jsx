const React = require('react')
const Def = require('../default')

function comment_form (data) {
    return (
        <Def>
          <main>
            <h1>Add a Comment Below</h1>
        <form method="POST" action="/places/:id/comment">
       
            <div className="col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="author">Author</label>
                 <input className="form-control" id="author" name="author"/>
            </div>
            <br></br>

            <div className="col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="content">Content</label>
                <textarea className="form-control" id="content" name="content" rows="4" cols="50"></textarea>
            </div>
          <br></br>

            <div className="col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="number">Star Rating</label>
                 <input type="number" value="0" id="number" name="number" step="0.5" min="1" max="5"/>
                </div>
            <br></br>

            <div className="col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="rant">Rant</label>
                 <input type="checkbox" id="rant" name="rant" value="true"></input>
                <label for="true">True</label>
                <input type="checkbox" id="rant" name="rant" value="false"></input>
                 <label for="false">False</label>  
            </div>
            <br></br>
            <input type="submit" value="Submit"></input>
        </form>
        </main>
        </Def>
    )
}

module.exports= comment_form