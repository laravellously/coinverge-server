'use strict'

const fp = require('fastify-plugin')

/**
 * This plugins adds some utilities to handle authentication
 *
 * @see https://github.com/fastify/fastify-secure-session
 */
module.exports = fp(async function (fastify, opts) {
    fastify.register(require('sequelize-fastify'),
    {
        instance: 'db',
        sequelizeOptions: {
            database: 'zugapro',
            dialect: 'postgresql',
            host: '127.0.0.1',
            username: 'postgres',
            password: '',
            port: 5432,
            dialectOptions: {
                encrypt: false,
                trustedConnection: true,
                requestTimeout: 30000 // 30 seconds
            }
        }
    })
    // fastify.register(require('fastify-cookie'))
    fastify.register(require('fastify-secure-session'), {
        secret: 'averylogphrasebiggerthanthirtytwochars',
        salt: 'mq9hDxBVDbspDR6n',
        cookieName: 'fastify-session',
        cookie: {
            signed: true,
            secure: 'auto',
            expires: 60 * 60 * 24 * 7,
            domain: 'http://127.0.0.1',
            path: '/'
            // sameSite: 'lax'
            // options for setCookie, see https://github.com/fastify/fastify-cookie
        }
    })
    fastify.register(require('fastify-csrf'), { sessionPlugin: 'fastify-secure-session' })
    // Add hook to protect every POST,PUT,PATCH,DELETE request
    fastify.addHook('onRequest', (request, reply, done) => {
        const requestArray = ['POST','PUT','PATCH','DELETE'];
        if (requestArray.includes(request.method)) fastify.csrfProtection(request, reply, done)
        done()
    })
})
