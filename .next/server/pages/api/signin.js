"use strict";
(() => {
var exports = {};
exports.id = 793;
exports.ids = [793];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 7272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var models_UsersModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3041);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_val__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4663);
/* harmony import */ var utils_Db_connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3773);
/* harmony import */ var utils_tokenGenerate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2026);





(0,utils_Db_connection__WEBPACK_IMPORTED_MODULE_2__/* .Db_connect */ .E)();
function handler(req, res) {
    switch(req.method){
        case "POST":
            signIn(req, res);
    }
};
async function signIn(req, res) {
    const { email , password  } = req.body;
    //validating data
    const errorMessage = (0,utils_val__WEBPACK_IMPORTED_MODULE_4__/* .loginVal */ .Nj)(email, password);
    if (errorMessage) return res.status(400).json({
        error: errorMessage
    });
    //checking email
    const user = await models_UsersModel__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOne */ .Z.findOne({
        email
    });
    if (!user) return res.status(400).json({
        error: "no user with this email!"
    });
    //checking password
    const validPass = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().compare(password, user.password);
    if (!validPass) return res.status(400).json({
        error: "your email or password is incorrect!"
    });
    // generating token
    const refresh_token = (0,utils_tokenGenerate__WEBPACK_IMPORTED_MODULE_3__/* .refreshToken */ .g)(user);
    const access_token = (0,utils_tokenGenerate__WEBPACK_IMPORTED_MODULE_3__/* .accessToken */ .T)(user);
    return res.status(200).json({
        success: "logged in",
        refresh_token,
        access_token,
        user
    });
}


/***/ }),

/***/ 2026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ accessToken),
/* harmony export */   "g": () => (/* binding */ refreshToken)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

const refreshToken = (payload)=>{
    const refreshtoken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({
        _id: payload._id
    }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "7d"
    });
    return refreshtoken;
};
const accessToken = (payload)=>{
    const accesstoken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({
        _id: payload._id
    }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "15min"
    });
    return accesstoken;
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [273,663], () => (__webpack_exec__(7272)));
module.exports = __webpack_exports__;

})();