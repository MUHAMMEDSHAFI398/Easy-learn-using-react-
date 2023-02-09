const jwt = require('jsonwebtoken');

const secret = 'secret';

const verifyTokenAdmin = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token)

  if (!token) {
    return res.status(401).send({
      message: 'No token provided'
    });
  }
  try {
    const decoded = jwt.verify(token.split(' ')[1], 'secret');
    console.log(decoded);
    next();
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports={
    verifyTokenAdmin
}