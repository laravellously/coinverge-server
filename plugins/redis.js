'use strict'

const fp = require('fastify-plugin')
module.exports = fp(async function (fastify, opts) {
  fastify.register(require('fastify-redis'))
})

// const Redis = require('fastify-redis')

// module.exports = fp(async (fastify, opts) => {
//     // Full options documentation here https://github.com/luin/ioredis/blob/master/API.md#Redis

//     let redisOpts = Object.assign({}, {
//         options: {
//             host: process.env.REDIS_HOST || '127.0.0.1',
//             port: process.env.REDIS_PORT || '6379',
//             // password: process.env.REDIS_PASSWORD || '',
//             // db: process.env.REDIS_DB || {{ redis_db }}
//             connectTimeout: 500,
//             maxRetriesPerRequest: 1
//     }
//   }, opts.redis)

// fastify.register(Redis, redisOpts)
// })
