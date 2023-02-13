const jwt = require('jsonwebtoken');

const secret = 'secret';

const verifyTokenAdmin = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send({  
      message: 'No token provided'
    });
  }
  try {
    const decoded = jwt.verify(token.split(' ')[1], 'secret');
    if(decoded) next();
    else return 'invalid token'
  } catch (error) {
    console.log(error)
  }
}; 

module.exports={
    verifyTokenAdmin
}