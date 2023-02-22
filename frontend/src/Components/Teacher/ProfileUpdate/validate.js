const validate = (values) => {

    console.log(values)
    const errors = {};

    

    if (values.phone === "") {
        errors.phone = "Phone number is required"
    } else if (!/^\d{10}$/.test(values.phone)) {
        errors.phone = "Invalid phone number"
    }

    if (values.email === "") {
        errors.email = "Email is required"
    } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)) {
        errors.email = "Invalid email"
    }

    if (values.address.house_name === "") {
        errors.house_name = "House name is required"
    } else if (!isNaN(values.house_name)) {
        errors.house_name = "Invalid entry"
    }

    if (values.address.place === "") {
        errors.place = "Place is required"
    } else if (!isNaN(values.place)) {
        errors.place = "Invalid entry"
    }

    if (values.address.post === "") {
        errors.post = "Post is required"
    } else if (!isNaN(values.post)) {
        errors.post = "Invalid entry"
    }

    if (values.address.pin === "") {
        errors.pin = "Pin is required"
    } else if (isNaN(values.pin)) {
        errors.pin = "Invalid entry"
    }

    if (values.address.district === "") {
        errors.district = "District is required"
    } else if (!isNaN(values.district)) {
        errors.district = "Invalid entry"
    }

    if (values.address.state === "") {
        errors.state = "State is required"
    } else if (!isNaN(values.state)) {
        errors.state = "Invalid entry"
    }

    if (values.address.file === null) {
        errors.file = "Image is required"
    }


    return errors;
};

export default validate;