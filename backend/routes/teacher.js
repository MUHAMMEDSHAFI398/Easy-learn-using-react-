const express = require('express');
const teacherRouter = express();
const teacherController = require('../controllers/teacher');
const verifyToken = require('../middlewares/middlewares')


teacherRouter.post('/login', teacherController.login)
teacherRouter.get('/home',verifyToken.verifyTokenTeacher, teacherController.getHome)
teacherRouter.patch('/update-profile',verifyToken.verifyTokenTeacher, teacherController.updateProfile)






module.exports = teacherRouter