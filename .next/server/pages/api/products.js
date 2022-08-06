"use strict";
(() => {
var exports = {};
exports.id = 221;
exports.ids = [221];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 1003:
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
            return getProducts(req, res);
        case "POST":
            return createProduct(req, res);
        case "DELETE":
            return deleteProducts(req, res);
    }
};
;
class FeaturesAPI {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering() {
        const queryObj = {
            ...this.queryString
        };
        const excludeFields = [
            "limit",
            "sort",
            "page"
        ];
        excludeFields.forEach((field)=>delete queryObj[field]);
        if (queryObj.category !== "all") {
            this.query.find({
                category: queryObj.category
            });
        }
        if (queryObj.title !== "all") {
            this.query.find({
                title: {
                    $regex: queryObj.title
                }
            });
        }
        return this;
    }
    sorting() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(",").join("");
            this.query.sort(sortBy);
        } else {
            this.query.sort("-createdAt");
        }
        return this;
    }
    pagination() {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 3;
        const skip = (page - 1) * limit;
        this.query.skip(skip).limit(limit + 1);
        return this;
    }
}
async function getProducts(req, res) {
    const feature = new FeaturesAPI(models_ProductsModel__WEBPACK_IMPORTED_MODULE_0__/* ["default"].find */ .Z.find(), req.query).pagination().filtering().sorting();
    try {
        const products = await feature.query;
        if (products.length > 3) return res.status(200).json({
            products: products.slice(0, 3),
            more: true
        });
        return res.status(200).json(products);
    } catch (error) {
        console.log(error);
    }
}
;
async function createProduct(req, res) {
    const { images , category , title , description , content , inStock , price  } = req.body;
    if (!title || !category || category === "all" || !description || !content || !inStock || !price) return res.status(400).json({
        error: "please add all fields"
    });
    if (images.length === 0) return res.status(400).json({
        error: "please select at least one image"
    });
    try {
        const user = await (0,middlewares_auth__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(req, res);
        if (user.role !== "admin") return res.status(401).json({
            error: "authentication error"
        });
        const newProduct = new models_ProductsModel__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z({
            category,
            title: title.toLowerCase(),
            description,
            content,
            inStock,
            price,
            images
        });
        await newProduct.save();
        return res.status(200).json({
            success: "product created successfully"
        });
    } catch (error) {
        console.log(error);
    }
}
;
async function deleteProducts(req, res) {
    try {
        const items = req.body;
        if (!items) return res.status(400).json({
            error: "no items to delete"
        });
        const user = await (0,middlewares_auth__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(req, res);
        if (user.role !== "admin") return res.status(401).json({
            error: "authentication error"
        });
        items.forEach(async (item)=>{
            await models_ProductsModel__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOneAndDelete */ .Z.findOneAndDelete({
                _id: item
            });
        });
        return res.status(200).json({
            success: "deleted all"
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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [273,609], () => (__webpack_exec__(1003)));
module.exports = __webpack_exports__;

})();