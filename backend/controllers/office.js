const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const teacher = require('../models/teacher')
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
                    expiresIn: 3600,
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
        teacher.create({
            name: data.name,
            phone: data.phone,
            email: data.email,
            date_of_birth: data.date_of_birth,
            gender: data.gender,
            salary: data.salary,
            qualification: data.qualification,
            experience: data.experience,
            remarks: data.remarks,
            isBlocked:false,
            address: {
                house_name: data.house_name,
                place: data.place,
                post: data.post,
                pin: data.pin,
                district: data.district,
                state: data.state
            }

        }).then((teacher) => {
            console.log(teacher);
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
                new:true,
                runValidators:true            
            }
        
        ).then((teacher) => {
            res.json({
                status: true,
                teacher: teacher
            })
        })
    },
    blockTeacher:(req,res)=>{
        const id = req.params.id
        teacher.findByIdAndUpdate(
            {_id:id},
            {
                isBlocked:true 
            },
            {  
                new:true,
                runValidators:true            
            }
        ).then((teacher)=>{
            console.log(teacher);
            res.json({
                status: true,
                teacher: teacher
            })
        })
    },
    unBlockTeacher:(req,res)=>{
        const id = req.params.id
        teacher.findByIdAndUpdate(
            {_id:id},
            {
                isBlocked:false 
            },
            {  
                new:true,
                runValidators:true            
            }
        ).then((teacher)=>{
            console.log(teacher);
            res.json({
                status: true,
                teacher: teacher
            })
        })
    }

}