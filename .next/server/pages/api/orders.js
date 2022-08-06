"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/orders";
exports.ids = ["pages/api/orders"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./middlewares/auth.js":
/*!*****************************!*\
  !*** ./middlewares/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var models_UsersModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models/UsersModel */ \"(api)/./models/UsersModel.js\");\n\n\nasync function auth(req, res) {\n    const token = req.headers.authorization;\n    if (!token) return res.status(401).json({\n        error: \"unAthenticated user!\"\n    });\n    try {\n        const verify = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.ACCESS_TOKEN_SECRET);\n        if (!verify) return res.status(401).json({\n            error: \"invalid Token!\"\n        });\n        const userId = verify._id;\n        const user = await models_UsersModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            _id: userId\n        });\n        return user;\n    } catch (error) {\n        return res.status(401).json({\n            error: \"please refresh the page and try again!\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9taWRkbGV3YXJlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBK0I7QUFDTztBQUV2QixlQUFlRSxJQUFJLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3pDLE1BQU1DLEtBQUssR0FBR0YsR0FBRyxDQUFDRyxPQUFPLENBQUNDLGFBQWE7SUFDdkMsSUFBRyxDQUFDRixLQUFLLEVBQUUsT0FBT0QsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBRTtRQUFFQyxLQUFLLEVBQUUsc0JBQXNCO0tBQUUsQ0FBRSxDQUFDO0lBRTVFLElBQUk7UUFDQSxNQUFNQyxNQUFNLEdBQUdYLDBEQUFVLENBQUNLLEtBQUssRUFBRU8sT0FBTyxDQUFDQyxHQUFHLENBQUNDLG1CQUFtQixDQUFDO1FBQ2pFLElBQUcsQ0FBQ0gsTUFBTSxFQUFFLE9BQU9QLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUU7WUFBRUMsS0FBSyxFQUFFLGdCQUFnQjtTQUFDLENBQUM7UUFFcEUsTUFBTUssTUFBTSxHQUFHSixNQUFNLENBQUNLLEdBQUc7UUFFekIsTUFBTUMsSUFBSSxHQUFHLE1BQU1oQixpRUFBYSxDQUFFO1lBQUVlLEdBQUcsRUFBR0QsTUFBTTtTQUFFLENBQUU7UUFDcEQsT0FBT0UsSUFBSTtLQUNkLENBQUMsT0FBT1AsS0FBSyxFQUFHO1FBQ2IsT0FBT04sR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFDQyxLQUFLLEVBQUUsd0NBQXdDO1NBQUMsQ0FBQztLQUNqRjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZS1jb21tZXJjZS8uL21pZGRsZXdhcmVzL2F1dGguanM/ZTc3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcbmltcG9ydCBVc2VycyBmcm9tICdtb2RlbHMvVXNlcnNNb2RlbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBhdXRoKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb247XHJcbiAgICBpZighdG9rZW4pIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbiggeyBlcnJvcjogXCJ1bkF0aGVudGljYXRlZCB1c2VyIVwiIH0gKTtcclxuXHJcbiAgICB0cnkgeyBcclxuICAgICAgICBjb25zdCB2ZXJpZnkgPSBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU5fU0VDUkVUKTtcclxuICAgICAgICBpZighdmVyaWZ5KSByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oIHsgZXJyb3I6IFwiaW52YWxpZCBUb2tlbiFcIn0pXHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXJJZCA9IHZlcmlmeS5faWQ7XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2Vycy5maW5kT25lKCB7IF9pZCA6IHVzZXJJZCB9ICk7XHJcbiAgICAgICAgcmV0dXJuIHVzZXJcclxuICAgIH0gY2F0Y2goIGVycm9yICkge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7ZXJyb3I6ICdwbGVhc2UgcmVmcmVzaCB0aGUgcGFnZSBhbmQgdHJ5IGFnYWluISd9KVxyXG4gICAgfSAgIFxyXG59XHJcbiJdLCJuYW1lcyI6WyJqd3QiLCJVc2VycyIsImF1dGgiLCJyZXEiLCJyZXMiLCJ0b2tlbiIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsIkFDQ0VTU19UT0tFTl9TRUNSRVQiLCJ1c2VySWQiLCJfaWQiLCJ1c2VyIiwiZmluZE9uZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./middlewares/auth.js\n");

