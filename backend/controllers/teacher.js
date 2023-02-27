const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const teacher = require('../models/teacher')
const batch = require('../models/batch');
const student = require('../models/student')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
dotenv.config();

const login = async (req, res) => {
    const data = req.body
    try {
        const teacherData = await teacher.findOne({ registerId: data.registerId })
        if (teacherData) {
            const passwordMatch = await bcrypt.compare(data.password, teacherData.password)
            if (passwordMatch) {
                const payload = {
                    registerId: data.registerId,
                };
                jwt.sign(
                    payload,
                    process.env.TEACHER_SECRET,
                    {
                        expiresIn: 3600000,
                    },
                    (err, token) => {
                        if (err) console.error("There is some error in token", err);
                        else {
                            res.json({
                                success: true,
                                token: `Bearer ${token}`,
                            });
                        }
                    }
                );
            } else {
                res.json({ error: "Invalid registerId or password" })
            }
        } else {
            res.json({ error: "Invalid registerId or password" })
        }

    } catch (err) {
        console.log(err)
    }
}

const getHome = async (req, res) => {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token.split(' ')[1], process.env.TEACHER_SECRET);
    try {
        const teacherData = await teacher.findOne({ registerId: decoded.registerId })
        res.json({ teacherData: teacherData })
    } catch (err) {
        console.log(err)
    }
}
const updateProfile = async (req, res) => {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token.split(' ')[1], process.env.TEACHER_SECRET);
    const address = req.body.address
    const data = req.body.teacherData
    try {
        await teacher.updateOne(

            { registerId: decoded.registerId },
            {
                $set: {
                    phone: data.phone,
                    email: data.email,
                    address: {
                        house_name: address.house_name,
                        place: address.place,
                        post: address.post,
                        pin: address.pin,
                        district: address.district,
                        state: address.state
                    }
                }
            }
        )
        res.json({ status: true })
    } catch (err) {
        console.log(err)
    }
}
const getMyStudents = async (req, res) => {

    const token = req.headers.authorization;
    const decoded = jwt.verify(token.split(' ')[1], process.env.TEACHER_SECRET);
    try {
        const teacherData = await teacher.aggregate([
            {
                $match: {
                    registerId: decoded.registerId
                }
            },
            {
                $project: {
                    myBatch: 1
                }
            }
        ])
        if (teacherData[0].myBatch !== "") {
            const batchStudents = await student.find({ batch: teacherData[0].myBatch })
            res.json({
                status: true,
                students: batchStudents
            })
        } else {
            res.json({ status: false })
        }
    } catch (err) {
        console.log(err)
    }

}
const eachStudent = async (req, res) => {
    const id = req.params.id
    try {
        const studentData = await student.findOne({ registerId: id })
        res.json({
            status: true,
            student: studentData
        })

    } catch (err) {
        console.log(err)
    }
}
const getMyBatch = async(req, res) => {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token.split(' ')[1], process.env.TEACHER_SECRET);

    try {
        const teacherData = await teacher.aggregate([
            {
                $match: {
                    registerId: decoded.registerId
                }
            },
            {
                $project: {
                    myBatch: 1
                } 
            }
        ])
        if (teacherData[0].myBatch !== ""){
            const batchData = await batch.aggregate([
                {
                    $match: {
                        registerId: teacherData[0].myBatch
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
            ])
            const numberOfSeat = batchData[0].numberOfSeat
            const batchFill = batchData[0].batchFill
            const availableSeat = numberOfSeat - batchFill
            res.json({
                status: true,
                batch: batchData,
                availableSeat: availableSeat,
            })
        }else{
            res.json({status:false})
        } 
        

    } catch (err) {
        console.log(err)
    }
}
const postLetter =async(req,res)=>{
    const id=req.registerId
    const today = new Date();
    const data={
         date:today,
         letter:req.body.leaveLetter,
         status:"Pending"
    }
    try{
        await teacher.updateOne(
            {
                registerId:id
            },
            {
                $push:{
                    myLeaves:data
                }
            }
        )
        res.json({
            status:true, 
        })
    } catch(err){
        console.log(err)
    }
}
const getLeaveHistory=async(req,res)=>{
    const id=req.registerId
    try{
        const leaveHistory = await teacher.aggregate([
            {
                $match:{
                    registerId:id
                }
            },
            {
                $unwind: "$myLeaves" 
            },
            {
                $project:{
                    myLeaves:1,
                     
                }
            },
            {
                $sort: {
                    "myLeaves.date": -1,
                }
            }
           
        ])
        res.json({
            status:true,
            leaveHistory:leaveHistory
        })
    } catch (err){
        console.log(err)
    }
}

module.exports = {
    login,
    getHome,
    updateProfile,
    getMyStudents,
    eachStudent,
    getMyBatch,
    postLetter,
    getLeaveHistory
}