var config = require('../config')
const mongoose = require('mongoose')
var dto = require('../models/dto')

mongoose.connect(config.mongodbcredential.connectionURL + config.mongodbcredential.database, {
    useUnifiedTopology: true ,
    useCreateIndex: true
});


///EXAMPLE

function create(req, res) {
    const user = new dto.User({
        name: 'Alexson11',
        age: '32'
    });
    user.save().then((user) => {
        res.json(user);
    }).catch((error) => {
        console.log('Error!', error);
    })
}

function update(req, res) {
    const filter = { name: 'Alexson11' };
    const update = { age: 9999 };
    dto.User.findOneAndUpdate(filter, update).then((user) => {
        if(user) {
            res.json({success:true,data:user});
        } else {
            res.json({success:false,data:"no such user exist"});
        }
    }).catch((error) => {
        console.log('Error!', error);
    });
}

function remove(req, res){
    const filter = { age: 32 };
    dto.User.remove(filter).then((user) => {
        if(user) {
            res.json({success:true,data:user});
        } else {
            res.json({success:false,data:"no such user exist"});
        }
    }).catch((error) => {
        console.log('Error!', error);
    });
}

function find(req, res){
    const filter = { age: 9999 };
    dto.User.find(filter).then((user) => {
        if(user) {
            res.json({success:true,data:user});
        } else {
            res.json({success:false,data:"no such user exist"});
        }
    }).catch((error) => {
        console.log('Error!', error);
    });
}



module.exports.dboperation = {
    create,
    update,
    remove,
    find
}