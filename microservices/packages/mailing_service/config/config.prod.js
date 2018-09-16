const { Q_URI } = process.env;

module.exports = {
  q: {
    uri: Q_URI || 'amqp://mzmagxyn:S7PMDKHq4TkS9gFZyNaaDGqtgwozS-pN@chimpanzee.rmq.cloudamqp.com/mzmagxyn'
  }
};
