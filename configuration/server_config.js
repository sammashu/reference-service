"use strict";

const restify = require('restify')
    , passport = require('passport')


var server = restify.createServer({
    name: "Windows Azure Active Directroy TODO Server",
    version: "1.0.0"
});

// Ensure we don't drop data on uploads
server.pre(restify.pre.pause());

// Clean up sloppy paths like //todo//////1//
server.pre(restify.pre.sanitizePath());

// Handles annoying user agents (curl)
server.pre(restify.pre.userAgentConnection());


server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.dateParser());
server.use(restify.plugins.queryParser());
server.use(restify.plugins.gzipResponse());
server.use(restify.plugins.bodyParser({
    mapParams: true
})); // Allows for JSON mapping to REST
server.use(restify.plugins.authorizationParser()); // Looks for authorization headers

server.use(passport.initialize()); // Starts passport
server.use(passport.session()); // Provides session support


module.exports = {
    server
};
