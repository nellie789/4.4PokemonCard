const {Card}= require('../models')

module.exports.viewAll = async function(req, res, next) {
    const cards = await Card.findAll();
    res.render('index', {cards});
}

// module.exports.viewAll = function(req, res, next) {
//     const cards = [{
//         id: 1,
//         name: 'Pikachu',
//         hp: '50 HP',
//         image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/09/Pokemon-Pikachu-18-different-types-fan-art.jpg',
//         powerOne: 'Gnaw',
//         powerOneDamage: 10,
//         powerTwo: 'Lightning Bolt',
//         powerTwoDamage: 50,
//         weakness: 1,
//         resistance: 1,
//         retreat: 2
//     },
//         {
//             id: 2,
//             name: 'Shinx',
//             hp: '60 HP',
//             image: 'http://pm1.narvii.com/6457/b9a93881c381821d49076e86b0040e06ba19d9fb_00.jpg',
//             powerOne: 'Rear Kick',
//             powerOneDamage: 20,
//             powerTwo: 'Static Shock',
//             powerTwoDamage: 30,
//             weakness: 1,
//             resistance: 2,
//             retreat: 1
//         }];
//     res.render('index', {cards});
// }