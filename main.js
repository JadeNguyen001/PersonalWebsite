// Contact Form
document.querySelector('#contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });

// let genderValue = male.check ? "male" : "female"

// function getGender() {
//     return document.querySelector('input[name="gender"]:checked')
// }

// var fields = {};

// document.addEventListener("DOMContentLoaded", function() {
//     fields.firstName = document.getElementById('firstName');
//     fields.lastName = document.getElementById('lastName');
//     fields.email = document.getElementById('email');
//     fields.address = document.getElementById('address');
//     fields.houseNumber = document.getElementById('phoneNumber');
//     fields.country = document.getElementById('state');
//     fields.question = document.getElementById('question');
//    })

//    function isNotEmpty(value) {
//        if (value == null || typeof value == 'undefined' ) return false;
//        return (value.length > 0);
//    }
//    function isNumber(num) {
//        return (num.length > 0) && !isNaN(num);
//    }
//    function isEmail(email) {
//     let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
//     return regex.test(String(email).toLowerCase());
//    }
//    function fieldValidation(field, validationFunction) {
//     if (field == null) return false;
   
//     let isFieldValid = validationFunction(field.value)
//     if (!isFieldValid) {
//     field.className = 'placeholderRed';
//     } else {
//     field.className = '';
//     }
   
//     return isFieldValid;
//    }
// function isValid() {
//     var valid = true;
    
//     valid &= fieldValidation(fields.firstName, isNotEmpty);
//     valid &= fieldValidation(fields.lastName, isNotEmpty);
//     valid &= fieldValidation(fields.address, isNotEmpty);
//     valid &= fieldValidation(fields.state, isNotEmpty);
//     valid &= fieldValidation(fields.email, isEmail);
//     valid &= fieldValidation(fields.phoneNumber, isNumber);
//     valid &= fieldValidation(fields.question, isNotEmpty);

//     return valid;
//    }

//    class User {
//     constructor(firstName, lastName, address, state, email, question) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.address = address;
//     this.state = state;
//     this.email = email;
//     this.question = question;
//     }
    // class User {
    //     constructor(firstName, lastName, gender, address, state, email, question) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.gender = gender;
    //     this.address = address;
    //     this.state = state;
    //     this.email = email;
    //     this.question = question;
    //     }
//    }

//    function sendContact() {
//     //    fields.gender = getGender();

//        if (isValid()) {
//            let usr = new User(firstName.value, lastName.value, address.value, state.value, email.value);
//         //    let usr = new User(firstName.value, lastName.value, fields.gender.value, address.value, state.value, email.value);
//            alert(`${usr.firstName} thanks for registering.`)
//        }
//        else {
//            alert("There was an error")
//        }
//    }