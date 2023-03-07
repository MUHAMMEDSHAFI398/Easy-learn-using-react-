const express = require('express');
const studentRouter = express();
const studentController = require('../controllers/student');
const verifyToken = require('../middlewares/middlewares')


studentRouter.post('/login', studentController.login)

studentRouter.get('/home',verifyToken.verifyTokenStudent, studentController.getHome)

studentRouter.get('/attendance-data', verifyToken.verifyTokenStudent, studentController.attenDanceData)

studentRouter.get('/mark-data', verifyToken.verifyTokenStudent, studentController.getMarkDetails)



module.exports = studentRouter 