const db = require('../models')

db.Place.create([
    {
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'Images/H-Thai-M-L logo.png'
      }, {
        name: 'Burger King',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'American, fast-food',
        pic: '/Images/Burger King.png'
      },  {
        name: 'Sarvanana Bhavan',
        city: 'NYC',
        state: 'NY',
        cuisines: 'Indian, vegetarian',
        pic: '/Images/Sarvanana Bhavan.png'
      },  {
        name: 'Veggie Grill',
        city: 'San Jose',
        state: 'CA',
        cuisines: 'American, vegan',
        pic: '/Images/Veggie Grill.png'
      }, {
        name: 'Panda Express',
        city: 'Los Angeles',
        state: 'CA',
        cuisines: 'Chinese, gourmet',
        pic: '/Images/Panda Express.png'
      }
    ]
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})

)
