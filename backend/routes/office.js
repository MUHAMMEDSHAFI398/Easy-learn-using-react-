const express = require('express');
const officeRouter = express();
const officeController = require('../controllers/office');


officeRouter.post('/login',officeController.login)


module.exports=officeRouter