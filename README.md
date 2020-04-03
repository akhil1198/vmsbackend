# vmsbackend

Backend nodejs application built using Node, Express, Sequelize, Mysql.

To start setting up backend,
  1. Create a folder
  2. npm init
  3. npm install --save express body-parser
  4. npm i -D nodemon
  5. npm install -g sequelize-cli
  6. npm install --save sequelize mysql2
  7. sequelize init // final, Initializes project with sequelize cli
  8. Now use this command to create migrations in the migrations folder
      > sequelize model:create --name name_of_table --attributes name:string
      create your models here.
  9. Now migrate these tables to the database using this command
      > sequelize db:migrate
  10. Create controllers to link insert delete update or carry out operations with data 
  11. Create Routes to create apis and link them to a controller to execute a transaction when the api is called
  12. Link the routes folder in the index.js/server.js file.
  13. Use index.js outside all the folders as a reference. 
  14. Use postman to test apis

To run, type command node index.js

Change the database details in config.json to connect to a different database.

Use npm install to download all the dependencies. before running the code. 
