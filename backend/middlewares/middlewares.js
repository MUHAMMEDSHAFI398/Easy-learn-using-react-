const jwt = require('jsonwebtoken');

const secret = 'secret';

const verifyTokenAdmin = (req, res, next) => {
    const token = req.body;
console.log(token);
  if (!token) {
    return res.status(401).send({
      message: 'No token provided'
    });
  }

  jwt.verify(token, "secret", (err, decoded) => {
    if (err) {
        res.send({ error: "Authentication failed" })
    } else {
        next();
    }
})
};

module.exports={
    verifyTokenAdmin
}