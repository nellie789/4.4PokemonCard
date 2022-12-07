const {Card}= require('../models')

module.exports.viewAll = async function(req, res, next) {
    const cards = await Card.findAll();
    res.render('index', {cards});
}

module.exports.renderEditForm = async function(req, res, next) {
    const card = await Card.findByPk(
        req.params.id
    );
    res.render('edit', {card});
}

module.exports.updateCard = async function(req,res) {
    await Card.update(
        {
            name: req.body.name,
            hp: req.body.hp,
            image: req.body.image,
            powerOne: req.body.powerOne,
            powerOneDamage: req.body.powerOneDamage,
            powerTwo: req.body.powerTwo,
            powerTwoDamage: req.body.powerTwoDamage,
            weakness: req.body.weakness,
            resistance: req.body.resistance,
            retreat: req.body.retreat
        },
        {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/');
}

module.exports.deleteCard = async function(req,res) {
    await Card.destroy(
        {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/');
}

module.exports.renderAddForm = function(req, res){
    const card = {
        name: "",
        hp: "",
        image: "",
        powerOne: "",
        powerOneDamage: "",
        powerTwo: "",
        powerTwoDamage: "",
        weakness: "",
        resistance: "",
        retreat: "",
    };
    res.render('add', {card});
}

module.exports.addCard = async function(req, res) {
    await Card.create(
        {
            name: req.body.name,
            hp: req.body.hp,
            image: req.body.image,
            powerOne: req.body.powerOne,
            powerOneDamage: req.body.powerOneDamage,
            powerTwo: req.body.powerTwo,
            powerTwoDamage: req.body.powerTwoDamage,
            weakness: req.body.weakness,
            resistance: req.body.resistance,
            retreat: req.body.retreat
        });
    res.redirect('/');
}
