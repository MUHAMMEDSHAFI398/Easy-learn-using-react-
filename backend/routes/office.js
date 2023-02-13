const express = require('express');
const officeRouter = express();
const officeController = require('../controllers/office');
const multer  = require('multer')
const { storage } = require('../config/cloudinary')
const upload = multer({storage})
const verifyToken = require('../middlewares/middlewares')


officeRouter.post('/login',officeController.login)

officeRouter.post('/add-teacher',verifyToken.verifyTokenAdmin,upload.single('file'),officeController.addTeacher)

officeRouter.get('/teachers',verifyToken.verifyTokenAdmin,officeController.getTeachers)

officeRouter.get('/get-teacher/:id',verifyToken.verifyTokenAdmin,officeController.getTeacher)

officeRouter.patch('/edit-teacher/:id',verifyToken.verifyTokenAdmin,officeController.editTeacher)

officeRouter.patch('/block-teacher/:id',verifyToken.verifyTokenAdmin,officeController.blockTeacher)

officeRouter.patch('/unblock-teacher/:id',verifyToken.verifyTokenAdmin,officeController.unBlockTeacher)

officeRouter.get('/batches',verifyToken.verifyTokenAdmin,officeController.getBatches)
 
officeRouter.post('/add-batch',verifyToken.verifyTokenAdmin,officeController.addBatch)

officeRouter.get('/get-batch/:id',verifyToken.verifyTokenAdmin,officeController.getBatch)

officeRouter.get('/get-edit-batch/:id',verifyToken.verifyTokenAdmin,officeController.getEditBatch)

officeRouter.post('/add-student',verifyToken.verifyTokenAdmin,upload.single('file'),officeController.addStudent) 

officeRouter.patch('/edit-batch/:id',verifyToken.verifyTokenAdmin,officeController.patchEditBatch)

officeRouter.get('/students',verifyToken.verifyTokenAdmin,officeController.getStudents)

officeRouter.patch('/block-student/:id',verifyToken.verifyTokenAdmin,officeController.blockStudent)

officeRouter.patch('/unblock-student/:id',verifyToken.verifyTokenAdmin,officeController.unBlockStudent)






module.exports=officeRouter