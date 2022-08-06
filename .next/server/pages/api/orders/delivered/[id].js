"use strict";
(() => {
var exports = {};
exports.id = 870;
exports.ids = [870];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var utils_Db_connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3773);
/* harmony import */ var models_OrdersModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5088);
/* harmony import */ var middlewares_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4784);



(0,utils_Db_connection__WEBPACK_IMPORTED_MODULE_0__/* .Db_connect */ .E)();
function handler(req, res) {
    switch(req.method){
        case "PATCH":
            updateOrder(req, res);
    }
    ;
};
;
const updateOrder = async (req, res)=>{
    const { id  } = req.query;
    const user = await (0,middlewares_auth__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(req, res);
    if (user.role !== "admin") return res.status(401).json("unauthenticated user");
    const order = await models_OrdersModel__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findOne */ .Z.findOne({
        _id: id
    });
    if (order.paid) {
        await models_OrdersModel__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findOneAndUpdate */ .Z.findOneAndUpdate({
            _id: id
        }, {
            delivered: true
        });
        res.status(200).json({
            message: "order updated"
        });
    } else {
        await models_OrdersModel__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findOneAndUpdate */ .Z.findOneAndUpdate({
            _id: id
        }, {
            paid: true,
            paidAt: new Date().toISOString(),
            delivered: true,
            method: "Recived Cash"
        });
        res.status(200).json({
            message: "order updated",
            data: {
                paidAt: new Date().toISOString(),
                delivered: true,
                method: "Recived Cash"
            }
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [273,303], () => (__webpack_exec__(6875)));
module.exports = __webpack_exports__;

})();