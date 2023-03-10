// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const teachers = sequelizeClient.define('teachers', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    }
    nickName: {
      type: DataTypes.STRING,
      allowNull: false
    }
    text: {
      type: DataTypes.STRING,
      allowNull: false
    }
    text: {
      type: DataTypes.STRING,
      allowNull: false
    }
    text: {
      type: DataTypes.STRING,
      allowNull: false
    }
    text: {
      type: DataTypes.STRING,
      allowNull: false
    }
    text: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  teachers.associate = function (models) {
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return teachers;
};
