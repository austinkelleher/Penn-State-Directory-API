var psd = require("./psd-api.js");

/* Starts the psd-api below */

/* SAMPLE OBJECT TESTCASES */
// psd.get({lastName: "Abdalla"}); /* PASSED */
// psd.get({email: "hea113"}); /* PASSED */
// psd.get({userID: "hea113"}); /* PASSED */
// psd.get({firstName: "Hozaifa", lastName: ""}); /* PASSED */
// psd.get({firstName: "", lastName: "Abdalla"}); /* PASSED */
// psd.get({firstName: "Hozaifa", lastName: "Abdalla"}); /* PASSED */
// psd.get({firstName: "Hozaifa", lastName: "Abdalla" , userID: "hea113"}); /* PASSED */
// psd.get({firstName: "Hozaifa", lastName: "Abdalla" , userID: ""}); /* PASSED */
// psd.get({firstName: "Hozaifa", lastName: "Abdalla" , userID: "hea113", email: "hea113@psu.edu"}); /* PASSED */
// psd.get({firstName: "Hozaifa", lastName: "Abdalla" , userID: "", email: "hea113@psu.edu"}); /* PASSED */
// psd.get({email: "yehya@psu.edu"});
// psd.get([{firstName: "Hozaifa", lastName:"Abdalla"},{email: "kenneth.schnall@psu.edu"},{userID: "kas6570"}]);
// console.log(priv.Student["Name"]);
// console.log(priv.Student["E-mail"]);
// console.log(priv.Student["Mail ID"]);
// console.log(priv.Student["Title"]);
// console.log(priv.Student["Campus"]);
// console.log(priv.Student["Curriculum"]);
psd.get("Hozaifa Abdalla");