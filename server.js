'use strict';

const Hapi = require('hapi');
const Path = require('path');
const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply.file('./views/index.html');
        }
    });

    server.route({
        method: 'GET',
        path: '/share',
        handler: function (request, reply) {
            reply.file('./views/index.html');
        }
    });
});


server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
