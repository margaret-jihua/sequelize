const db = require('./models')

// db.user.findOrCreate({
//     where: {firstName: 'Manta'},
//     defaults: {
//         lastName: 'Huang',
//         age: 21,
//         email: 'mars@foxmail.com'
//     }
// })
// .then(([user, created]) => {
//     console.log(created);
//     console.log(user.get());
// })

// db.user.findAll()
// .then(users => {
//     users.forEach(user => {
//         console.log(user.get());
//     })
// })

// db.user.findOne({
//     where: {firstName: 'Bob'}
// })
// .then(user => {
//     user.createPet({
//         name: 'Kiki',
//         description: 'a cute little pomeranian'
//     })
//     .then(pet => {
//         console.log(`Create the following pet: ${pet.name}`);
//     })
// })

// db.user.findOne({
//     where: {firstName: 'Bob'}
// })
// .then(foundUser => {
//     console.log(`I found ${foundUser.firstName}`);
//     foundUser.getPets().then(usersPets => {
//         usersPets.forEach(pet => {
//             console.log(pet.get());
//         })
//     })
// })

db.user.findAll({
    include:[db.pet]
})
.then(users => {
    users.forEach(user => {
        console.log(`${user.firstName}'s Pets`);
        user.pets.forEach(pet => {
            console.log(pet.name);
        })
        console.log('-----------');
    })
})