// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const actives = sequelizeClient.define('actives', {
    sname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sphone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stimecard: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sface: {
      type: DataTypes.STRING,
      allowNull: true
    },
    scode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sage: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sbirthday: {
      type: DataTypes.STRING,
      allowNull: true
    },
    spoints: {
      type: DataTypes.STRING,
      allowNull: true
    },
    stutor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sstatus: {
      type: DataTypes.STRING,
      allowNull: true
    },
    scourse: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  actives.associate = function (models) {
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return actives;
};
