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
exports.id = "pages/api/users/changerole/[id]";
exports.ids = ["pages/api/users/changerole/[id]"];
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var models_UsersModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models/UsersModel */ \"(api)/./models/UsersModel.js\");\n\n\nasync function auth(req, res) {\n    const token = req.headers.authorization;\n    if (!token) return res.status(401).json({\n        error: \"unAthenticated user!\"\n    });\n    try {\n        const verify = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.ACCESS_TOKEN_SECRET);\n        if (!verify) return res.status(401).json({\n            error: \"invalid Token!\"\n        });\n        const userId = verify._id;\n        const user = await models_UsersModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            _id: userId\n        });\n        return user;\n    } catch (error) {\n        console.log(error.message);\n        return res.status(401).json({\n            error: \"please refresh the page and try again!\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9taWRkbGV3YXJlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBK0I7QUFDTztBQUV2QixlQUFlRSxJQUFJLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3pDLE1BQU1DLEtBQUssR0FBR0YsR0FBRyxDQUFDRyxPQUFPLENBQUNDLGFBQWE7SUFDdkMsSUFBRyxDQUFDRixLQUFLLEVBQUUsT0FBT0QsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBRTtRQUFFQyxLQUFLLEVBQUUsc0JBQXNCO0tBQUUsQ0FBRSxDQUFDO0lBRTVFLElBQUk7UUFDQSxNQUFNQyxNQUFNLEdBQUdYLDBEQUFVLENBQUNLLEtBQUssRUFBRU8sT0FBTyxDQUFDQyxHQUFHLENBQUNDLG1CQUFtQixDQUFDO1FBQ2pFLElBQUcsQ0FBQ0gsTUFBTSxFQUFFLE9BQU9QLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUU7WUFBRUMsS0FBSyxFQUFFLGdCQUFnQjtTQUFDLENBQUM7UUFFcEUsTUFBTUssTUFBTSxHQUFHSixNQUFNLENBQUNLLEdBQUc7UUFFekIsTUFBTUMsSUFBSSxHQUFHLE1BQU1oQixpRUFBYSxDQUFFO1lBQUVlLEdBQUcsRUFBR0QsTUFBTTtTQUFFLENBQUU7UUFFcEQsT0FBT0UsSUFBSTtLQUNkLENBQUMsT0FBT1AsS0FBSyxFQUFHO1FBQ2JTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVixLQUFLLENBQUNXLE9BQU8sQ0FBQztRQUMxQixPQUFPakIsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFDQyxLQUFLLEVBQUUsd0NBQXdDO1NBQUMsQ0FBQztLQUNqRjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZS1jb21tZXJjZS8uL21pZGRsZXdhcmVzL2F1dGguanM/ZTc3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcbmltcG9ydCBVc2VycyBmcm9tICdtb2RlbHMvVXNlcnNNb2RlbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBhdXRoKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb247XHJcbiAgICBpZighdG9rZW4pIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbiggeyBlcnJvcjogXCJ1bkF0aGVudGljYXRlZCB1c2VyIVwiIH0gKTtcclxuICAgIFxyXG4gICAgdHJ5IHsgXHJcbiAgICAgICAgY29uc3QgdmVyaWZ5ID0gand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuQUNDRVNTX1RPS0VOX1NFQ1JFVCk7XHJcbiAgICAgICAgaWYoIXZlcmlmeSkgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKCB7IGVycm9yOiBcImludmFsaWQgVG9rZW4hXCJ9KVxyXG5cclxuICAgICAgICBjb25zdCB1c2VySWQgPSB2ZXJpZnkuX2lkO1xyXG5cclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlcnMuZmluZE9uZSggeyBfaWQgOiB1c2VySWQgfSApO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIHVzZXJcclxuICAgIH0gY2F0Y2goIGVycm9yICkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHtlcnJvcjogJ3BsZWFzZSByZWZyZXNoIHRoZSBwYWdlIGFuZCB0cnkgYWdhaW4hJ30pXHJcbiAgICB9ICAgXHJcbn1cclxuIl0sIm5hbWVzIjpbImp3dCIsIlVzZXJzIiwiYXV0aCIsInJlcSIsInJlcyIsInRva2VuIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJ2ZXJpZnkiLCJwcm9jZXNzIiwiZW52IiwiQUNDRVNTX1RPS0VOX1NFQ1JFVCIsInVzZXJJZCIsIl9pZCIsInVzZXIiLCJmaW5kT25lIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./middlewares/auth.js\n");

