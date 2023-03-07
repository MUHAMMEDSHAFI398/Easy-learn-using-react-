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
    const decoded = jwt.verify(token.split(' ')[1], process.env.ADMIN_SECRET);
    if(decoded) next();
    else return 'invalid token'
  } catch (error) {
    console.log(error)
  }
};

const verifyTokenTeacher = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send({  
      message: 'No token provided'
    });
  } 
  try {
    const decoded = jwt.verify(token.split(' ')[1], process.env.TEACHER_SECRET);
    if(decoded){
      req.registerId = decoded.registerId;
      next();
    }
    else return 'invalid token'
  } catch (error) {
    console.log(error)
  }
}; 


const verifyTokenStudent = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send({  
      message: 'No token provided'
    });
  } 
  try {
    const decoded = jwt.verify(token.split(' ')[1], process.env.STUNDENT_SECRET);
    if(decoded){
      req.registerId = decoded.registerId;
      next();
    }
    else return 'invalid token'
  } catch (error) {
    console.log(error) 
  }
}; 

module.exports={
    verifyTokenAdmin,
    verifyTokenTeacher,
    verifyTokenStudent
}  