/***/ }),

/***/ "(api)/./models/OrdersModel.js":
/*!*******************************!*\
  !*** ./models/OrdersModel.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst schema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    user: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId),\n        ref: \"Users\"\n    },\n    address: String,\n    telephone: Number,\n    cart: Array,\n    total: Number,\n    paid: {\n        type: Boolean,\n        default: false\n    },\n    method: String,\n    paidAt: Date,\n    delivered: {\n        type: Boolean,\n        default: false\n    }\n}, {\n    timestamps: true\n});\nconst Dataset = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Order) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Order\", schema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dataset);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvT3JkZXJzTW9kZWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCx3REFBZSxDQUFDO0lBQy9CRyxJQUFJLEVBQUc7UUFDSEMsSUFBSSxFQUFFSixnRUFBdUI7UUFDN0JPLEdBQUcsRUFBRyxPQUFPO0tBQ2hCO0lBQ0RDLE9BQU8sRUFBR0MsTUFBTTtJQUNoQkMsU0FBUyxFQUFFQyxNQUFNO0lBQ2pCQyxJQUFJLEVBQUdDLEtBQUs7SUFDWkMsS0FBSyxFQUFHSCxNQUFNO0lBQ2RJLElBQUksRUFBRztRQUNIWCxJQUFJLEVBQUVZLE9BQU87UUFDYkMsT0FBTyxFQUFHLEtBQUs7S0FDbEI7SUFDREMsTUFBTSxFQUFFVCxNQUFNO0lBQ2RVLE1BQU0sRUFBRUMsSUFBSTtJQUNaQyxTQUFTLEVBQUc7UUFDUmpCLElBQUksRUFBRVksT0FBTztRQUNiQyxPQUFPLEVBQUcsS0FBSztLQUNsQjtDQUVKLEVBQUM7SUFDRUssVUFBVSxFQUFFLElBQUk7Q0FDbkIsQ0FBQztBQUVGLE1BQU1DLE9BQU8sR0FBR3ZCLDhEQUFxQixJQUFJQSxxREFBYyxDQUFDLE9BQU8sRUFBRUMsTUFBTSxDQUFDO0FBRXhFLGlFQUFlc0IsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZS1jb21tZXJjZS8uL21vZGVscy9PcmRlcnNNb2RlbC5qcz9kMDM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBzY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIHVzZXIgOiB7XHJcbiAgICAgICAgdHlwZTogbW9uZ29vc2UuVHlwZXMuT2JqZWN0SWQsXHJcbiAgICAgICAgcmVmIDogJ1VzZXJzJ1xyXG4gICAgfSxcclxuICAgIGFkZHJlc3MgOiBTdHJpbmcsXHJcbiAgICB0ZWxlcGhvbmU6IE51bWJlcixcclxuICAgIGNhcnQgOiBBcnJheSxcclxuICAgIHRvdGFsIDogTnVtYmVyLFxyXG4gICAgcGFpZDogIHtcclxuICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgIGRlZmF1bHQgOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIG1ldGhvZDogU3RyaW5nLFxyXG4gICAgcGFpZEF0OiBEYXRlLFxyXG4gICAgZGVsaXZlcmVkIDoge1xyXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgZGVmYXVsdCA6IGZhbHNlXHJcbiAgICB9XHJcblxyXG59LHtcclxuICAgIHRpbWVzdGFtcHM6IHRydWVcclxufSk7XHJcblxyXG5jb25zdCBEYXRhc2V0ID0gbW9uZ29vc2UubW9kZWxzLk9yZGVyIHx8IG1vbmdvb3NlLm1vZGVsKCdPcmRlcicsIHNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhc2V0OyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInNjaGVtYSIsIlNjaGVtYSIsInVzZXIiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsImFkZHJlc3MiLCJTdHJpbmciLCJ0ZWxlcGhvbmUiLCJOdW1iZXIiLCJjYXJ0IiwiQXJyYXkiLCJ0b3RhbCIsInBhaWQiLCJCb29sZWFuIiwiZGVmYXVsdCIsIm1ldGhvZCIsInBhaWRBdCIsIkRhdGUiLCJkZWxpdmVyZWQiLCJ0aW1lc3RhbXBzIiwiRGF0YXNldCIsIm1vZGVscyIsIk9yZGVyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/OrdersModel.js\n");

/***/ }),

