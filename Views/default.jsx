const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                {html.children}
                <div class="content"></div>
            </body>
            <br></br>
            <br></br>
            <br></br>
  <footer class="footer">
  <p>Links!:</p>
  <br></br>
<p>LinkedIn: <a href="https://www.linkedin.com/in/sriya-bhamidipati-359391219/">Link to My LinkedIn Profile</a></p>
<br></br>
<p>Uber Eats: <a href="https://www.ubereats.com/">Uber Eats(Get Tasty Food Delivered to Your Door!)</a></p>
  </footer>
        </html>
    )
}

          
  module.exports = Def
  

  