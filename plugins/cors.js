'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
  fastify.register(require('fastify-cors'), {
    credentials: true,
    allowedHeaders: ["Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin, Cache-Control, X-CSRF-TOKEN, Authorization"],
    exposedHeaders: ["X-CSRF-TOKEN"]
    // origin: '*',
    // methods: ["GET","HEAD","PUT","PATCH","POST","DELETE"],
    // preflightContinue: true,
    // optionsSuccessStatus: 201
  })
  // fastify.register(require('fastify-cors'), (instance) => async (req, callback) => {
  //   let corsOptions = {
  //     credentials: true,
  //     allowedHeaders: ["Origin, X-Requested-With, Content-Type, Accept, x-csrf-token, Authorization"],
  //     origin: '*',
  //     methods: ["GET","HEAD","PUT","PATCH","POST","DELETE"],
  //     preflightContinue: true,
  //     optionsSuccessStatus: 201
  //   }
  //   // do not include CORS headers for requests from localhost
  //   let originHostname = req.headers.origin || req.ip || '';
  //   if (/(localhost|ngrok|127.0.0.1)/g.test(originHostname)) {
  //     corsOptions.origin = true
  //   } else {
  //     corsOptions.origin = false
  //   }
  //   callback(null, corsOptions) // callback expects two parameters: error and options
  // })

// fix for CORS error
  fastify.addHook('onSend', (request, reply, payload, next) => {
    reply.header("Access-Control-Allow-Origin", ["http://127.0.0.1:8088"]);
    // reply.header("Access-Control-Max-Age", 86400);
    // reply.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin, Cache-Control, Authorization");
    next()
  })

})
