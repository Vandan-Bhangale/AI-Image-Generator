const express = require('express');
const routes = express.Router();
const userController = require('../controller/userController')

routes.post('/login',userController.postLogin);
routes.post('/register',userController.postRegister);
routes.get('/status',userController.getStatus);
routes.post('/logout',userController.postLogout);

module.exports = routes;