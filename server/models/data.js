'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Data.belongsTo(models.Sidang)
    }
  }
  Data.init({
    name: DataTypes.STRING,
    SidangId: DataTypes.INTEGER,
    birthDate: DataTypes.DATE,
    birthPlace: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Data',
  });
  return Data;
};