/***/ "(api)/./models/UsersModel.js":
/*!******************************!*\
  !*** ./models/UsersModel.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst schema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    email: {\n        type: String,\n        required: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    root: {\n        type: Boolean,\n        default: false\n    },\n    date: {\n        type: Date,\n        default: Date.now()\n    },\n    role: {\n        type: String,\n        default: \"user\"\n    },\n    avatar: {\n        type: String,\n        default: \"https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y\"\n    }\n}, {\n    timestamps: true\n});\nlet Dataset = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Users) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Users\", schema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dataset);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlcnNNb2RlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFlLENBQUM7SUFDL0JHLEtBQUssRUFBRztRQUNKQyxJQUFJLEVBQUdDLE1BQU07UUFDYkMsUUFBUSxFQUFHLElBQUk7S0FDbEI7SUFDREMsUUFBUSxFQUFHO1FBQ1BILElBQUksRUFBR0MsTUFBTTtRQUNiQyxRQUFRLEVBQUcsSUFBSTtLQUNsQjtJQUNERSxJQUFJLEVBQUU7UUFDRkosSUFBSSxFQUFHSyxPQUFPO1FBQ2RDLE9BQU8sRUFBRyxLQUFLO0tBQ2xCO0lBQ0RDLElBQUksRUFBRTtRQUNGUCxJQUFJLEVBQUdRLElBQUk7UUFDWEYsT0FBTyxFQUFHRSxJQUFJLENBQUNDLEdBQUcsRUFBRTtLQUN2QjtJQUNEQyxJQUFJLEVBQUc7UUFDSFYsSUFBSSxFQUFHQyxNQUFNO1FBQ2JLLE9BQU8sRUFBRyxNQUFNO0tBQ25CO0lBQ0RLLE1BQU0sRUFBRztRQUNMWCxJQUFJLEVBQUdDLE1BQU07UUFDYkssT0FBTyxFQUFHLDJFQUEyRTtLQUN4RjtDQUVKLEVBQUM7SUFDRU0sVUFBVSxFQUFHLElBQUk7Q0FDcEIsQ0FBQztBQUVGLElBQUlDLE9BQU8sR0FBR2pCLDhEQUFxQixJQUFJQSxxREFBYyxDQUFDLE9BQU8sRUFBRUMsTUFBTSxDQUFDO0FBRXRFLGlFQUFlZ0IsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZS1jb21tZXJjZS8uL21vZGVscy9Vc2Vyc01vZGVsLmpzPzFhM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3Qgc2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICBlbWFpbCA6IHtcclxuICAgICAgICB0eXBlIDogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkIDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkIDoge1xyXG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQgOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgcm9vdDogeyBcclxuICAgICAgICB0eXBlIDogQm9vbGVhbixcclxuICAgICAgICBkZWZhdWx0IDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBkYXRlOiB7XHJcbiAgICAgICAgdHlwZSA6IERhdGUsXHJcbiAgICAgICAgZGVmYXVsdCA6IERhdGUubm93KClcclxuICAgIH0sXHJcbiAgICByb2xlIDoge1xyXG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdCA6ICd1c2VyJ1xyXG4gICAgfSxcclxuICAgIGF2YXRhciA6IHtcclxuICAgICAgICB0eXBlIDogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQgOiBcImh0dHBzOi8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA/ZD1tcCZmPXlcIlxyXG4gICAgfVxyXG5cclxufSx7XHJcbiAgICB0aW1lc3RhbXBzIDogdHJ1ZVxyXG59KTtcclxuXHJcbmxldCBEYXRhc2V0ID0gbW9uZ29vc2UubW9kZWxzLlVzZXJzIHx8IG1vbmdvb3NlLm1vZGVsKCdVc2VycycsIHNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhc2V0OyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInNjaGVtYSIsIlNjaGVtYSIsImVtYWlsIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJyb290IiwiQm9vbGVhbiIsImRlZmF1bHQiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsInJvbGUiLCJhdmF0YXIiLCJ0aW1lc3RhbXBzIiwiRGF0YXNldCIsIm1vZGVscyIsIlVzZXJzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/UsersModel.js\n");

/***/ }),

