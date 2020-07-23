'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Usuario.init({
    rol: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    direccion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};