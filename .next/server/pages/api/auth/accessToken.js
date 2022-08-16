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
exports.id = "pages/api/auth/accessToken";
exports.ids = ["pages/api/auth/accessToken"];
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

/***/ "(api)/./models/UsersModel.js":
/*!******************************!*\
  !*** ./models/UsersModel.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst schema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    email: {\n        type: String,\n        required: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    root: {\n        type: Boolean,\n        default: false\n    },\n    date: {\n        type: Date,\n        default: Date.now()\n    },\n    role: {\n        type: String,\n        default: \"user\"\n    },\n    avatar: {\n        type: String,\n        default: \"https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y\"\n    }\n}, {\n    timestamps: true\n});\nlet Dataset = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Users) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Users\", schema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dataset);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlcnNNb2RlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFlLENBQUM7SUFDL0JHLEtBQUssRUFBRztRQUNKQyxJQUFJLEVBQUdDLE1BQU07UUFDYkMsUUFBUSxFQUFHLElBQUk7S0FDbEI7SUFDREMsUUFBUSxFQUFHO1FBQ1BILElBQUksRUFBR0MsTUFBTTtRQUNiQyxRQUFRLEVBQUcsSUFBSTtLQUNsQjtJQUNERSxJQUFJLEVBQUU7UUFDRkosSUFBSSxFQUFHSyxPQUFPO1FBQ2RDLE9BQU8sRUFBRyxLQUFLO0tBQ2xCO0lBQ0RDLElBQUksRUFBRTtRQUNGUCxJQUFJLEVBQUdRLElBQUk7UUFDWEYsT0FBTyxFQUFHRSxJQUFJLENBQUNDLEdBQUcsRUFBRTtLQUN2QjtJQUNEQyxJQUFJLEVBQUc7UUFDSFYsSUFBSSxFQUFHQyxNQUFNO1FBQ2JLLE9BQU8sRUFBRyxNQUFNO0tBQ25CO0lBQ0RLLE1BQU0sRUFBRztRQUNMWCxJQUFJLEVBQUdDLE1BQU07UUFDYkssT0FBTyxFQUFHLDJFQUEyRTtLQUN4RjtDQUVKLEVBQUM7SUFDRU0sVUFBVSxFQUFHLElBQUk7Q0FDcEIsQ0FBQztBQUVGLElBQUlDLE9BQU8sR0FBR2pCLDhEQUFxQixJQUFJQSxxREFBYyxDQUFDLE9BQU8sRUFBRUMsTUFBTSxDQUFDO0FBRXRFLGlFQUFlZ0IsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZS1jb21tZXJjZS8uL21vZGVscy9Vc2Vyc01vZGVsLmpzPzFhM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3Qgc2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICBlbWFpbCA6IHtcclxuICAgICAgICB0eXBlIDogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkIDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkIDoge1xyXG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQgOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgcm9vdDogeyBcclxuICAgICAgICB0eXBlIDogQm9vbGVhbixcclxuICAgICAgICBkZWZhdWx0IDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBkYXRlOiB7XHJcbiAgICAgICAgdHlwZSA6IERhdGUsXHJcbiAgICAgICAgZGVmYXVsdCA6IERhdGUubm93KClcclxuICAgIH0sXHJcbiAgICByb2xlIDoge1xyXG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdCA6ICd1c2VyJ1xyXG4gICAgfSxcclxuICAgIGF2YXRhciA6IHtcclxuICAgICAgICB0eXBlIDogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQgOiBcImh0dHBzOi8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA/ZD1tcCZmPXlcIlxyXG4gICAgfVxyXG5cclxufSx7XHJcbiAgICB0aW1lc3RhbXBzIDogdHJ1ZVxyXG59KTtcclxuXHJcbmxldCBEYXRhc2V0ID0gbW9uZ29vc2UubW9kZWxzLlVzZXJzIHx8IG1vbmdvb3NlLm1vZGVsKCdVc2VycycsIHNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhc2V0OyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInNjaGVtYSIsIlNjaGVtYSIsImVtYWlsIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJyb290IiwiQm9vbGVhbiIsImRlZmF1bHQiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsInJvbGUiLCJhdmF0YXIiLCJ0aW1lc3RhbXBzIiwiRGF0YXNldCIsIm1vZGVscyIsIlVzZXJzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/UsersModel.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/accessToken.js":
/*!***************************************!*\
  !*** ./pages/api/auth/accessToken.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var utils_Db_connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/Db_connection */ \"(api)/./utils/Db_connection.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var utils_tokenGenerate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/tokenGenerate */ \"(api)/./utils/tokenGenerate.js\");\n/* harmony import */ var models_UsersModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! models/UsersModel */ \"(api)/./models/UsersModel.js\");\n\n\n\n\n(0,utils_Db_connection__WEBPACK_IMPORTED_MODULE_0__.Db_connect)();\nasync function handler(req, res) {\n    try {\n        const rf_token = req.cookies.refreshToken;\n        if (!rf_token) return res.status(401).json({\n            error: \"please login first\"\n        });\n        const validToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(rf_token, process.env.REFRESH_TOKEN_SECRET);\n        if (!validToken) return res.status(401).json({\n            error: \"invalid token\"\n        });\n        const user = await models_UsersModel__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findById(validToken._id);\n        if (!user) return res.status(400).json({\n            error: \"user not found\"\n        });\n        const access_token = (0,utils_tokenGenerate__WEBPACK_IMPORTED_MODULE_2__.accessToken)(user);\n        return res.status(200).json({\n            access_token,\n            user\n        });\n    } catch (error) {\n        return res.status(400).json({\n            error: error.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9hY2Nlc3NUb2tlbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUQ7QUFDbEI7QUFDbUI7QUFDWjtBQUV0Q0EsK0RBQVUsRUFBRSxDQUFDO0FBRUUsZUFBZUksT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxJQUFJO1FBQ0EsTUFBTUMsUUFBUSxHQUFHRixHQUFHLENBQUNHLE9BQU8sQ0FBQ0MsWUFBWTtRQUV6QyxJQUFHLENBQUNGLFFBQVEsRUFBRSxPQUFPRCxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUNDLEtBQUssRUFBRSxvQkFBb0I7U0FBQyxDQUFDLENBQUM7UUFFekUsTUFBTUMsVUFBVSxHQUFHWiwwREFBVSxDQUFDTSxRQUFRLEVBQUVRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxvQkFBb0IsQ0FBQztRQUN6RSxJQUFHLENBQUNKLFVBQVUsRUFBRSxPQUFPUCxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFFO1lBQUVDLEtBQUssRUFBRSxlQUFlO1NBQUUsQ0FBRSxDQUFDO1FBRzFFLE1BQU1NLElBQUksR0FBRyxNQUFNZixrRUFBYyxDQUFDVSxVQUFVLENBQUNPLEdBQUcsQ0FBQztRQUNqRCxJQUFHLENBQUNGLElBQUksRUFBRSxPQUFPWixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUssRUFBRyxnQkFBZ0I7U0FBQyxDQUFDLENBQUM7UUFHbkUsTUFBTVMsWUFBWSxHQUFHbkIsZ0VBQVcsQ0FBQ2dCLElBQUksQ0FBQztRQUN0QyxPQUFPWixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQ3hCVSxZQUFZO1lBQ1pILElBQUk7U0FDUCxDQUFDO0tBQ0wsQ0FBQyxPQUFNTixLQUFLLEVBQUM7UUFDVixPQUFPTixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUssRUFBR0EsS0FBSyxDQUFDVSxPQUFPO1NBQUUsQ0FBQztLQUN6RDtDQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZS1jb21tZXJjZS8uL3BhZ2VzL2FwaS9hdXRoL2FjY2Vzc1Rva2VuLmpzPzlmNGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGJfY29ubmVjdCB9IGZyb20gXCJ1dGlscy9EYl9jb25uZWN0aW9uXCI7XHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IHsgYWNjZXNzVG9rZW4gfSBmcm9tIFwidXRpbHMvdG9rZW5HZW5lcmF0ZVwiO1xyXG5pbXBvcnQgVXNlcnMgZnJvbSAnbW9kZWxzL1VzZXJzTW9kZWwnO1xyXG5cclxuRGJfY29ubmVjdCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZl90b2tlbiA9IHJlcS5jb29raWVzLnJlZnJlc2hUb2tlbjtcclxuICAgICAgICBcclxuICAgICAgICBpZighcmZfdG9rZW4pIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7ZXJyb3I6IFwicGxlYXNlIGxvZ2luIGZpcnN0XCJ9KTtcclxuXHJcbiAgICAgICAgY29uc3QgdmFsaWRUb2tlbiA9IGp3dC52ZXJpZnkocmZfdG9rZW4sIHByb2Nlc3MuZW52LlJFRlJFU0hfVE9LRU5fU0VDUkVUKVxyXG4gICAgICAgIGlmKCF2YWxpZFRva2VuKSByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oIHsgZXJyb3I6ICdpbnZhbGlkIHRva2VuJyB9ICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJzLmZpbmRCeUlkKHZhbGlkVG9rZW4uX2lkKVxyXG4gICAgICAgIGlmKCF1c2VyKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvciA6IFwidXNlciBub3QgZm91bmRcIn0pO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBjb25zdCBhY2Nlc3NfdG9rZW4gPSBhY2Nlc3NUb2tlbih1c2VyKTtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBcclxuICAgICAgICAgICAgYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICB1c2VyXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yIDogZXJyb3IubWVzc2FnZSB9KVxyXG4gICAgfVxyXG5cclxufSJdLCJuYW1lcyI6WyJEYl9jb25uZWN0Iiwiand0IiwiYWNjZXNzVG9rZW4iLCJVc2VycyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJyZl90b2tlbiIsImNvb2tpZXMiLCJyZWZyZXNoVG9rZW4iLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJ2YWxpZFRva2VuIiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsIlJFRlJFU0hfVE9LRU5fU0VDUkVUIiwidXNlciIsImZpbmRCeUlkIiwiX2lkIiwiYWNjZXNzX3Rva2VuIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/accessToken.js\n");

