const admins = require('./admins/admins.service.js');
const commentsAfterClass = require('./comments-after-class/comments-after-class.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(admins);
  app.configure(commentsAfterClass);
};