/***/ "(api)/./pages/api/orders/index.js":
/*!***********************************!*\
  !*** ./pages/api/orders/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var models_OrdersModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! models/OrdersModel */ \"(api)/./models/OrdersModel.js\");\n/* harmony import */ var utils_val__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/val */ \"(api)/./utils/val.js\");\n/* harmony import */ var utils_Db_connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/Db_connection */ \"(api)/./utils/Db_connection.js\");\n/* harmony import */ var middlewares_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! middlewares/auth */ \"(api)/./middlewares/auth.js\");\n\n\n\n\n(0,utils_Db_connection__WEBPACK_IMPORTED_MODULE_2__.Db_connect)();\nfunction handler(req, res) {\n    switch(req.method){\n        case \"POST\":\n            return setOrder(req, res);\n        case \"GET\":\n            return getOrders(req, res);\n    }\n    ;\n};\n;\nasync function getOrders(req, res) {\n    try {\n        //checking authentication\n        const user = await (0,middlewares_auth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(req, res);\n        if (!user) return res.status(401).json({\n            error: \"there is a problem with authentication\"\n        });\n        //finding orders for the user\n        let orders;\n        if (user.role !== \"admin\") {\n            orders = await models_OrdersModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n                user: user._id\n            });\n        } else {\n            orders = await models_OrdersModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find();\n        }\n        return res.status(200).json(orders);\n    } catch (error) {\n        console.log({\n            error: error.message\n        });\n    }\n}\nasync function setOrder(req, res) {\n    const { email , address , telephone , cart , total  } = req.body;\n    const errorMessage = (0,utils_val__WEBPACK_IMPORTED_MODULE_1__.shippingVal)(address, email, telephone);\n    if (errorMessage) return res.status(400).json({\n        error: errorMessage\n    });\n    try {\n        const user = await (0,middlewares_auth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(req, res);\n        const newOrder = new models_OrdersModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            user: user._id,\n            email,\n            address,\n            telephone,\n            cart,\n            total\n        });\n        await newOrder.save();\n        res.status(200).json(newOrder);\n    } catch (error) {\n        console.log({\n            error: error.message\n        });\n    }\n}\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXJzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdDO0FBQ0E7QUFDUztBQUNiO0FBRXBDRSwrREFBVSxFQUFFLENBQUM7QUFHRSxTQUFTRSxPQUFPLENBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFHO0lBQ3hDLE9BQVFELEdBQUcsQ0FBQ0UsTUFBTTtRQUNkLEtBQUssTUFBTTtZQUNQLE9BQU9DLFFBQVEsQ0FBRUgsR0FBRyxFQUFFQyxHQUFHLENBQUUsQ0FBQztRQUVoQyxLQUFLLEtBQUs7WUFDTixPQUFPRyxTQUFTLENBQUVKLEdBQUcsRUFBRUMsR0FBRyxDQUFFLENBQUM7S0FDcEM7O0NBQ0o7O0FBRUQsZUFBZUcsU0FBUyxDQUFDSixHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMvQixJQUFJO1FBQ0EseUJBQXlCO1FBQ3pCLE1BQU1JLElBQUksR0FBRyxNQUFNUCw0REFBSSxDQUFDRSxHQUFHLEVBQUVDLEdBQUcsQ0FBQztRQUNqQyxJQUFHLENBQUNJLElBQUksRUFBRSxPQUFPSixHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUNDLEtBQUssRUFBRSx3Q0FBd0M7U0FBQyxDQUFDLENBQUM7UUFFekYsNkJBQTZCO1FBQzdCLElBQUlDLE1BQU07UUFDVixJQUFHSixJQUFJLENBQUNLLElBQUksS0FBSyxPQUFPLEVBQUM7WUFDckJELE1BQU0sR0FBRyxNQUFNZCwrREFBVyxDQUFDO2dCQUFDVSxJQUFJLEVBQUdBLElBQUksQ0FBQ08sR0FBRzthQUFDLENBQUM7U0FDaEQsTUFBSztZQUNGSCxNQUFNLEdBQUcsTUFBTWQsK0RBQVcsRUFBRTtTQUMvQjtRQUVELE9BQU9NLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNFLE1BQU0sQ0FBQztLQUV0QyxDQUFDLE9BQU9ELEtBQUssRUFBRTtRQUNaSyxPQUFPLENBQUNDLEdBQUcsQ0FBQztZQUFFTixLQUFLLEVBQUVBLEtBQUssQ0FBQ08sT0FBTztTQUFFLENBQUM7S0FDeEM7Q0FDSjtBQUVELGVBQWVaLFFBQVEsQ0FBQ0gsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUIsTUFBTSxFQUFFZSxLQUFLLEdBQUVDLE9BQU8sR0FBRUMsU0FBUyxHQUFFQyxJQUFJLEdBQUVDLEtBQUssR0FBRSxHQUFHcEIsR0FBRyxDQUFDcUIsSUFBSTtJQUMzRCxNQUFNQyxZQUFZLEdBQUcxQixzREFBVyxDQUFDcUIsT0FBTyxFQUFFRCxLQUFLLEVBQUVFLFNBQVMsQ0FBQztJQUMzRCxJQUFJSSxZQUFZLEVBQUcsT0FBT3JCLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUMsS0FBSyxFQUFFYyxZQUFZO0tBQUUsQ0FBQyxDQUFDO0lBR3hFLElBQUk7UUFDQSxNQUFNakIsSUFBSSxHQUFHLE1BQU1QLDREQUFJLENBQUNFLEdBQUcsRUFBRUMsR0FBRyxDQUFDO1FBQ2pDLE1BQU1zQixRQUFRLEdBQUcsSUFBSTVCLDBEQUFNLENBQUM7WUFBRVUsSUFBSSxFQUFFQSxJQUFJLENBQUNPLEdBQUc7WUFBRUksS0FBSztZQUFFQyxPQUFPO1lBQUVDLFNBQVM7WUFBRUMsSUFBSTtZQUFFQyxLQUFLO1NBQUMsQ0FBQztRQUN0RixNQUFNRyxRQUFRLENBQUNDLElBQUksRUFBRTtRQUNyQnZCLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNnQixRQUFRLENBQUM7S0FDakMsQ0FBQyxPQUFPZixLQUFLLEVBQUc7UUFDYkssT0FBTyxDQUFDQyxHQUFHLENBQUM7WUFBRU4sS0FBSyxFQUFHQSxLQUFLLENBQUNPLE9BQU87U0FBRSxDQUFDO0tBQ3pDO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lLWNvbW1lcmNlLy4vcGFnZXMvYXBpL29yZGVycy9pbmRleC5qcz9jNTk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPcmRlcnMgZnJvbSAnbW9kZWxzL09yZGVyc01vZGVsJztcclxuaW1wb3J0IHsgc2hpcHBpbmdWYWwgfSBmcm9tICd1dGlscy92YWwnO1xyXG5pbXBvcnQgeyBEYl9jb25uZWN0IH0gZnJvbSAndXRpbHMvRGJfY29ubmVjdGlvbic7XHJcbmltcG9ydCBhdXRoIGZyb20gJ21pZGRsZXdhcmVzL2F1dGgnO1xyXG5cclxuRGJfY29ubmVjdCgpO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIoIHJlcSwgcmVzICkge1xyXG4gICAgc3dpdGNoKCByZXEubWV0aG9kICkge1xyXG4gICAgICAgIGNhc2UgJ1BPU1QnIDogXHJcbiAgICAgICAgICAgIHJldHVybiBzZXRPcmRlciggcmVxLCByZXMgKTtcclxuXHJcbiAgICAgICAgY2FzZSAnR0VUJyA6IFxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0T3JkZXJzKCByZXEsIHJlcyApO1xyXG4gICAgfTtcclxufTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldE9yZGVycyhyZXEsIHJlcykge1xyXG4gICAgdHJ5IHsgXHJcbiAgICAgICAgLy9jaGVja2luZyBhdXRoZW50aWNhdGlvblxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoKHJlcSwgcmVzKTtcclxuICAgICAgICBpZighdXNlcikgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHtlcnJvcjogJ3RoZXJlIGlzIGEgcHJvYmxlbSB3aXRoIGF1dGhlbnRpY2F0aW9uJ30pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vZmluZGluZyBvcmRlcnMgZm9yIHRoZSB1c2VyXHJcbiAgICAgICAgbGV0IG9yZGVycztcclxuICAgICAgICBpZih1c2VyLnJvbGUgIT09ICdhZG1pbicpe1xyXG4gICAgICAgICAgICBvcmRlcnMgPSBhd2FpdCBPcmRlcnMuZmluZCh7dXNlciA6IHVzZXIuX2lkfSlcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIG9yZGVycyA9IGF3YWl0IE9yZGVycy5maW5kKClcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ob3JkZXJzKVxyXG4gICAgXHJcbiAgICB9IGNhdGNoKCBlcnJvciApe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSlcclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2V0T3JkZXIocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHsgZW1haWwsIGFkZHJlc3MsIHRlbGVwaG9uZSwgY2FydCwgdG90YWwgfSA9IHJlcS5ib2R5O1xyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gc2hpcHBpbmdWYWwoYWRkcmVzcywgZW1haWwsIHRlbGVwaG9uZSlcclxuICAgIGlmKCBlcnJvck1lc3NhZ2UgKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogZXJyb3JNZXNzYWdlIH0pO1xyXG5cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoKHJlcSwgcmVzKTtcclxuICAgICAgICBjb25zdCBuZXdPcmRlciA9IG5ldyBPcmRlcnMoeyB1c2VyOiB1c2VyLl9pZCwgZW1haWwsIGFkZHJlc3MsIHRlbGVwaG9uZSwgY2FydCwgdG90YWx9KTtcclxuICAgICAgICBhd2FpdCBuZXdPcmRlci5zYXZlKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihuZXdPcmRlcilcclxuICAgIH0gY2F0Y2goIGVycm9yICkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHsgZXJyb3IgOiBlcnJvci5tZXNzYWdlIH0pXHJcbiAgICB9XHJcbn07XHJcblxyXG4iXSwibmFtZXMiOlsiT3JkZXJzIiwic2hpcHBpbmdWYWwiLCJEYl9jb25uZWN0IiwiYXV0aCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzZXRPcmRlciIsImdldE9yZGVycyIsInVzZXIiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJvcmRlcnMiLCJyb2xlIiwiZmluZCIsIl9pZCIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiZW1haWwiLCJhZGRyZXNzIiwidGVsZXBob25lIiwiY2FydCIsInRvdGFsIiwiYm9keSIsImVycm9yTWVzc2FnZSIsIm5ld09yZGVyIiwic2F2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/orders/index.js\n");