/***/ }),

/***/ "(api)/./models/UsersModel.js":
/*!******************************!*\
  !*** ./models/UsersModel.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst schema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    email: {\n        type: String,\n        required: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    root: {\n        type: Boolean,\n        default: false\n    },\n    date: {\n        type: Date,\n        default: Date.now()\n    },\n    role: {\n        type: String,\n        default: \"user\"\n    },\n    avatar: {\n        type: String,\n        default: \"https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y\"\n    }\n}, {\n    timestamps: true\n});\nlet Dataset = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Users) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Users\", schema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dataset);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlcnNNb2RlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFlLENBQUM7SUFDL0JHLEtBQUssRUFBRztRQUNKQyxJQUFJLEVBQUdDLE1BQU07UUFDYkMsUUFBUSxFQUFHLElBQUk7S0FDbEI7SUFDREMsUUFBUSxFQUFHO1FBQ1BILElBQUksRUFBR0MsTUFBTTtRQUNiQyxRQUFRLEVBQUcsSUFBSTtLQUNsQjtJQUNERSxJQUFJLEVBQUU7UUFDRkosSUFBSSxFQUFHSyxPQUFPO1FBQ2RDLE9BQU8sRUFBRyxLQUFLO0tBQ2xCO0lBQ0RDLElBQUksRUFBRTtRQUNGUCxJQUFJLEVBQUdRLElBQUk7UUFDWEYsT0FBTyxFQUFHRSxJQUFJLENBQUNDLEdBQUcsRUFBRTtLQUN2QjtJQUNEQyxJQUFJLEVBQUc7UUFDSFYsSUFBSSxFQUFHQyxNQUFNO1FBQ2JLLE9BQU8sRUFBRyxNQUFNO0tBQ25CO0lBQ0RLLE1BQU0sRUFBRztRQUNMWCxJQUFJLEVBQUdDLE1BQU07UUFDYkssT0FBTyxFQUFHLDJFQUEyRTtLQUN4RjtDQUVKLEVBQUM7SUFDRU0sVUFBVSxFQUFHLElBQUk7Q0FDcEIsQ0FBQztBQUVGLElBQUlDLE9BQU8sR0FBR2pCLDhEQUFxQixJQUFJQSxxREFBYyxDQUFDLE9BQU8sRUFBRUMsTUFBTSxDQUFDO0FBRXRFLGlFQUFlZ0IsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZS1jb21tZXJjZS8uL21vZGVscy9Vc2Vyc01vZGVsLmpzPzFhM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3Qgc2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICBlbWFpbCA6IHtcclxuICAgICAgICB0eXBlIDogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkIDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkIDoge1xyXG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQgOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgcm9vdDogeyBcclxuICAgICAgICB0eXBlIDogQm9vbGVhbixcclxuICAgICAgICBkZWZhdWx0IDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBkYXRlOiB7XHJcbiAgICAgICAgdHlwZSA6IERhdGUsXHJcbiAgICAgICAgZGVmYXVsdCA6IERhdGUubm93KClcclxuICAgIH0sXHJcbiAgICByb2xlIDoge1xyXG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdCA6ICd1c2VyJ1xyXG4gICAgfSxcclxuICAgIGF2YXRhciA6IHtcclxuICAgICAgICB0eXBlIDogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQgOiBcImh0dHBzOi8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA/ZD1tcCZmPXlcIlxyXG4gICAgfVxyXG5cclxufSx7XHJcbiAgICB0aW1lc3RhbXBzIDogdHJ1ZVxyXG59KTtcclxuXHJcbmxldCBEYXRhc2V0ID0gbW9uZ29vc2UubW9kZWxzLlVzZXJzIHx8IG1vbmdvb3NlLm1vZGVsKCdVc2VycycsIHNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhc2V0OyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInNjaGVtYSIsIlNjaGVtYSIsImVtYWlsIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJyb290IiwiQm9vbGVhbiIsImRlZmF1bHQiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsInJvbGUiLCJhdmF0YXIiLCJ0aW1lc3RhbXBzIiwiRGF0YXNldCIsIm1vZGVscyIsIlVzZXJzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/UsersModel.js\n");

/***/ }),

