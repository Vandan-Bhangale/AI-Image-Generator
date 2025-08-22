const express = require('express');
const routes = express.Router();

//Importing the user controller
const userController = require('../controller/userController')

//All the routes to handle the server requests
routes.post('/login',userController.postLogin);
routes.post('/register',userController.postRegister);
routes.get('/status',userController.getStatus);
routes.post('/logout',userController.postLogout);

module.exports = routes;