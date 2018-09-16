const mongoose = require('mongoose');
const Mail = mongoose.model('Mail');

const mailHandler = async ({ body : { subject, receiver, content } }, res) => {
  let mail;
  let error;

  if (!subject || !receiver || !content) {
    return res.sendStatus(400).send({
      message: 'You forgot some important keys',
      service: 'Database Service',
      status: 400,
      payload: null
    });
  }

  mail = new Mail({
    subject,
    receiver,
    content
  });

  try {
    mail = await mail.save();
  } catch (err) {
    error = err;
  }

  res.send({
    message: 'Got response from DB',
    service: 'Database Service',
    status: 201,
    payload: mail || error
  })
};

module.exports = server => {
  server
  .post('/mails', mailHandler);
};
