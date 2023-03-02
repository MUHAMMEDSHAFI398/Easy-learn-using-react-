const express = require('express');
const teacherRouter = express();
const teacherController = require('../controllers/teacher');
const verifyToken = require('../middlewares/middlewares')


teacherRouter.post('/login', teacherController.login)

teacherRouter.get('/home',verifyToken.verifyTokenTeacher, teacherController.getHome)

teacherRouter.patch('/update-profile',verifyToken.verifyTokenTeacher, teacherController.updateProfile)

teacherRouter.get('/my-students',verifyToken.verifyTokenTeacher, teacherController.getMyStudents)

teacherRouter.get('/each-student/:id',verifyToken.verifyTokenTeacher, teacherController.eachStudent)

teacherRouter.get('/my-batch',verifyToken.verifyTokenTeacher, teacherController.getMyBatch)

teacherRouter.post('/letter',verifyToken.verifyTokenTeacher, teacherController.postLetter)

teacherRouter.get('/leave-history',verifyToken.verifyTokenTeacher, teacherController.getLeaveHistory)

teacherRouter.get('/start-end',verifyToken.verifyTokenTeacher, teacherController.batchStartEndDate)

teacherRouter.post('/add-working-days',verifyToken.verifyTokenTeacher, teacherController.addWorkingDays)

teacherRouter.get('/month-work-days',verifyToken.verifyTokenTeacher, teacherController.monthlyWorkDays)

teacherRouter.get('/available-month',verifyToken.verifyTokenTeacher, teacherController.availableMonth)

teacherRouter.post('/add-attendance', verifyToken.verifyTokenTeacher,teacherController.addAttendance)

teacherRouter.get('/attendance-data', verifyToken.verifyTokenTeacher,teacherController.attenDanceData)



module.exports = teacherRouter 