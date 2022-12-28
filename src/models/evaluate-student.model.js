// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const evaluateStudent = sequelizeClient.define('evaluate_student', {
    className: {
      type: DataTypes.STRING,
      allowNull: true
    },
    classRecordId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    courseListDesc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    classOtDesc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    teachersDesc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    totalEvaluateCount: {
      type: DataTypes.STRING,
      allowNull: true
    },
    totalNeedEvaluateCount: {
      type: DataTypes.STRING,
      allowNull: true
    },
    weekDesc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    classTimeDesc: {
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
  evaluateStudent.associate = function (models) {
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return evaluateStudent;
};
