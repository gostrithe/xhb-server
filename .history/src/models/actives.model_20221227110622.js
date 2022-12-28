// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const actives = sequelizeClient.define('actives', {
    sname: {
      type: DataTypes.STRING,
      allowNull: ture
    },
    sphone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stimecard: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sface: {
      type: DataTypes.STRING,
    },
    scode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sage: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sbirthday: {
      type: DataTypes.STRING,
    },
    spoints: {
      type: DataTypes.STRING,
    },
    stutor: {
      type: DataTypes.STRING,
    },
    sstatus: {
      type: DataTypes.STRING,
    },
    scourse: {
      type: DataTypes.STRING,
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
