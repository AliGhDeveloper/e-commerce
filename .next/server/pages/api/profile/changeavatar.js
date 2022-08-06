"use strict";
(() => {
var exports = {};
exports.id = 904;
exports.ids = [904];
exports.modules = {

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

/***/ 2015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var utils_Db_connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3773);
/* harmony import */ var models_UsersModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3041);
/* harmony import */ var middlewares_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4784);



(0,utils_Db_connection__WEBPACK_IMPORTED_MODULE_0__/* .Db_connect */ .E)();
function handler(req, res) {
    switch(req.method){
        case "POST":
            changeavatar(req, res);
    }
};
;
async function changeavatar(req, res) {
    const user = await (0,middlewares_auth__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(req, res);
    if (!user) return res.status(401).json({
        error: "Unauthenticated user"
    });
    const file = req.body;
    if (!file) return res.status(400).json("file not found");
    await models_UsersModel__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findByIdAndUpdate */ .Z.findByIdAndUpdate({
        _id: user._id
    }, {
        avatar: file
    });
    res.status(200).json({
        success: "avatar changed"
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [273], () => (__webpack_exec__(2015)));
module.exports = __webpack_exports__;

})();