// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const teacherEvaluteStudent = sequelizeClient.define('teacher_evalute_student', {
    studentName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    classRecordId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    evaluateReadCount: {
      type: DataTypes.STRING,
      allowNull: true
    },
    studentCheckStatusDesc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    evaluateCount: {
      type: DataTypes.STRING,
      allowNull: true
    },
    classRecordStudentId: {
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
  teacherEvaluteStudent.associate = function (models) {
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return teacherEvaluteStudent;
};
