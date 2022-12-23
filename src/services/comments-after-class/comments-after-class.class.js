const { Service } = require('feathers-mongodb');

exports.CommentsAfterClass = class CommentsAfterClass extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('comments-after-class');
    });
  }
};
