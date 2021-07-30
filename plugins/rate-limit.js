'use strict'

const fp = require('fastify-plugin')
// the use of fastify-plugin is required to be able
// to export the decorators to the outer scope

module.exports = fp(async function (fastify, opts) {
    fastify.register(require('fastify-rate-limit'), {
        // global: false, // default true
        // max: 3, // default 1000
        // ban: 2, // default null
        timeWindow: 1000 * 60, // default 1000 * 60
        cache: 10000, // default 5000
        allowList: ['127.0.0.1'], // default []
        redis: fastify.redis, //new Redis({ host: '127.0.0.1' }), // default null
        // skipOnError: true, // default false
        // keyGenerator: function (req) { /* ... */ }, // default (req) => req.raw.ip
        // errorResponseBuilder: function (req, context) { /* ... */ },
        // enableDraftSpec: true, // default false. Uses IEFT draft header standard
        // addHeadersOnExceeding: { // default show all the response headers when rate limit is not reached
        //     'x-ratelimit-limit': true,
        //     'x-ratelimit-remaining': true,
        //     'x-ratelimit-reset': true
        // },
        // addHeaders: { // default show all the response headers when rate limit is reached
        //     'x-ratelimit-limit': true,
        //     'x-ratelimit-remaining': true,
        //     'x-ratelimit-reset': true,
        //     'retry-after': true
        // }
    })
})
