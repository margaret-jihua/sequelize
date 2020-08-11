const db = require('./models')

// db.user.create({
//     firstName: 'Emily',
//     lastName: 'Lee',
//     age: 5
// }).then(function(data) {
//     console.log(data);
// })

// db.user.findOne({
//     where: {id: 1}
// }).then(user => {
//     console.log('=========1==========');
//     console.log(user.dataValues);
// })

// db.user.findOne({
//     where: {firstName: 'Mars'}
// }).then(user => {
//     console.log('=========2==========');
//     console.log(user.dataValues);
// })

// db.user.findOne({
//     where: {age: 5}
// }).then(user => {
//     console.log('=========3==========');
//     console.log(user.dataValues);
// })


// db.user.findOrCreate({
//     where:{
//         firstName: 'Bob',
//         lastName: 'Sep'
//     },
//     defaults: {age: 45}
// }).then(([user, created]) => {
//     console.log(`This was created on ${created}`);
//     console.log(user.dataValues);
// })

// let queryOne = {
//     where: {
//         firstName: 'Bobby',
//         lastName: 'Sep'
//     },
//     defaults:{age:43}
// }

// db.user.findOrCreate(queryOne)
// .then(([user, created]) => {
//     console.log(user.dataValues);
// })

db.user.findAll().then((users) => {
    users.forEach(e => {
        console.log(e.dataValues.firstName);
    })
})
