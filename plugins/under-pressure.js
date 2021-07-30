'use strict'

const fp = require('fastify-plugin')
// the use of fastify-plugin is required to be able
// to export the decorators to the outer scope

module.exports = fp(async function (fastify, opts) {
    fastify.register(require('under-pressure'), {
        maxEventLoopDelay: 1000,
        maxHeapUsedBytes: 100000000,
        maxRssBytes: 100000000,
        maxEventLoopUtilization: 0.98,
        exposeStatusRoute: {
            routeResponseSchemaOpts: {
                // extraValue: { type: 'string' },
                metrics: {
                    type: 'object',
                    properties: {
                        eventLoopDelay: { type: 'number' },
                        rssBytes: { type: 'number' },
                        heapUsed: { type: 'number' },
                        eventLoopUtilized: { type: 'number' },
                    },
                },
                // ...
            },
            url: '/api/v1/site-health'
        },
        healthCheck: async (fastify) => {
            return {
                // dbIsRunning: await fastify.db.authenticate(), //working
                // extraValue: await getExtraValue(),
                metrics: fastify.memoryUsage()
            }
        },
        // healthCheckInterval: 500
    })
})
