"use strict";
exports.id = 663;
exports.ids = [663];
exports.modules = {

/***/ 4663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AD": () => (/* binding */ shippingVal),
/* harmony export */   "Nj": () => (/* binding */ loginVal),
/* harmony export */   "P0": () => (/* binding */ val)
/* harmony export */ });
const val = (email, password, cf_password)=>{
    if (!email || !password || !cf_password) {
        return "please add all fields!";
    }
    if (!validateEmail(email)) {
        return "email is invalid";
    }
    if (password.length < 6) {
        return "password must be at least 6 characters";
    }
    if (password !== cf_password) {
        return "passwords are not the same";
    }
};
const validateEmail = (email)=>{
    return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};
const loginVal = (email, password)=>{
    if (!email || !password) {
        return "please add all fields!";
    }
    if (!validateEmail(email)) {
        return "email is invalid";
    }
    if (password.length < 6) {
        return "password must be at least 6 characters";
    }
};
const shippingVal = (address, email, telephone)=>{
    if (!email || !address || !telephone) {
        return "please add all fields!";
    }
    if (!validateEmail(email)) {
        return "email is invalid";
    }
};


/***/ })

};
;