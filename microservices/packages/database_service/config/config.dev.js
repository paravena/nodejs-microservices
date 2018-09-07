const { PORT } = process.env;

module.exports = {
  port: PORT || 4000,
  mongoURI: 'mongodb://db_user:pablo123@ds123919.mlab.com:23919/microservice_db'
};
