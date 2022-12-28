// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const evaluteDetail = sequelizeClient.define('evalute_detail', {
    classRecordStudentId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    evaluateContent: {
      type: DataTypes.STRING,
      allowNull: true
    },
    evaluateMedias: {
      type: DataTypes.STRING,
      allowNull: true
    },
    evaluateOt: {
      type: DataTypes.STRING,
      allowNull: true
    },
    evaluateUserAvatar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    evaluateUserName: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  evaluteDetail.associate = function (models) {
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return evaluteDetail;
};