/***/ "(api)/./pages/api/users/changerole/[id].js":
/*!********************************************!*\
  !*** ./pages/api/users/changerole/[id].js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var utils_Db_connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/Db_connection */ \"(api)/./utils/Db_connection.js\");\n/* harmony import */ var models_UsersModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models/UsersModel */ \"(api)/./models/UsersModel.js\");\n/* harmony import */ var middlewares_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! middlewares/auth */ \"(api)/./middlewares/auth.js\");\n\n\n\n(0,utils_Db_connection__WEBPACK_IMPORTED_MODULE_0__.Db_connect)();\nfunction handler(req, res) {\n    switch(req.method){\n        case \"PATCH\":\n            updateuser(req, res);\n    }\n};\n;\nasync function updateuser(req, res) {\n    const { id  } = req.query;\n    const { isAdmin  } = req.body;\n    console.log(isAdmin);\n    const user = await (0,middlewares_auth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(req, res);\n    if (user.role !== \"admin\" || user.role === \"admin\" && !user.root) return res.status(401).json({\n        error: \"authentication error\"\n    });\n    await models_UsersModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOneAndUpdate({\n        _id: id\n    }, {\n        role: isAdmin ? \"admin\" : \"user\"\n    });\n    res.status(200).json({\n        success: \"user role updated\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvY2hhbmdlcm9sZS9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBaUQ7QUFDWDtBQUNGO0FBRXBDQSwrREFBVSxFQUFFLENBQUM7QUFFRSxTQUFTRyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3RDLE9BQU9ELEdBQUcsQ0FBQ0UsTUFBTTtRQUNiLEtBQUssT0FBTztZQUNSQyxVQUFVLENBQUNILEdBQUcsRUFBRUMsR0FBRyxDQUFDLENBQUM7S0FDNUI7Q0FDSjs7QUFFRCxlQUFlRSxVQUFVLENBQUNILEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ2hDLE1BQU0sRUFBRUcsRUFBRSxHQUFFLEdBQUdKLEdBQUcsQ0FBQ0ssS0FBSztJQUN4QixNQUFNLEVBQUVDLE9BQU8sR0FBRSxHQUFHTixHQUFHLENBQUNPLElBQUk7SUFDNUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxPQUFPLENBQUM7SUFDcEIsTUFBTUksSUFBSSxHQUFHLE1BQU1aLDREQUFJLENBQUNFLEdBQUcsRUFBRUMsR0FBRyxDQUFDO0lBQ2pDLElBQUdTLElBQUksQ0FBQ0MsSUFBSSxLQUFLLE9BQU8sSUFBSUQsSUFBSSxDQUFDQyxJQUFJLEtBQUssT0FBTyxJQUFJLENBQUNELElBQUksQ0FBQ0UsSUFBSSxFQUFFLE9BQU9YLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUMsS0FBSyxFQUFFLHNCQUFzQjtLQUFDLENBQUM7SUFFOUgsTUFBTWxCLDBFQUFzQixDQUFDO1FBQUVvQixHQUFHLEVBQUdiLEVBQUU7S0FBRSxFQUFFO1FBQ3ZDTyxJQUFJLEVBQUdMLE9BQU8sR0FBRyxPQUFPLEdBQUcsTUFBTTtLQUNwQyxDQUFDLENBQUM7SUFJSEwsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBRTtRQUFFSSxPQUFPLEVBQUUsbUJBQW1CO0tBQUUsQ0FBQztDQUMxRCIsInNvdXJjZXMiOlsid2VicGFjazovL2UtY29tbWVyY2UvLi9wYWdlcy9hcGkvdXNlcnMvY2hhbmdlcm9sZS9baWRdLmpzPzFlOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGJfY29ubmVjdCB9IGZyb20gXCJ1dGlscy9EYl9jb25uZWN0aW9uXCI7XHJcbmltcG9ydCBVc2VycyBmcm9tICdtb2RlbHMvVXNlcnNNb2RlbCc7XHJcbmltcG9ydCBhdXRoIGZyb20gJ21pZGRsZXdhcmVzL2F1dGgnO1xyXG5cclxuRGJfY29ubmVjdCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgc3dpdGNoKHJlcS5tZXRob2QpeyBcclxuICAgICAgICBjYXNlICdQQVRDSCc6IFxyXG4gICAgICAgICAgICB1cGRhdGV1c2VyKHJlcSwgcmVzKTtcclxuICAgIH1cclxufTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZXVzZXIocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5xdWVyeTtcclxuICAgIGNvbnN0IHsgaXNBZG1pbiB9ID0gcmVxLmJvZHk7XHJcbiAgICBjb25zb2xlLmxvZyhpc0FkbWluKVxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGF1dGgocmVxLCByZXMpO1xyXG4gICAgaWYodXNlci5yb2xlICE9PSAnYWRtaW4nIHx8IHVzZXIucm9sZSA9PT0gJ2FkbWluJyAmJiAhdXNlci5yb290KSByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnJvcjogJ2F1dGhlbnRpY2F0aW9uIGVycm9yJ30pXHJcblxyXG4gICAgYXdhaXQgVXNlcnMuZmluZE9uZUFuZFVwZGF0ZSh7IF9pZCA6IGlkIH0sIHtcclxuICAgICAgICByb2xlIDogaXNBZG1pbiA/ICdhZG1pbicgOiAndXNlcidcclxuICAgIH0pO1xyXG5cclxuICAgIFxyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKCB7IHN1Y2Nlc3M6IFwidXNlciByb2xlIHVwZGF0ZWRcIiB9KVxyXG59Il0sIm5hbWVzIjpbIkRiX2Nvbm5lY3QiLCJVc2VycyIsImF1dGgiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwidXBkYXRldXNlciIsImlkIiwicXVlcnkiLCJpc0FkbWluIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwicm9sZSIsInJvb3QiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJmaW5kT25lQW5kVXBkYXRlIiwiX2lkIiwic3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/changerole/[id].js\n");

