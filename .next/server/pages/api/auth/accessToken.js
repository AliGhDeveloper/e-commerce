"use strict";
(() => {
var exports = {};
exports.id = 210;
exports.ids = [210];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var utils_Db_connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3773);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_tokenGenerate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2026);
/* harmony import */ var models_UsersModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3041);




(0,utils_Db_connection__WEBPACK_IMPORTED_MODULE_0__/* .Db_connect */ .E)();
async function handler(req, res) {
    try {
        const rf_token = req.cookies.refreshToken;
        if (!rf_token) return res.status(401).json({
            error: "please login first"
        });
        const validToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(rf_token, process.env.REFRESH_TOKEN_SECRET);
        if (!validToken) return res.status(401).json({
            error: "invalid token"
        });
        const user = await models_UsersModel__WEBPACK_IMPORTED_MODULE_3__/* ["default"].findById */ .Z.findById(validToken._id);
        if (!user) return res.status(400).json({
            error: "user not found"
        });
        const access_token = (0,utils_tokenGenerate__WEBPACK_IMPORTED_MODULE_2__/* .accessToken */ .T)(user);
        return res.status(200).json({
            access_token,
            user
        });
    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
};


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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [273], () => (__webpack_exec__(857)));
module.exports = __webpack_exports__;

})();