/***/ }),

/***/ "(api)/./utils/Db_connection.js":
/*!********************************!*\
  !*** ./utils/Db_connection.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Db_connect\": () => (/* binding */ Db_connect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Db_connect = ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n        console.log(\"Already connected\");\n        return;\n    }\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.DB_CONNECTION, ()=>{\n        console.log(\"connected to mongodb\");\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9EYl9jb25uZWN0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUV6QixNQUFNQyxVQUFVLEdBQUcsSUFBTTtJQUM1QixJQUFHRCwyRUFBa0MsRUFBQztRQUNsQ0ksT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNqQyxPQUFPO0tBQ1Y7SUFDREwsdURBQWdCLENBQUNPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxhQUFhLEVBQUUsSUFBTTtRQUM5Q0wsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7S0FDdEMsQ0FBQztDQUVMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZS1jb21tZXJjZS8uL3V0aWxzL0RiX2Nvbm5lY3Rpb24uanM/NjIzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERiX2Nvbm5lY3QgPSAoKSA9PiB7XHJcbiAgICBpZihtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnQWxyZWFkeSBjb25uZWN0ZWQnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52LkRCX0NPTk5FQ1RJT04sICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29ubmVjdGVkIHRvIG1vbmdvZGInKVxyXG4gICAgfSlcclxuXHJcbn0iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJEYl9jb25uZWN0IiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiREJfQ09OTkVDVElPTiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/Db_connection.js\n");

