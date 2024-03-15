const Sequelize = require('sequelize');

const content = require('./library/content');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Content = content;

Object.keys(db).forEach((modelName) => {
  db[modelName].init(sequelize);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
