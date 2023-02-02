const express = require('express');
const officeRouter = express();
const officeController = require('../controllers/office');
// const multer  = require('multer')
// const {storage} = require('../config/cloudinary')
// const upload = multer({storage})

officeRouter.post('/login',officeController.login)
officeRouter.post('/add-teacher',officeController.addTeacher)
officeRouter.get('/teachers',officeController.getTeachers)
officeRouter.get('/get-teacher/:id',officeController.getTeacher)
officeRouter.patch('/edit-teacher/:id',officeController.editTeacher)
officeRouter.get('/block-teacher/:id',officeController.blockTeacher)
officeRouter.get('/unblock-teacher/:id',officeController.unBlockTeacher)

module.exports=officeRouter