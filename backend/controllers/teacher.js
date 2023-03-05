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
const getMyBatch = async (req, res) => {
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
        } else {
            res.json({ noBatch: true })
        }


    } catch (err) {
        console.log(err)
    }
}
const postLetter = async (req, res) => {
    const id = req.registerId
    const today = new Date();
    const data = {
        date: today,
        letter: req.body.leaveLetter,
        status: "Pending"
    }
    try {
        await teacher.updateOne(
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
const getLeaveHistory = async (req, res) => {
    const id = req.registerId
    try {
        const leaveHistory = await teacher.aggregate([
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
                    "myLeaves.date": -1,
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

const batchStartEndDate = async (req, res) => {
    const id = req.registerId
    try {

        const teacherData = await teacher.aggregate([
            {
                $match: {
                    registerId: id
                }
            },
            {
                $project: {
                    myBatch: 1
                }
            }
        ])
        const batchData = await batch.aggregate([
            {
                $match: {
                    registerId: teacherData[0].myBatch
                }
            },
            {
                $project: {
                    startDate: 1,
                    endDate: 1
                }
            }
        ])
        if (batchData.length !== 0) {
            const startDate = new Date(batchData[0].startDate);
            const formattedStartDate = startDate.toISOString().slice(0, 7);
            const endDate = new Date(batchData[0].endDate);
            const formattedEndDate = endDate.toISOString().slice(0, 7);
            const dates = {
                startDate: formattedStartDate,
                endDate: formattedEndDate
            }
            res.json({
                status: true,
                dates: dates
            })
        } else {
            res.json({ noBatch: true })
        }



    } catch (err) {
        console.log(err)
    }
}
const addWorkingDays = async (req, res) => {
    const id = req.registerId
    const data = req.body
    try {
        const teacherData = await teacher.aggregate([
            {
                $match: {
                    registerId: id
                }
            },
            {
                $project: {
                    myBatch: 1
                }
            }
        ])
        const workDaysArray = await batch.aggregate([
            {
                $match: {
                    registerId: teacherData[0].myBatch
                }
            },
            {
                $unwind: "$workingDays"
            },
            {
                $project: {
                    workingDays: 1
                }
            }
        ])
        const date = new Date(data.month);
        const isoString = date.toISOString();
        const month = new Date(isoString);
        const found = await helpers.searchArrayElement(workDaysArray, month)
        if (found) {
            res.json({ alert: "The selected month already added" })
        } else {
            await batch.updateOne(
                {
                    registerId: teacherData[0].myBatch
                },
                {
                    $push: {
                        workingDays: data
                    }
                }

            )
            const workingDays = await batch.aggregate([
                {
                    $match: {
                        registerId: teacherData[0].myBatch
                    }
                },
                {
                    $project: {
                        workingDays: 1
                    }
                }
            ])
            const workDays = await workingDays[0].workingDays.sort((a, b) => a.month - b.month)
            res.json({
                status: true,
                workingDays: workDays
            })
        }
    } catch (err) {
        console.log(err)
    }

}
const monthlyWorkDays = async (req, res) => {
    const id = req.registerId
    try {
        const teacherData = await teacher.aggregate([
            {
                $match: {
                    registerId: id
                }
            },
            {
                $project: {
                    myBatch: 1
                }
            }
        ])
        if (teacherData[0].myBatch !== "") {
            const workingDays = await batch.aggregate([
                {
                    $match: {
                        registerId: teacherData[0].myBatch
                    }
                },
                {
                    $project: {
                        workingDays: 1
                    }
                }
            ])
            const workDays = await workingDays[0]?.workingDays?.sort((a, b) => a.month - b.month)
            res.json({
                status: true,
                workingDays: workDays
            })
        } else {
            res.json({ noBatch: true })
        }



    } catch (err) {
        console.log(err)
    }

}
const availableMonth = async (req, res) => {
    const id = req.registerId
    try {
        const teacherData = await teacher.aggregate([
            {
                $match: {
                    registerId: id
                }
            },
            {
                $project: {
                    myBatch: 1
                }
            }
        ])
        const availableMonth = await batch.aggregate([
            {
                $match: {
                    registerId: teacherData[0].myBatch
                }
            },
            {
                $project: {
                    _id: 0,
                    workingDays: 1
                }
            }
        ])
        const sortedAvailbleMonth = await availableMonth[0]?.workingDays?.sort((a, b) => b.month - a.month)
        res.json({
            status: true,
            availableMonth: sortedAvailbleMonth
        })
    } catch (err) {
        console.log(err)
    }

}
const addAttendance = async (req, res) => {

    const data = req.body
    const object = {
        month: data.month,
        workingDays: data.workingDays,
        noOfDaysPresent: data.noOfDaysPresent,
        percent: Math.round(((data.noOfDaysPresent / data.workingDays) * 100) * 100) / 100
    }
    try {
        const attendanceArray = await student.aggregate([
            {
                $match: {
                    registerId: data.studentId
                }
            },
            {
                $unwind: "$attendance"
            },
            {
                $project: {
                    attendance: 1
                }
            }
        ])
        const date = new Date(data.month);
        const isoString = date.toISOString();
        const month = new Date(isoString);
        const found = await helpers.searchAttendanceMonth(attendanceArray, month)

        if (found) {
            res.json({ alert: "Selected month data already added" })
        } else {
            await student.updateOne(
                {
                    registerId: data.studentId
                },
                {
                    $push: {
                        attendance: object
                    }
                }
            )
            const attendanceData = await student.aggregate([
                {
                    $match: {
                        registerId: data.studentId
                    }
                },
                {
                    $project: {
                        attendance: 1
                    }
                }
            ])
            const attendacearray = await attendanceData[0]?.attendance?.sort((a, b) => a.month - b.month)
            res.json({
                status: true,
                attendanceData: attendacearray
            })
        }

    } catch (err) {
        console.log(err)
    }
}
const attenDanceData = async (req, res) => {
    const id = req.params.id
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
        const attendacearray = await attendanceDatas[0]?.attendance?.sort((a, b) => a.month - b.month)
        res.json({
            status: true,
            attendanceData: attendacearray
        })
    } catch (err) {
        console.log(err)
    }
}
const getBatchSubjects = async (req, res) => {

    const batchId = req.params.id
    try {
        const subjects = await batch.aggregate([
            {
                $match: {
                    registerId: batchId
                }
            },
            {
                $project: {
                    "subjects.subject": 1,
                    _id: 0
                }
            }
        ])
        const SubjectsArray = subjects[0].subjects
        res.json({
            status: true,
            subjects: SubjectsArray
        })
    } catch (err) {
        console.log(err)
    }
}
const addStudentMark = async (req, res) => {
    const data = req.body
    const percentage = data.subjectMarks.reduce((acc, obj) => acc + obj.mark, 0) / data.subjectMarks.length;
    const roundPercentage = percentage.toFixed(3)
    const markdetails = {
        month: data.month,
        percentage: roundPercentage,
        subjectMarks: data.subjectMarks
    }
    const marksArray = await student.aggregate([
        {
            $match: {
                registerId: data.studentId
            }
        },
        {
            $project: {
                markdetails: 1
            }
        },
        {
            $unwind: "$markdetails"
        },
        {
            $project: {
                _id: 0,
                month: "$markdetails.month"
            }
        }
    ])
    const date = new Date(data.month);
    const isoString = date.toISOString();
    const month = new Date(isoString);
    const found = await helpers.monthSearchMark(marksArray, month)
    if (found) {
        res.json({ alert: "Selected month's marks already added" })
    } else {
        try {
            await student.updateOne(
                {
                    registerId: data.studentId
                },
                {
                    $push: {
                        markdetails: markdetails
                    }
                }
            )
            res.json({ status: true })
        } catch (err) {
            console.log(err)
        }
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
    getLeaveHistory,
    batchStartEndDate,
    addWorkingDays,
    monthlyWorkDays,
    availableMonth,
    addAttendance,
    attenDanceData,
    getBatchSubjects,
    addStudentMark
}   