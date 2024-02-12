function fullNameValidation(name){
    var regex = new RegExp(/^[a-z]{3,}\s[a-z]{3,}\s[a-z]{3,}$/i);
    var valid = regex.test(name);
    if(!valid){
        var error = new TypeError("Name was not in the correct format");
        throw error;
    }
    return true;
}

function passwordValidation(password){
    var regex = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/);
    var valid = regex.test(password);
    if(!valid){
        var error = new Error("Password should contain A a 0 *");
        throw error;
    }
    return true;
}

function emailValidation(email){
    var regex = new RegExp(/^[\w-\.\_]+@([\w-]+\.)+[\w-]{2,4}$/i);
    var valid = regex.test(email);
    if(!valid){
        var error = new Error("Email was not in the correct format");
        throw error;
    }
    return true;
}

function phoneValidation(phone){
    var regex = new RegExp(/^(01)(0|1|2|5)[0-9]{8}$/i);
    var valid = regex.test(phone);
    if(!valid){
        var error = new Error("Phone was not in the correct format");
        throw error;
    }
    return true;
}