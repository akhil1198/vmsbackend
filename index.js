var express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
 // The express app we just created

var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

//models
var models = require('./models')

//sync db
models.sequelize.sync().then(function() {                           //doubts here
    console.log('nice wtdfff you did it!!!!');
}).catch(function(err){
    console.log('idk bro it aint it');
});

//routes
require('./routes')(app);                                           //import the routes folder                                       
app.get('*', (req, res) => res.send(200).send({
    message: 'bro we did it.',
}))


app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(5005, () => console.log(`Server started at port 5000`));