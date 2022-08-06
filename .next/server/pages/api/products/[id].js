"use strict";
(() => {
var exports = {};
exports.id = 480;
exports.ids = [480];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 7503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var models_ProductsModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4700);
/* harmony import */ var utils_Db_connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3773);
/* harmony import */ var middlewares_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4784);



(0,utils_Db_connection__WEBPACK_IMPORTED_MODULE_1__/* .Db_connect */ .E)();
function handler(req, res) {
    switch(req.method){
        case "GET":
            return getProduct(req, res);
        case "PUT":
            return updateProduct(req, res);
        case "DELETE":
            return deleteProduct(req, res);
    }
};
;
async function getProduct(req, res) {
    const { id  } = req.query;
    try {
        const product = await models_ProductsModel__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findById */ .Z.findById(id);
        if (!product) return res.status(400).json({
            error: "there is no product"
        });
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
    }
}
;
async function updateProduct(req, res) {
    const { id  } = req.query;
    const { title , inStock , images , price , description , content  } = req.body;
    if (!title || !inStock || images.length === 0 || !price || !description || !content) return res.status(400).json({
        error: "please add all fields"
    });
    try {
        const user = await (0,middlewares_auth__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(req, res);
        if (user.role !== "admin") return res.status(401).json({
            error: "authentication error"
        });
        const product = await models_ProductsModel__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOne */ .Z.findOne({
            _id: id
        });
        if (!product) return res.status(400).json({
            error: "product not found"
        });
        const newProduct = await models_ProductsModel__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOneAndUpdate */ .Z.findOneAndUpdate({
            _id: id
        }, {
            title: title.toLowerCase(),
            inStock,
            images,
            price,
            description,
            content
        });
        return res.status(200).json({
            success: "product updated"
        });
    } catch (error) {
        console.log({
            error: error.message
        });
    }
}
;
async function deleteProduct(req, res) {
    const { id  } = req.query;
    const productsIds = req.body;
    // checking authentication
    const user = await (0,middlewares_auth__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(req, res);
    if (user.role !== "admin") return res.status(401).json({
        error: "authentication error"
    });
    try {
        const deletedProduct = await models_ProductsModel__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOneAndDelete */ .Z.findOneAndDelete({
            _id: id
        });
        return res.status(200).json({
            success: "product deleted successfully"
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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [273,609], () => (__webpack_exec__(7503)));
module.exports = __webpack_exports__;

})();