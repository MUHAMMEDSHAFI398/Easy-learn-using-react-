const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const teacher = require('../models/teacher')
const batch = require('../models/batch');
const student = require('../models/student')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const helpers = require('../helpers/helpers')
dotenv.config();


const login = async (req, res) => {
    const data = req.body
    try {
        const studentData = await student.findOne({ registerId: data.registerId })
        if (studentData) {
            const passwordMatch = await bcrypt.compare(data.password, studentData.password)
            if (passwordMatch) {
                const payload = {
                    registerId: data.registerId,
                };
                jwt.sign(
                    payload,
                    process.env.STUNDENT_SECRET,
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
    const id = req.registerId
    try {
        const studentData = await student.findOne({ registerId: id })
        res.json({ studentData: studentData })
    } catch (err) {
        console.log(err)
    }
}
const getMarkDetails = async (req, res) => {
    const studentId = req.registerId
    try {
        const markdetails = await student.aggregate([
            {
                $match: {
                    registerId: studentId
                }
            },   
            {
                $project: {
                    _id: 0,
                    markdetails: 1
                }
            }
        ])
        const sortedMarkDeatails = markdetails[0].markdetails.sort((a, b) => b.month - a.month)
        res.status(200).json({
            markdetails: sortedMarkDeatails
        })
    } catch (err) {
        console.log(err)
    }

}
const attenDanceData = async (req, res) => {
    const id = req.registerId
    try {
        const attendanceDatas = await student.aggregate([
            {
                $match: {
                    registerId: id
                }
            },
            {
                $project: {
                    attendance: 1
                }
            }
        ])
        const attendacearray = await attendanceDatas[0]?.attendance?.sort((a, b) => b.month - a.month)
        res.json({
            status: true,
            attendanceData: attendacearray
        })
    } catch (err) {
        console.log(err)
    }
}
const postLetter = async (req,res)=>{ 
    const id =req.registerId
    const today = new Date();
    const data = {
        appliedDate: today,
        from:req.body.from,
        to:req.body.to,
        letter: req.body.leaveLetter,
        status: "Pending",
        reason:""
    }
    try {
        await student.updateOne(
            {
                registerId: id
            },
            {
                $push: {
                    myLeaves: data
                }
            }
        )
        res.json({
            status: true,
        })
    } catch (err) {
        console.log(err)
    }
}
const getLeaveHistory = async (req,res)=>{
    const id = req.registerId
    try {
        const leaveHistory = await student.aggregate([
            {
                $match: {
                    registerId: id
                }
            },
            {
                $unwind: "$myLeaves"
            },
            {
                $project: {
                    myLeaves: 1,
                }
            },
            {
                $sort: {
                    "myLeaves.appliedDate": -1,
                }
            }
        ])
        res.json({
            status: true,
            leaveHistory: leaveHistory
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports={
    login,
    getHome,
    getMarkDetails,
    attenDanceData,
    postLetter,
    getLeaveHistory
}