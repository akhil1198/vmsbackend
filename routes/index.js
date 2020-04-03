const adminController = require('../controllers').admin;                                //api routing page
const managementController = require('../controllers').management;


module.exports = (app) => {
    app.get('/api', (req, res) => res.status(201).send({                                //GET request to this api displays the message
        message: "api's are now working.",                 
    }));

    app.post('/api/admin', adminController.create)                                      //POST request to this api sends the data from the controller to the database

    app.post('/api/management', managementController.create)
                                                                                        
    app.get('/api/mgmtget', (req, res) => res.status(201).send({                        //import the controllers from the controllers folder and use get
        message: "management api working!"                                              //requests to get and display data and use post requests to send data to the 
    }))                                                                                 //database. 
}