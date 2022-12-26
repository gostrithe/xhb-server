// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const subjects = sequelizeClient.define('subjects', {
    subject: {
      type: DataTypes.STRING,
      allowNull: true
    },
    type:{
      type: DataTypes.STRING,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deductedLessonTime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    presentExp: {
      type: DataTypes.STRING,
      allowNull: false
    },
    remark: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  subjects.associate = function (models) {
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return subjects;
};
