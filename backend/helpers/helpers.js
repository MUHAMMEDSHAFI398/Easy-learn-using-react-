const teacher = require('../models/teacher');
const batch = require('../models/batch');
const student = require('../models/student')

const uniqueCodeGenerator = (data) => {
    try {
       return new Promise(async (resolve, reject) => {
            let collectionName;
            let firstCode;
            let slno;
            console.log('hi');
            if (data === 'teacher') {
                collectionName = teacher;
                firstCode = 'ELTR';
            }else if(data === 'batch'){
                collectionName = batch;
                firstCode = 'ELBT'
            }else if(data === 'student'){
                collectionName = student;
                firstCode = 'ELST'
            }
            collectionName.countDocuments({}).then((count) => {
                console.log(count)
                if (count < 9) {
                    slno = `00${count + 1}`;
                } else if (count > 8 && count < 99) {
                    slno = `0${count + 1}`
                } else { 
                    slno = count + 1
                }

                const uniqueCode = `${firstCode}${slno}`
                console.log(uniqueCode);
                resolve(uniqueCode);

            }).catch((err) => {
                reject(err);
            })

        })
    } catch (err) {
        console.log(err)
    }

};
module.exports={
    uniqueCodeGenerator
}