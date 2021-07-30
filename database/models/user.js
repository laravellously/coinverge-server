'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    token: DataTypes.STRING,
    email_verified_at: DataTypes.DATE,
    kyc_verified_at: DataTypes.DATE
  }, {
    sequelize,
    // tableName: 'users',
    modelName: 'User',
    // underscored: true,
  });
  return User;
};