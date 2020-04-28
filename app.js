
var config = require('./config');
var server_config = require("./configuration/server_config");
var auth = require("./configuration/auth_strategy_config");
var db = require('./db/mongoose');

auth.configure(server_config.server)


server_config.server.get("/create", auth.authenticate, function(req, res){
    db.dboperation.create(req, res);
});
server_config.server.get("/update", auth.authenticate, function(req, res){
    db.dboperation.update(req, res);
});
server_config.server.get("/delete", auth.authenticate, function(req, res){
    db.dboperation.remove(req, res);
});
server_config.server.get("/read", auth.authenticate, function(req, res){
    db.dboperation.find(req, res);
});



server_config.server.listen(config.serverPort, function() {

    var consoleMessage = '\n Referal Service';
    consoleMessage += '\n Start at port ' + config.serverPort;
    consoleMessage += '\n +++++++++++++++++++++++++++++++++++++++++++++++++++++';
    console.log(consoleMessage);

});