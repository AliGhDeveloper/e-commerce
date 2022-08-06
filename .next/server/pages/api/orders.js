"use strict";
(() => {
var exports = {};
exports.id = 722;
exports.ids = [722];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var models_OrdersModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5088);
/* harmony import */ var utils_val__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4663);
/* harmony import */ var utils_Db_connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3773);
/* harmony import */ var middlewares_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4784);




(0,utils_Db_connection__WEBPACK_IMPORTED_MODULE_1__/* .Db_connect */ .E)();
function handler(req, res) {
    switch(req.method){
        case "POST":
            return setOrder(req, res);
        case "GET":
            return getOrders(req, res);
    }
    ;
};
;
async function getOrders(req, res) {
    try {
        //checking authentication
        const user = await (0,middlewares_auth__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(req, res);
        if (!user) return res.status(401).json({
            error: "there is a problem with authentication"
        });
        //finding orders for the user
        let orders;
        if (user.role !== "admin") {
            orders = await models_OrdersModel__WEBPACK_IMPORTED_MODULE_0__/* ["default"].find */ .Z.find({
                user: user._id
            });
        } else {
            orders = await models_OrdersModel__WEBPACK_IMPORTED_MODULE_0__/* ["default"].find */ .Z.find();
        }
        return res.status(200).json(orders);
    } catch (error) {
        console.log({
            error: error.message
        });
    }
}
async function setOrder(req, res) {
    const { email , address , telephone , cart , total  } = req.body;
    const errorMessage = (0,utils_val__WEBPACK_IMPORTED_MODULE_3__/* .shippingVal */ .AD)(address, email, telephone);
    if (errorMessage) return res.status(400).json({
        error: errorMessage
    });
    try {
        const user = await (0,middlewares_auth__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(req, res);
        const newOrder = new models_OrdersModel__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z({
            user: user._id,
            email,
            address,
            telephone,
            cart,
            total
        });
        await newOrder.save();
        res.status(200).json(newOrder);
    } catch (error) {
        console.log({
            error: error.message
        });
    }
}
;


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [273,663,303], () => (__webpack_exec__(6775)));
module.exports = __webpack_exports__;

})();