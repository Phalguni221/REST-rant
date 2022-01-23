const require = require('mongoose')
const router = Router.config()
router.get('/:id', (req, res) => {
    res.render('places/show')
  })