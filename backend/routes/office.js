const express = require('express');
const officeRouter = express();
const officeController = require('../controllers/office');


officeRouter.post('/login',officeController.login)
officeRouter.post('/add-eacher',officeController.addTeacher)
officeRouter.get('/teachers',officeController.getTeachers)
officeRouter.get('/get-teacher/:id',officeController.getTeacher)

module.exports=officeRouter