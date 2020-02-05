const { Sequelize } = require('sequelize');
const path = require('path');
const fs = require('fs');


let db = {};


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../db'
  });