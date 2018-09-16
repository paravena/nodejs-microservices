const path = require('path');

const basePath = path.join(__dirname, '/packages');

module.exports = {
  apps : [
    // API Gateway
    {
      name      : 'Gateway',
      script    : basePath + '/gateway/server.js',
      watch: true,
      env: {
        PORT: 3001,
        SERVICE_DB_PORT: 4001,
        Q_URI: 'amqp://mzmagxyn:S7PMDKHq4TkS9gFZyNaaDGqtgwozS-pN@chimpanzee.rmq.cloudamqp.com/mzmagxyn'
      }
    },
    // DB Service
    {
      name      : 'DB Service',
      script    : basePath + '/database_service/server.js',
      watch: true,
      env: {
        PORT: 4001
      }
    },
    // Mailing Service
    {
      name      : 'Mailing Service',
      script    : basePath + '/mailing_service/index.js',
      watch: true,
      env: {
        Q_URI: 'amqp://mzmagxyn:S7PMDKHq4TkS9gFZyNaaDGqtgwozS-pN@chimpanzee.rmq.cloudamqp.com/mzmagxyn',
        MJ_API_PUBLIC: 'd4bb9c5f00a9d9e932f38fa805ec460b',
        MJ_API_SECRET: 'a79869d0c3a7d9f065531ea3c2c02c9a'
      }
    }
  ]
};
