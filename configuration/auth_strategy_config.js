"use strict";

var OIDCBearerStrategy = require('passport-azure-ad').BearerStrategy;
var config = require("../config");
var passport = require('passport');


function configure(app) {

    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new OIDCBearerStrategy(config.credentials,
        function (token, done) {
            console.log("token ", token);
            if (!token.oid) {
                done(new Error('oid is not found in token'));
            } else {
                done(null, token);
            }
        }));

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (id, done) {
        done(null, id);
    });
}

function authenticate(req, res, next) {
    passport.authenticate('oauth-bearer', {session: false})(req, res, next);
}

module.exports = {
    configure,
    authenticate
}