//  I instaled the validator package which helps determine if certain strings are valid such as a Email . I installed this package by excuting the command  npm install validator in the terminial inside my project folder within VS Code



var validator = require('validator')

const emailValiT = validator.isEmail('j_kelloway@hotmail.com') // the string passed here is a email in the correct format so the response wold be true 

const emailValiF = validator.isEmail('j_kellowayhotmaillcom') // The string passed is not a email so the return would be false 




console.log(emailValiT) // console.logs the response while would be true 

console.log(emailValiF) // console.logs the response while would be false
