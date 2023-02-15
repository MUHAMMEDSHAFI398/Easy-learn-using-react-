const validate = (values) => {


    const errors = {};

    if (values.name === "") {
        errors.name = "Name is required";
    } else if (!/^[A-Za-z\s]*$/.test(values.name)) {
        errors.name = "Only letters and alphabets are allowed";
    }

    if (values.phone === "") {
        errors.phone = "Phone number is required"
    } else if (!/^\d{10}$/.test(values.phone)) {
        errors.phone = "Invalid phone number"
    }


    return errors;
};

export default validate;