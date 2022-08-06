"use strict";
(() => {
var exports = {};
exports.id = 531;
exports.ids = [531];
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

/***/ 4784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ auth)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var models_UsersModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3041);


async function auth(req, res) {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({
        error: "unAthenticated user!"
    });
    try {
        const verify = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.ACCESS_TOKEN_SECRET);
        if (!verify) return res.status(401).json({
            error: "invalid Token!"
        });
        const userId = verify._id;
        const user = await models_UsersModel__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findOne */ .Z.findOne({
            _id: userId
        });
        return user;
    } catch (error) {
        return res.status(401).json({
            error: "please refresh the page and try again!"
        });
    }
};


/***/ }),

/***/ 3597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var utils_Db_connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3773);
/* harmony import */ var models_UsersModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3041);
/* harmony import */ var middlewares_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4784);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_val__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4663);





(0,utils_Db_connection__WEBPACK_IMPORTED_MODULE_0__/* .Db_connect */ .E)();
function handler(req, res) {
    switch(req.method){
        case "PATCH":
            changePassword(req, res);
    }
};
;
const changePassword = async (req, res)=>{
    const { email , newPassword , cf_newPassword  } = req.body;
    const errorMessage = (0,utils_val__WEBPACK_IMPORTED_MODULE_4__/* .val */ .P0)(email, newPassword, cf_newPassword);
    if (errorMessage) return res.status(400).json({
        error: errorMessage
    });
    const salt = await bcrypt__WEBPACK_IMPORTED_MODULE_3___default().genSalt(12);
    const hashedPass = await bcrypt__WEBPACK_IMPORTED_MODULE_3___default().hash(newPassword, salt);
    const user = await (0,middlewares_auth__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(req, res);
    console.log(user);
    await models_UsersModel__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findOneAndUpdate */ .Z.findOneAndUpdate({
        _id: user._id
    }, {
        password: hashedPass
    });
    return res.status(200).json("password changed");
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [273,663], () => (__webpack_exec__(3597)));
module.exports = __webpack_exports__;

})();