/***/ }),

/***/ "(api)/./utils/Db_connection.js":
/*!********************************!*\
  !*** ./utils/Db_connection.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Db_connect\": () => (/* binding */ Db_connect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Db_connect = ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n        console.log(\"Already connected\");\n        return;\n    }\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.DB_CONNECTION, ()=>{\n        console.log(\"connected to mongodb\");\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9EYl9jb25uZWN0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUV6QixNQUFNQyxVQUFVLEdBQUcsSUFBTTtJQUM1QixJQUFHRCwyRUFBa0MsRUFBQztRQUNsQ0ksT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNqQyxPQUFPO0tBQ1Y7SUFDREwsdURBQWdCLENBQUNPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxhQUFhLEVBQUUsSUFBTTtRQUM5Q0wsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7S0FDdEMsQ0FBQztDQUVMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZS1jb21tZXJjZS8uL3V0aWxzL0RiX2Nvbm5lY3Rpb24uanM/NjIzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERiX2Nvbm5lY3QgPSAoKSA9PiB7XHJcbiAgICBpZihtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnQWxyZWFkeSBjb25uZWN0ZWQnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52LkRCX0NPTk5FQ1RJT04sICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29ubmVjdGVkIHRvIG1vbmdvZGInKVxyXG4gICAgfSlcclxuXHJcbn0iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJEYl9jb25uZWN0IiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiREJfQ09OTkVDVElPTiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/Db_connection.js\n");

