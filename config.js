'use strict';

const tenantID   = '<TENANID>';
const clientID      = '26f8c286-6171-4364-af72-7374fc840848';
const serverPort    = 3000;

module.exports.serverPort = serverPort;

module.exports.credentials = {
    identityMetadata: `https://AVTMed2.b2clogin.com/AVTMed2.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=B2C_1_register`,
    clientID: clientID,
    passReqToCallback: false
};

const connectionURL = 'mongodb://localhost:27017/'
const database = 'test'

module.exports.mongodbcredential = {
    connectionURL : connectionURL,
    database : database
}