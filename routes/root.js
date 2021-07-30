'use strict'

const newsController = require('../controllers/client/NewsController');

// const { sequelize } = require("../database/models");

module.exports = async function (fastify, opts) {
  fastify.post('/', async function (req, reply) {
    reply.send({ hello: 'world' });
  })

  fastify.get('/chat', { websocket: true }, (connection /* SocketStream */, req /* FastifyRequest */) => {
    connection.socket.on('message', message => {
      // message === 'hi from client'
      connection.socket.send('hello from the other side')
    })
  })
  
  fastify.get('/news', newsController.fetch);
  fastify.post('/news', newsController.create);
}