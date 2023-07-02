window.addEventListener("DOMContentLoaded", () => {
    const myForm = document.forms["form"];
    const submitButton = document.querySelector("#formSubmit");
    console.log(myForm);

    submitButton.addEventListener("click", function (e) {
        const result = valInputs();
        if (result == false) {
            e.preventDefault();
            alert("INVALID INPUT SOMEWHERE");
        }
    });

});

function valFname() {
    let valid = false;
    const firstName = document.getElementById("fname");
    
    if (firstName.value.trim().includes(" ")) {
        valid = true;
    }

    return [firstName, valid];
}

function valEmail() {
    let valid = false;
    const email = document.getElementById("email");
    const splitEmail = email.value.trim().split("@");
    const emailsExt = ["gmail.com", "yahoo.com", "outlook.com"];

    if (typeof splitEmail[0] === "string" && emailsExt.indexOf(splitEmail[1]) >= 0) {
        valid = true;
        alert("email valid");
    }

    return [email, valid];
}

function valDOB(){
    let valid = false;
    let date = new Date();
    let currentYear = date.getFullYear();
    const dateField = document.getElementById("dob");
    let userInputYear = dateField.value.split("-")[0];

    if(userInputYear < currentYear && userInputYear > 1800){
        valid = true;
        alert("dob valid");
    }

    return [dateField, valid];
}

function valCountry() {
    let valid = false;
    const country = document.getElementById("getCountry");
    const countriesSpecified = document.getElementById("countries").options;
    const valuesSpecified = [];

    // APPENDING ALL THE VALUES (LOWERCASED) OF ALL OPTION TAGS IN THE DATALIST INTO AN ARRAY
    for (let index = 0; index < countriesSpecified.length; index++) {
        const element = countriesSpecified[index];
        valuesSpecified.push(element.value.toLowerCase());
    }

    // VERIFYING IF INPUT COUNTRY IS PROVIDED IN THE OPTIONS TAG
    let countryIndex = valuesSpecified.indexOf(country.value.trim().toLowerCase());
    if (countryIndex >= 0) {
        valid = true;
        alert("country valid");
    }

    return [country, valid];
}

function valPassword(){
    let valid = false;
    const passwordField = document.getElementById("passwrd");
    const inputPassword = passwordField.value;

    if(inputPassword.length > 4){
        valid = true;
        alert("password valid");
    }

    return [passwordField, valid];
}

function valInputs() {
    const invalids = [];
    const valids = [];
    const resultFname = valFname();
    const resultDOB = valDOB();
    const resultEmail = valEmail();
    const resultCountry = valCountry();
    const resultPassword = valPassword();
    const array = [resultFname, resultDOB, resultEmail, resultCountry, resultPassword];

    // SEPARATE THE VALID INPUT FIELDS FROM THE INVALIDS
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (!element[1]) {
            invalids.push(element[0]);
        }else{
            valids.push(element[0]);
        }
    }

    console.log(invalids);

    if (invalids.length != 0) {
        // TO CHANGE THE COLOR OF THE LINE FOR THE INVALID INPUTS TO RED
        for (let i = 0; i < invalids.length; i++) {
            const element = invalids[i];
            element.style.borderBottom = "1.5px solid red";
        }
        // AFTER CHANGING BOTTOM-BORDER LINE TO RED, UPON CORRECT ENTRY, CHANGE THE COLOR LINE TO GREEN
        for (let i = 0; i < valids.length; i++) {
            const element = valids[i];
            element.style.borderBottom = "1.5px solid green";
        }

        return false;
    }
}

function resetForm() {
    document.getElementById("form").reset();
}