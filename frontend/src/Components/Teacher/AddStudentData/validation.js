const validate = (month,formNoOfDays) => {


    const errors = {};
    if (month.month === "" || month.month === "Select a month" ) {
        errors.month  = "Month is required"
    }

    if (formNoOfDays.noOfDaysPresent === "") {
        errors.noOfDaysPresent = "Working days is required"
    } else if (isNaN(formNoOfDays.noOfDaysPresent)) {
        errors.noOfDaysPresent = "Invalid entry"
    } else if(formNoOfDays.noOfDaysPresent < 0){
        errors.noOfDaysPresent = "Invalid entry"
    }else if(formNoOfDays.noOfDaysPresent > month.workingDays){
        errors.noOfDaysPresent = "Present days should be less than working days"
    }


    return errors;
};

export default validate;