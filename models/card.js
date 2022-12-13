'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Card.init({
    name: DataTypes.STRING,
    hp:DataTypes.STRING,
    image:DataTypes.STRING,
    powerOne:DataTypes.STRING,
    powerOneDamage:DataTypes.INTEGER,
    powerTwo:DataTypes.STRING,
    powerTwoDamage:DataTypes.INTEGER,
    weakness:DataTypes.INTEGER,
    resistance:DataTypes.INTEGER,
    retreat:DataTypes.INTEGER,
    category:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Card',
    tableName: 'cards',
    timestamps:false
  });
  return Card;
};