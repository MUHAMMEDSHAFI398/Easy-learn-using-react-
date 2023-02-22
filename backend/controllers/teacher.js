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


module.exports = {
    login,
    getHome,
    updateProfile
}