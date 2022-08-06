"use strict";
exports.id = 303;
exports.ids = [303];
exports.modules = {

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

/***/ 5088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const schema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    user: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId),
        ref: "Users"
    },
    address: String,
    telephone: Number,
    cart: Array,
    total: Number,
    paid: {
        type: Boolean,
        default: false
    },
    method: String,
    paidAt: Date,
    delivered: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
const Dataset = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Order) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Order", schema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dataset);


/***/ })

};
;