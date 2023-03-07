const express = require('express');
const studentRouter = express();
const studentController = require('../controllers/student');
const verifyToken = require('../middlewares/middlewares')


studentRouter.post('/login', studentController.login)

studentRouter.get('/home',verifyToken.verifyTokenStudent, studentController.getHome)


module.exports = studentRouter 