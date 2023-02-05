const teacher = require('../models/teacher');


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
              

                resolve(uniqueCode);
            }).catch((err) => {
                reject(err);
            })

        })
    } catch (err) {
        console.log('hiiii')
    }

};
module.exports={
    uniqueCodeGenerator
}