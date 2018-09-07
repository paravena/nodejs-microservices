const server = require('express')();

server.get('/db', (req, res) => {
  const data = [{title: 'title a', content: 'content what ever'}];
  res.send(data);
});

server.listen(4000, () => {
  console.log('Database connector running on port 4000');
});
