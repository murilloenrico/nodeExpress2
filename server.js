// server.js
const jsonServer = require('json-server');
const express = require('express');
const path = require('path');

const PORT_API = 3000;
const PORT_FRONT = 5500;

// JSON Server
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);
server.listen(PORT_API, () => {
  console.log(`🔥 JSON Server rodando em http://localhost:${PORT_API}`);
});

// Express para servir HTML
const app = express();
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/post/post.html'));
});
app.listen(PORT_FRONT, () => {
  console.log(`💻 Frontend rodando em http://localhost:${PORT_FRONT}`);
});
