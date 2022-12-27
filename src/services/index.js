const admins = require('./admins/admins.service.js');
const students = require('./students/students.service.js');
const classes = require('./classes/classes.service.js');
const teachers = require('./teachers/teachers.service.js');
const subjects = require('./subjects/subjects.service.js');
const employeeInformation = require('./employee-information/employee-information.service.js');
const actives = require('./actives/actives.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(admins);
  app.configure(students);
  app.configure(classes);
  app.configure(teachers);
  app.configure(subjects);
  app.configure(employeeInformation);
  app.configure(actives);
};
