'use strict'

const userController = require('../controllers/client/UserController');

module.exports = async function (fastify, opts) {

  fastify.post('/register', userController.register);
  fastify.post('/login', userController.login);
  fastify.post('/logout', userController.logout);
  fastify.get('/profile', userController.profile);

  // Send secure CSRF token
  fastify.get('/getcsrftoken', async function(req, reply) {
    const token = await reply.generateCsrf()
    await req.session.set('X-CSRF-TOKEN', { token: token })
    // console.log(req.session.get('X-CSRF-TOKEN'));
    reply.send({ token: token });
  })
}