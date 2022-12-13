const {Card}= require('../models')
const categories = ['Electric', 'Flying'];

module.exports.viewAll = async function(req, res, next) {
    let searchCategories = ['All'];
    for(let i = 0; i < categories.length; i++){
        searchCategories.push(categories[i]);
    }
    let cards;
    let searchCategory = req.query.category || 'All';
    let searchRandom = req.query.random || false;
    if (searchCategory === 'All'){
        cards = await Card.findAll();
    } else {
        cards = await Card.findAll({
            where: {
                category: searchCategory
            }
        });
    }
    if (cards.length > 0 && searchRandom) {
        let randomIndex = getRandomInt(cards.length);
        cards = [cards[randomIndex]];
    }
    res.render('index', {cards, categories:searchCategories, searchCategory, searchRandom});
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
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
            retreat: req.body.retreat,
            category: req.body.category
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
        category: ""
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
            retreat: req.body.retreat,
            category: req.body.category
        });
    res.redirect('/');
}
