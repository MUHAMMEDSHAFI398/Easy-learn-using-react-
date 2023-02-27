const validate = (values) => {


    const errors = {};

    if (values.leaveLetter === "") {
        errors.leaveLetter = "Field is required"
    } else if (values.leaveLetter.length<=30) {
        errors.leaveLetter = "Letter should contains atlest 30 charecters"
    }

   

    return errors;
};

export default validate;