/***/ }),

/***/ "(api)/./utils/Db_connection.js":
/*!********************************!*\
  !*** ./utils/Db_connection.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Db_connect\": () => (/* binding */ Db_connect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Db_connect = ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n        console.log(\"Already connected\");\n        return;\n    }\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.DB_CONNECTION, ()=>{\n        console.log(\"connected to mongodb\");\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9EYl9jb25uZWN0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUV6QixNQUFNQyxVQUFVLEdBQUcsSUFBTTtJQUM1QixJQUFHRCwyRUFBa0MsRUFBQztRQUNsQ0ksT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNqQyxPQUFPO0tBQ1Y7SUFDREwsdURBQWdCLENBQUNPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxhQUFhLEVBQUUsSUFBTTtRQUM5Q0wsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7S0FDdEMsQ0FBQztDQUVMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZS1jb21tZXJjZS8uL3V0aWxzL0RiX2Nvbm5lY3Rpb24uanM/NjIzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERiX2Nvbm5lY3QgPSAoKSA9PiB7XHJcbiAgICBpZihtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnQWxyZWFkeSBjb25uZWN0ZWQnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52LkRCX0NPTk5FQ1RJT04sICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29ubmVjdGVkIHRvIG1vbmdvZGInKVxyXG4gICAgfSlcclxuXHJcbn0iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJEYl9jb25uZWN0IiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiREJfQ09OTkVDVElPTiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/Db_connection.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/changerole/[id].js"));
module.exports = __webpack_exports__;

})();