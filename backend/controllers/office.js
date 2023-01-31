const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();


module.exports = {
    login: (req, res) => {
    console.log('reached')
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
    }
}