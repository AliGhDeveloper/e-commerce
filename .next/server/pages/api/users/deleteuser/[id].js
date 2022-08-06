"use strict";
(() => {
var exports = {};
exports.id = 390;
exports.ids = [390];
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

/***/ 3770:
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
        case "DELETE":
            deleteuser(req, res);
    }
};
;
async function deleteuser(req, res) {
    const { id  } = req.query;
    const user = await (0,middlewares_auth__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(req, res);
    if (user.role !== "admin" || !user.root) return res.status(401).json({
        error: "authentication error"
    });
    const deletedUser = await models_UsersModel__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findOneAndDelete */ .Z.findOneAndDelete({
        _id: id
    });
    res.status(200).json(deletedUser);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [273], () => (__webpack_exec__(3770)));
module.exports = __webpack_exports__;

})();