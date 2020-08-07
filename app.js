const db = require('./models')

db.user.create({
    firstName: 'Mars',
    lastName: 'Lee',
    age: 17
})
// }).then(function(data) {

// })