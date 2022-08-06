"use strict";
(() => {
var exports = {};
exports.id = 553;
exports.ids = [553,273];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 3041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const schema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    root: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now()
    },
    role: {
        type: String,
        default: "user"
    },
    avatar: {
        type: String,
        default: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
    }
}, {
    timestamps: true
});
let Dataset = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Users) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Users", schema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dataset);


/***/ }),

/***/ 8307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var utils_Db_connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3773);
/* harmony import */ var _models_UsersModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3041);
/* harmony import */ var _utils_val__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4663);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);




(0,utils_Db_connection__WEBPACK_IMPORTED_MODULE_0__/* .Db_connect */ .E)();
function handler(req, res) {
    switch(req.method){
        case "POST":
            register(req, res);
    }
};
;
async function register(req, res) {
    const { email , password , cf_password  } = req.body;
    const errorMessage = (0,_utils_val__WEBPACK_IMPORTED_MODULE_3__/* .val */ .P0)(email, password, cf_password);
    if (errorMessage) return res.status(400).json({
        error: errorMessage
    });
    const user = await _models_UsersModel__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findOne */ .Z.findOne({
        email
    });
    if (user) return res.status(400).json({
        error: "email already exist!"
    });
    const salt = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().genSalt(10);
    const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().hash(password, salt);
    const newUser = new _models_UsersModel__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z({
        email,
        password: hashedPassword
    });
    try {
        await newUser.save();
        res.status(200).json({
            success: "user created!"
        });
    } catch (err) {
        console.log(err);
    }
}
;


/***/ }),

/***/ 3773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ Db_connect)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const Db_connect = ()=>{
    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {
        console.log("Already connected");
        return;
    }
    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.DB_CONNECTION, ()=>{
        console.log("connected to mongodb");
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [663], () => (__webpack_exec__(8307)));
module.exports = __webpack_exports__;

})();