/***/ }),

/***/ "(api)/./utils/tokenGenerate.js":
/*!********************************!*\
  !*** ./utils/tokenGenerate.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"accessToken\": () => (/* binding */ accessToken),\n/* harmony export */   \"refreshToken\": () => (/* binding */ refreshToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst refreshToken = (payload)=>{\n    const refreshtoken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({\n        _id: payload._id\n    }, process.env.REFRESH_TOKEN_SECRET, {\n        expiresIn: \"7d\"\n    });\n    return refreshtoken;\n};\nconst accessToken = (payload)=>{\n    const accesstoken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({\n        _id: payload._id\n    }, process.env.ACCESS_TOKEN_SECRET, {\n        expiresIn: \"15min\"\n    });\n    return accesstoken;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy90b2tlbkdlbmVyYXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBK0I7QUFHeEIsTUFBTUMsWUFBWSxHQUFHLENBQUVDLE9BQU8sR0FBTTtJQUN2QyxNQUFNQyxZQUFZLEdBQUlILHdEQUFRLENBQUM7UUFBQ0ssR0FBRyxFQUFHSCxPQUFPLENBQUNHLEdBQUc7S0FBQyxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0Msb0JBQW9CLEVBQUU7UUFBRUMsU0FBUyxFQUFHLElBQUk7S0FBQyxDQUFDO0lBQzFHLE9BQU9OLFlBQVk7Q0FDdEIsQ0FBQztBQUVLLE1BQU1PLFdBQVcsR0FBRyxDQUFFUixPQUFPLEdBQU07SUFDdEMsTUFBTVMsV0FBVyxHQUFJWCx3REFBUSxDQUFDO1FBQUNLLEdBQUcsRUFBR0gsT0FBTyxDQUFDRyxHQUFHO0tBQUMsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNLLG1CQUFtQixFQUFFO1FBQUVILFNBQVMsRUFBRyxPQUFPO0tBQUMsQ0FBQztJQUMzRyxPQUFRRSxXQUFXO0NBQ3RCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZS1jb21tZXJjZS8uL3V0aWxzL3Rva2VuR2VuZXJhdGUuanM/N2NlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZnJlc2hUb2tlbiA9ICggcGF5bG9hZCApID0+IHtcclxuICAgIGNvbnN0IHJlZnJlc2h0b2tlbiA9ICBqd3Quc2lnbih7X2lkIDogcGF5bG9hZC5faWR9LCBwcm9jZXNzLmVudi5SRUZSRVNIX1RPS0VOX1NFQ1JFVCwgeyBleHBpcmVzSW4gOiAnN2QnfSlcclxuICAgIHJldHVybiByZWZyZXNodG9rZW5cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhY2Nlc3NUb2tlbiA9ICggcGF5bG9hZCApID0+IHtcclxuICAgIGNvbnN0IGFjY2Vzc3Rva2VuID0gIGp3dC5zaWduKHtfaWQgOiBwYXlsb2FkLl9pZH0sIHByb2Nlc3MuZW52LkFDQ0VTU19UT0tFTl9TRUNSRVQsIHsgZXhwaXJlc0luIDogJzE1bWluJ30pXHJcbiAgICByZXR1cm4gIGFjY2Vzc3Rva2VuXHJcbn0iXSwibmFtZXMiOlsiand0IiwicmVmcmVzaFRva2VuIiwicGF5bG9hZCIsInJlZnJlc2h0b2tlbiIsInNpZ24iLCJfaWQiLCJwcm9jZXNzIiwiZW52IiwiUkVGUkVTSF9UT0tFTl9TRUNSRVQiLCJleHBpcmVzSW4iLCJhY2Nlc3NUb2tlbiIsImFjY2Vzc3Rva2VuIiwiQUNDRVNTX1RPS0VOX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/tokenGenerate.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/accessToken.js"));
module.exports = __webpack_exports__;

})();