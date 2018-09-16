const { Q_URI, MJ_API_PUBLIC, MJ_API_SECRET } = process.env;

module.exports = {
  q: {
    uri: Q_URI || 'amqp://mzmagxyn:S7PMDKHq4TkS9gFZyNaaDGqtgwozS-pN@chimpanzee.rmq.cloudamqp.com/mzmagxyn'
  },
  mailJet: {
    apiPublic: MJ_API_PUBLIC,
    apiSecret: MJ_API_SECRET
  }
};
