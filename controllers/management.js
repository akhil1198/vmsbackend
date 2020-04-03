const management = require('../models').management

module.exports = {
    create(req, res){
        return management.create({                                                     //using controllers to insert data into the respective tables
            mgmtUsername: "akhilmgmt",                                                 //now move to routing phase and create apis to route requests 
            mgmtPhone: 78541254,                                                       //like route api/management with a .post() request to send data.
            mgmtEmail: "mgmt@gmail.com",
            mgmtPassword: "mgmtpassword"
        })
        .then(management => res.status(201).send(management))
        .catch(err => res.send(400).send(err))
    }
}