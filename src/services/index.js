const admins = require('./admins/admins.service.js');
const students = require('./students/students.service.js');
const classes = require('./classes/classes.service.js');
const teachers = require('./teachers/teachers.service.js');
const subjects = require('./subjects/subjects.service.js');
const evaluateStudent = require('./evaluate-student/evaluate-student.service.js');
const teacherEvaluteStudent = require('./teacher-evalute-student/teacher-evalute-student.service.js');
const evaluteDetail = require('./evalute-detail/evalute-detail.service.js');
const commentSentence = require('./comment-sentence/comment-sentence.service.js');
const employeeInformation = require('./employee-information/employee-information.service.js');
const actives = require('./actives/actives.service.js');
const referrer = require('./referrer/referrer.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(admins);
  app.configure(students);
  app.configure(classes);
  app.configure(teachers);
  app.configure(subjects);
  app.configure(evaluateStudent);
  app.configure(teacherEvaluteStudent);
  app.configure(evaluteDetail);
  app.configure(commentSentence);
  app.configure(employeeInformation);
  app.configure(actives);
  app.configure(referrer);
};
