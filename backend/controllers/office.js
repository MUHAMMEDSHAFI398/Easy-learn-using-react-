const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const teacher = require('../models/teacher')
const batch = require('../models/batch');
const student = require('../models/student')
const helpers = require('../helpers/helpers')
const mongoose = require('mongoose');
dotenv.config();


module.exports = {
    login: (req, res) => {

        const email = req.body.email;
        const password = req.body.password;

        if (process.env.officeEmail === email && process.env.officePassword === password) {
            const payload = {
                email: email,
            };
            jwt.sign(
                payload,
                "secret",
                {
                    expiresIn: 3600000,
                },
                (err, token) => {
                    if (err) console.error("There is some error in token", err);
                    else {
                        res.json({
                            success: true,
                            email: email,
                            token: `Bearer ${token}`,
                        });
                    }
                }
            );
        } else {
            errors = "Incorrect email or password";
            return res.status(400).json(errors);
        }
    },
    addTeacher: async (req, res) => {

        const data = req.body
        const registerId = await helpers.uniqueCodeGenerator('teacher')
        const image = {
            url: req.file.path,
            filename: req.file.filename
        }

        teacher.create({
            registerId: registerId,
            name: data.name,
            phone: data.phone,
            email: data.email,
            date_of_birth: data.date_of_birth,
            gender: data.gender,
            salary: data.salary,
            qualification: data.qualification,
            experience: data.experience,
            remarks: data.remarks,
            isBlocked: false,
            image: image,
            address: {
                house_name: data.house_name,
                place: data.place,
                post: data.post,
                pin: data.pin,
                district: data.district,
                state: data.state
            }

        }).then(() => {
            res.json({ success: true })
        })

    },
    getTeachers: (req, res) => {

        teacher.find().then((teachers) => {
            res.json({
                status: true,
                teachers: teachers
            })
        })
    },
    getTeacher: (req, res) => {
        const id = req.params.id

        teacher.findOne({ _id: id }).then((teacher) => {
            res.json({
                status: true,
                teacher: teacher
            })
        })
    },
    editTeacher: (req, res) => {
        const data = req.body
        const id = req.params.id
        teacher.findByIdAndUpdate(id,
            {
                experience: data.experience,
                salary: data.salary
            },
            {
                new: true,
                runValidators: true
            }

        ).then((teacher) => {
            res.json({
                status: true,
                teacher: teacher
            })
        })
    },
    blockTeacher: (req, res) => {
        const id = req.params.id
        teacher.findByIdAndUpdate(
            { _id: id },
            {
                isBlocked: true
            },
            {
                new: true,
                runValidators: true
            }
        ).then((teacher) => {
            res.json({
                status: true,
                teacher: teacher
            })
        })
    },
    unBlockTeacher: (req, res) => {
        const id = req.params.id
        teacher.findByIdAndUpdate(
            { _id: id },
            {
                isBlocked: false
            },
            {
                new: true,
                runValidators: true
            }
        ).then((teacher) => {
            res.json({
                status: true,
                teacher: teacher
            })
        })
    },
    getAvaliableTeachers: async (req, res) => {

        try {
            const teachers = await teacher.find({ myBatch:"" })
          
            res.json({
                status:true,
                teachers:teachers
            })
        } catch (err) {
           
            console.log(err)
        }
    },

    addBatch: async (req, res) => {

        const data = req.body
        const batchId = await helpers.uniqueCodeGenerator('batch')
        await teacher.updateOne(

            { registerId: data.headOfTheBatch },
            {
                $set: {
                    myBatch: batchId
                }
            }
        )

        batch.create({
            registerId: batchId,
            startDate: data.startDate,
            duration: data.duration,
            fee: data.fee,
            numberOfSeat: data.numberOfSeat,
            headOfTheBatch: data.headOfTheBatch,
            remarks: data.remarks,
            subjects: data.subjectValues
        }).then(() => {
            res.json({ status: true })
        })
    },
    getBatches: (req, res) => {
        batch.aggregate([
            {
                $lookup: {
                    from: "teachers",
                    localField: "headOfTheBatch",
                    foreignField: "registerId",
                    as: "teacher_data"
                }
            }
        ]).then((batches) => {
            res.json({
                status: true,
                batches: batches
            })
        })
    },
    getBatch: (req, res) => {
        const id = req.params.id
        const objectId = mongoose.Types.ObjectId(id);
        batch.aggregate([
            {
                $match: {
                    _id: objectId
                }
            },
            {
                $lookup: {
                    from: "teachers",
                    localField: "headOfTheBatch",
                    foreignField: "registerId",
                    as: "teacher_data"
                }
            }
        ]).then((batch) => {

            res.json({
                status: true,
                batch: batch
            })
        })
    },
    getEditBatch: async (req, res) => {

        const id = req.params.id
        const objectId = mongoose.Types.ObjectId(id);

        try {
            const batchData = await batch.aggregate([
                {
                    $match: {
                        _id: objectId
                    }
                },
                {
                    $lookup: {
                        from: "teachers",
                        localField: "headOfTheBatch",
                        foreignField: "registerId",
                        as: "teacher_data"
                    }
                },
                {
                    $project: {
                        numberOfSeat: 1,
                        remarks: 1,
                        subjects: 1,
                        batchHeadId: '$headOfTheBatch',
                        headOfTheBatch: { $arrayElemAt: ["$teacher_data.name", 0] }
                    }
                }
            ])
            const teachers = await teacher.aggregate([
                {
                    $match: {}
                },
                {
                    $project: {
                        name: 1,
                        registerId: 1
                    }
                }
            ])

            res.json({
                status: true,
                batchData: batchData,
                teachers: teachers
            })


        } catch (err) {
            console.log(err)
        }



    },
    patchEditBatch: async (req, res) => {

        const id = req.params.id
        const data = req.body
        const batchData = await batch.findOne({ _id: id })
       
    
        if(batchData.headOfTheBatch !== data.batchHeadId){
            try{
                
               const hi= await teacher.updateOne(
                    {
                        myBatch:batchData.registerId
                    },
                    {
                        $set:{
                            myBatch:""
                        }
                    }
                    
                )
                
            }catch(err){
                console.log(err)
            }
        }
        await teacher.updateOne(

            { registerId: data.batchHeadId },
            {
                $set: {
                    myBatch: batchData.registerId,
                }
            }
        )
        try {
            await batch.updateOne(
                { _id: id },
                {
                    $set: {
                        numberOfSeat: data.numberOfSeat,
                        remarks: data.remarks,
                        headOfTheBatch: data.batchHeadId,
                        subjects: data.subjectValues
                    }
                }
            )
            res.json({ status: true })
        } catch (err) {
            console.log(err)
        }
    },
    getAvailableBatch: async (req, res) => {

        try {
            const availableBatches = await batch.find(
                {
                    $expr: {
                        $lt: ["$batchFill", "$numberOfSeat"]
                    }
                }
            )
            res.json({
                status: true,
                batches: availableBatches
            })
        } catch (err) {
            console.log(err)
        }

    },
    addStudent: async (req, res) => {
        const data = req.body

        const registerId = await helpers.uniqueCodeGenerator('student')
        const image = {
            url: req.file.path,
            filename: req.file.filename
        }
        await batch.updateOne(
            {
                registerId: data.batch
            },
            {
                $inc: { batchFill: 1 }
            }
        )

        student.create({
            registerId: registerId,
            name: data.name,
            phone: data.phone,
            email: data.email,
            dateOfBirth: data.dateOfBirth,
            gender: data.gender,
            parentName: data.parentName,
            parentPhone: data.parentPhone,
            education: data.education,
            institute: data.institute,
            batch: data.batch,
            isBlocked: false,
            image: image,
            address: {
                house_name: data.house_name,
                place: data.place,
                post: data.post,
                pin: data.pin,
                district: data.district,
                state: data.state
            }

        }).then(() => {
            res.json({ success: true })
        })
    },
    getStudents: async (req, res) => {
        try {
            const students = await student.find()
            res.json({
                status: true,
                students: students
            })
        } catch (err) {
            console.log(err)
        }
    },
    blockStudent: async (req, res) => {

        try {
            const id = req.params.id;
            await student.updateOne(
                { _id: id },
                { isBlocked: true }
            )
            res.json({ status: true })
        } catch (err) {
            console.log(err)
        }
    },
    unBlockStudent: async (req, res) => {

        try {
            const id = req.params.id;
            await student.updateOne(
                { _id: id },
                { isBlocked: false }
            )
            res.json({ status: true })
        } catch (err) {
            console.log(err)
        }
    },
    getStudent: async (req, res) => {
        try {
            const id = req.params.id
            console.log(id)
            const studentData = await student.findOne({ _id: id })
            res.json({
                status: true,
                studentData: studentData
            })
        } catch (err) {
            console.log(err)
        }
    }

} 