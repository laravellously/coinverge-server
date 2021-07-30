'use strict'

const fp = require('fastify-plugin')

// Websockets
module.exports = fp(async function (fastify, opts) {
    fastify.register(require('fastify-websocket'), {
        errorHandler: function (error, conn /* SocketStream */, req /* FastifyRequest */, reply /* FastifyReply */) {
            // Do stuff
            reply.badRequest(error)
            // destroy/close connection
            conn.destroy(error)
        },
        options: {
            maxPayload: 1048576, // we set the maximum allowed messages size to 1 MiB (1024 bytes * 1024 bytes)
            // Verify that the client is logged in
            // verifyClient: function (info, next) {
            //   if (info.req.headers['x-client-header'] !== 'fastify') {
            //     return next(false) // the connection is not allowed
            //   }
            //   next(true) // the connection is allowed
            // }
        }
    })
})