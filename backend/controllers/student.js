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
module.exports={
    login,
    getHome
}