const admin = require('../models').admin;

module.exports = {
    create(req, res){
        return admin.create({                                                   //creating data on the column in the database basically an INSERT query
            Username : "akhil",
            Phone : 12345678,
            Email : "akhils@gmail.com",
            Password : "akil1108"
        })
        .then(admin => res.status(201).send(admin))
        .catch(error => res.status(400).send(error));
    }
}
