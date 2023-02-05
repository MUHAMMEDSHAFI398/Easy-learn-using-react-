const jwt = require('jsonwebtoken');

const secret = 'secret';

const verifyTokenAdmin = (req, res, next) => {
    const token = req.body.token;

  if (!token) {
    return res.status(401).send({
      message: 'No token provided'
    });
  }

  try {
    const decoded = jwt.verify(token, secret);
    console.log(decoded)
    req.user = decoded;
    next();
  } catch (error) {
    console.log('hi');
    return res.status(401).send({
      message: 'Invalid token.'
    });
  }
};

module.exports={
    verifyTokenAdmin
}