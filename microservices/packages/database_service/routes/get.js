module.exports = server => {
  server.get('/', (_, res) => {
    res.send('Hello from the database');
  });
};