/***/ }),

/***/ "(api)/./utils/val.js":
/*!**********************!*\
  !*** ./utils/val.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginVal\": () => (/* binding */ loginVal),\n/* harmony export */   \"shippingVal\": () => (/* binding */ shippingVal),\n/* harmony export */   \"val\": () => (/* binding */ val)\n/* harmony export */ });\nconst val = (email, password, cf_password)=>{\n    if (!email || !password || !cf_password) {\n        return \"please add all fields!\";\n    }\n    if (!validateEmail(email)) {\n        return \"email is invalid\";\n    }\n    if (password.length < 6) {\n        return \"password must be at least 6 characters\";\n    }\n    if (password !== cf_password) {\n        return \"passwords are not the same\";\n    }\n};\nconst validateEmail = (email)=>{\n    return String(email).toLowerCase().match(/^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/);\n};\nconst loginVal = (email, password)=>{\n    if (!email || !password) {\n        return \"please add all fields!\";\n    }\n    if (!validateEmail(email)) {\n        return \"email is invalid\";\n    }\n    if (password.length < 6) {\n        return \"password must be at least 6 characters\";\n    }\n};\nconst shippingVal = (address, email, telephone)=>{\n    if (!email || !address || !telephone) {\n        return \"please add all fields!\";\n    }\n    if (!validateEmail(email)) {\n        return \"email is invalid\";\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy92YWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sTUFBTUEsR0FBRyxHQUFHLENBQUNDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEdBQUs7SUFDakQsSUFBSSxDQUFDRixLQUFLLElBQUksQ0FBQ0MsUUFBUSxJQUFJLENBQUNDLFdBQVcsRUFBQztRQUNwQyxPQUFPLHdCQUF3QjtLQUNsQztJQUNELElBQUcsQ0FBQ0MsYUFBYSxDQUFDSCxLQUFLLENBQUMsRUFBQztRQUNyQixPQUFPLGtCQUFrQjtLQUM1QjtJQUNELElBQUdDLFFBQVEsQ0FBQ0csTUFBTSxHQUFHLENBQUMsRUFBQztRQUNuQixPQUFPLHdDQUF3QztLQUNsRDtJQUNELElBQUdILFFBQVEsS0FBS0MsV0FBVyxFQUFDO1FBQ3hCLE9BQU8sNEJBQTRCO0tBQ3RDO0NBQ0osQ0FBQztBQUVGLE1BQU1DLGFBQWEsR0FBRyxDQUFDSCxLQUFLLEdBQUs7SUFDN0IsT0FBT0ssTUFBTSxDQUFDTCxLQUFLLENBQUMsQ0FDakJNLFdBQVcsRUFBRSxDQUNiQyxLQUFLLHlKQUVMLENBQUM7Q0FDUDtBQUVNLE1BQU1DLFFBQVEsR0FBRyxDQUFDUixLQUFLLEVBQUVDLFFBQVEsR0FBSztJQUN6QyxJQUFJLENBQUNELEtBQUssSUFBSSxDQUFDQyxRQUFRLEVBQUU7UUFDckIsT0FBTyx3QkFBd0I7S0FDbEM7SUFDRCxJQUFHLENBQUNFLGFBQWEsQ0FBQ0gsS0FBSyxDQUFDLEVBQUM7UUFDckIsT0FBTyxrQkFBa0I7S0FDNUI7SUFDRCxJQUFHQyxRQUFRLENBQUNHLE1BQU0sR0FBRyxDQUFDLEVBQUM7UUFDbkIsT0FBTyx3Q0FBd0M7S0FDbEQ7Q0FDSixDQUFDO0FBRUssTUFBTUssV0FBVyxHQUFHLENBQUNDLE9BQU8sRUFBRVYsS0FBSyxFQUFFVyxTQUFTLEdBQUs7SUFDdEQsSUFBSSxDQUFDWCxLQUFLLElBQUksQ0FBQ1UsT0FBTyxJQUFJLENBQUNDLFNBQVMsRUFBRTtRQUNsQyxPQUFPLHdCQUF3QjtLQUNsQztJQUNELElBQUksQ0FBQ1IsYUFBYSxDQUFDSCxLQUFLLENBQUMsRUFBRTtRQUN2QixPQUFPLGtCQUFrQjtLQUM1QjtDQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lLWNvbW1lcmNlLy4vdXRpbHMvdmFsLmpzP2IyM2IiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHZhbCA9IChlbWFpbCwgcGFzc3dvcmQsIGNmX3Bhc3N3b3JkKSA9PiB7XHJcbiAgICBpZiggIWVtYWlsIHx8ICFwYXNzd29yZCB8fCAhY2ZfcGFzc3dvcmQpe1xyXG4gICAgICAgIHJldHVybiBcInBsZWFzZSBhZGQgYWxsIGZpZWxkcyFcIlxyXG4gICAgfVxyXG4gICAgaWYoIXZhbGlkYXRlRW1haWwoZW1haWwpKXtcclxuICAgICAgICByZXR1cm4gXCJlbWFpbCBpcyBpbnZhbGlkXCJcclxuICAgIH1cclxuICAgIGlmKHBhc3N3b3JkLmxlbmd0aCA8IDYpe1xyXG4gICAgICAgIHJldHVybiBcInBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzXCJcclxuICAgIH1cclxuICAgIGlmKHBhc3N3b3JkICE9PSBjZl9wYXNzd29yZCl7XHJcbiAgICAgICAgcmV0dXJuIFwicGFzc3dvcmRzIGFyZSBub3QgdGhlIHNhbWVcIlxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgdmFsaWRhdGVFbWFpbCA9IChlbWFpbCkgPT4ge1xyXG4gICAgcmV0dXJuIFN0cmluZyhlbWFpbClcclxuICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgLm1hdGNoKFxyXG4gICAgICAgIC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL1xyXG4gICAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luVmFsID0gKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgaWYoICFlbWFpbCB8fCAhcGFzc3dvcmQgKXtcclxuICAgICAgICByZXR1cm4gXCJwbGVhc2UgYWRkIGFsbCBmaWVsZHMhXCJcclxuICAgIH1cclxuICAgIGlmKCF2YWxpZGF0ZUVtYWlsKGVtYWlsKSl7XHJcbiAgICAgICAgcmV0dXJuIFwiZW1haWwgaXMgaW52YWxpZFwiXHJcbiAgICB9XHJcbiAgICBpZihwYXNzd29yZC5sZW5ndGggPCA2KXtcclxuICAgICAgICByZXR1cm4gXCJwYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVyc1wiXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2hpcHBpbmdWYWwgPSAoYWRkcmVzcywgZW1haWwsIHRlbGVwaG9uZSkgPT4ge1xyXG4gICAgaWYoICFlbWFpbCB8fCAhYWRkcmVzcyB8fCAhdGVsZXBob25lKSB7IFxyXG4gICAgICAgIHJldHVybiBcInBsZWFzZSBhZGQgYWxsIGZpZWxkcyFcIlxyXG4gICAgfVxyXG4gICAgaWYoICF2YWxpZGF0ZUVtYWlsKGVtYWlsKSkge1xyXG4gICAgICAgIHJldHVybiBcImVtYWlsIGlzIGludmFsaWRcIlxyXG4gICAgfVxyXG59OyJdLCJuYW1lcyI6WyJ2YWwiLCJlbWFpbCIsInBhc3N3b3JkIiwiY2ZfcGFzc3dvcmQiLCJ2YWxpZGF0ZUVtYWlsIiwibGVuZ3RoIiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJtYXRjaCIsImxvZ2luVmFsIiwic2hpcHBpbmdWYWwiLCJhZGRyZXNzIiwidGVsZXBob25lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/val.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/orders/index.js"));
module.exports = __webpack_exports__;

})();