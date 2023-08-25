const Sequelize = require('sequelize');

const sequelize = new Sequelize('booking-app', 'root', 'Razi@9702032235', {
    dialect: 'mysql', 
    host: 'localhost'})

    module.exports = sequelize;