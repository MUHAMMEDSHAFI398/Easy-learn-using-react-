const teacher = require('../models/teacher');
const batch = require('../models/batch');
const student = require('../models/student')

const uniqueCodeGenerator = (data) => {
    try {
       return new Promise(async (resolve, reject) => {
            let collectionName;
            let firstCode;
            let slno;
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
        console.log(err)
    }

};
function getMonthYearList(startDate, endDate) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthYearList = [];
    let currentDate = new Date(startDate);
    
    while (currentDate <= endDate) {
      const month = months[currentDate.getMonth()];
      const year = currentDate.getFullYear();
      monthYearList.push(`${month} ${year}`);
      currentDate.setMonth(currentDate.getMonth() + 1);
      console.log(currentDate)
    }
    
    return monthYearList;
  }
  
  // Example usage:
  const startDate = new Date('2022-12-29');
  const endDate = new Date('2025-12-29');
  const monthYearList = getMonthYearList(startDate, endDate);
  console.log(monthYearList); // Output: ["December 2022", "January 2023", "February 2023", ..., "November 2025", "December 2025"]
  
module.exports={
    uniqueCodeGenerator
}