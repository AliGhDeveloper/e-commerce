"use strict";
(() => {
var exports = {};
exports.id = 834;
exports.ids = [834];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 9268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var models_CategoriesModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2194);
/* harmony import */ var utils_Db_connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3773);
/* harmony import */ var middlewares_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4784);



(0,utils_Db_connection__WEBPACK_IMPORTED_MODULE_1__/* .Db_connect */ .E)();
function handler(req, res) {
    switch(req.method){
        case "PUT":
            return putCat(req, res);
        case "DELETE":
            return deleteCat(req, res);
    }
};
;
async function putCat(req, res) {
    const { id  } = req.query;
    const { name  } = req.body;
    if (!name) return res.status(400).json({
        error: "name cannot be blank"
    });
    const user = await (0,middlewares_auth__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(req, res);
    if (user.role !== "admin") return res.status(401).json({
        error: "authentication error"
    });
    const updatedCat = await models_CategoriesModel__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOneAndUpdate */ .Z.findOneAndUpdate({
        _id: id
    }, {
        name
    });
    return res.status(200).json({
        ...updatedCat._doc,
        name
    });
}
;
async function deleteCat(req, res) {
    const { id  } = req.query;
    try {
        const user = await (0,middlewares_auth__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(req, res);
        if (user.role !== "admin") return res.status(401).json({
            error: "authentication error"
        });
        await models_CategoriesModel__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOneAndDelete */ .Z.findOneAndDelete({
            _id: id
        });
    } catch (error) {
        console.log({
            error: error.message
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [273,328], () => (__webpack_exec__(9268)));
module.exports = __webpack_exports__;

})();