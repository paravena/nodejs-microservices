const mongoose = require('mongoose');

module.exports = config => {
  mongoose.Promise = global.Promise;
  mongoose.connect(config.mongoURI);
  console.log(mongoose.connection);
}
