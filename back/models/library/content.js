const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Content extends Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: DataTypes.STRING(30),
          arrowNull: false, // 필수
        },
        likes: {
          type: DataTypes.INTEGER,
          arrowNull: false, // 필수
        },
        content: {
          type: DataTypes.TEXT,
          arrowNull: false, // 필수
        },
      },
      {
        modelName: 'Content',
        tableName: 'contents',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      }
    );
  }

  static associate(db) {}
};
