"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/categories",{

/***/ "./pages/categories/index.js":
/*!***********************************!*\
  !*** ./pages/categories/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var utils_fetchData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/fetchData */ \"./utils/fetchData.js\");\n/* harmony import */ var store_Actiontypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/Actiontypes */ \"./store/Actiontypes.js\");\n\n\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Categories = function() {\n    var _this1 = _this;\n    _s();\n    var catInp = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    var ref = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function(state) {\n        return state;\n    }), auth = ref.auth, categories = ref.categories;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), name = ref1[0], setName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), id = ref2[0], setId = ref2[1];\n    if (!auth || auth.user && auth.user.role !== \"admin\") return null;\n    var handleClick = function() {\n        if (auth.user && auth.user.role !== \"admin\") return dispatch({\n            type: \"NOTIFY\",\n            payload: {\n                error: \"Only admins can add/update categories\"\n            }\n        });\n        if (id) {\n            (0,utils_fetchData__WEBPACK_IMPORTED_MODULE_3__.putData)(\"/api/categories/modify/\".concat(id), {\n                name: name\n            }, auth.access_token).then(function(response) {\n                return response.json();\n            }).then(function(result) {\n                if (result.error) return dispatch({\n                    type: \"NOTIFY\",\n                    payload: result\n                });\n                dispatch((0,store_Actiontypes__WEBPACK_IMPORTED_MODULE_4__.updateItem)(categories, id, (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, result), {\n                    name: name\n                }), \"ADD_CAT\"));\n            });\n        } else {\n            (0,utils_fetchData__WEBPACK_IMPORTED_MODULE_3__.postData)(\"/api/categories\", {\n                name: name\n            }, auth.access_token).then(function(response) {\n                return response.json();\n            }).then(function(result) {\n                if (result.error) return dispatch({\n                    type: \"NOTIFY\",\n                    payload: result\n                });\n                dispatch({\n                    type: \"ADD_CAT\",\n                    payload: (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(categories).concat([\n                        result\n                    ])\n                });\n                setName(\"\");\n            });\n        }\n    };\n    var addCat = function() {\n        setId(\"\");\n        setName(\"\");\n        catInp.current.focus();\n    };\n    var handleChange = function(e) {\n        setName(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container cats\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-md-8 my-4 mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-group text-center d-flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                ref: catInp,\n                                type: \"text\",\n                                name: \"category\",\n                                value: name,\n                                className: \"form-control\",\n                                onChange: handleChange,\n                                placeholder: \"category name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-secondary\",\n                                onClick: handleClick,\n                                children: id ? \"Update\" : \"Create\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, _this),\n                    categories && categories.map(function(category) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"card-body d-flex justify-content-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: category.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 33\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: function() {\n                                                    setId(category._id);\n                                                    setName(category.name);\n                                                },\n                                                className: \"btn btn-primary\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                    className: \"text-white fas fa-edit\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 37\n                                                }, _this1)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n                                                lineNumber: 59,\n                                                columnNumber: 37\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                \"data-toggle\": \"modal\",\n                                                \"data-target\": \"#exampleModal\",\n                                                onClick: function() {\n                                                    return dispatch({\n                                                        type: \"MODAL\",\n                                                        payload: {\n                                                            title: category.name,\n                                                            state: categories,\n                                                            item: category,\n                                                            actionType: \"ADD_CAT\",\n                                                            auth: auth\n                                                        }\n                                                    });\n                                                },\n                                                className: \"btn btn-danger ml-3\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                    className: \"text-white fas fa-trash-alt\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 37\n                                                }, _this1)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n                                                lineNumber: 62,\n                                                columnNumber: 37\n                                            }, _this1)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 33\n                                    }, _this1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n                                lineNumber: 56,\n                                columnNumber: 29\n                            }, _this1)\n                        }, category._id, false, {\n                            fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n                            lineNumber: 55,\n                            columnNumber: 25\n                        }, _this1);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row my-3 d-flex justify-content-center align-items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn btn-success\",\n                    onClick: addCat,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"text-white fas fa-plus\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n                        lineNumber: 72,\n                        columnNumber: 69\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n                    lineNumber: 72,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, _this);\n};\n_s(Categories, \"pliHy4z+jVLQqlmu3xGbhW2Am5A=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n_c = Categories;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Categories);\nvar _c;\n$RefreshReg$(_c, \"Categories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLFVBQVU7QUF3RWhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2F0ZWdvcmllcy9pbmRleC5qcz9hZDcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcG9zdERhdGEsIHB1dERhdGEgfSBmcm9tICd1dGlscy9mZXRjaERhdGEnO1xyXG5pbXBvcnQgeyB1cGRhdGVJdGVtIH0gZnJvbSAnc3RvcmUvQWN0aW9udHlwZXMnO1xyXG5cclxuY29uc3QgQ2F0ZWdvcmllcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNhdElucCA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBhdXRoLCBjYXRlZ29yaWVzIH0gPSB1c2VTZWxlY3Rvciggc3RhdGUgPT4gc3RhdGUgKTtcclxuICAgIGNvbnN0IFsgbmFtZSwgc2V0TmFtZSBdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgWyBpZCwgc2V0SWQgXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGlmKCAhYXV0aCB8fCBhdXRoLnVzZXIgJiYgYXV0aC51c2VyLnJvbGUgIT09ICdhZG1pbicgKSByZXR1cm4gbnVsbDtcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCBhdXRoLnVzZXIgJiYgYXV0aC51c2VyLnJvbGUgIT09ICdhZG1pbicgKSByZXR1cm4gZGlzcGF0Y2goIHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogJ09ubHkgYWRtaW5zIGNhbiBhZGQvdXBkYXRlIGNhdGVnb3JpZXMnfX0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGlkKSB7IFxyXG4gICAgICAgICAgICBwdXREYXRhKGAvYXBpL2NhdGVnb3JpZXMvbW9kaWZ5LyR7aWR9YCwgeyBuYW1lIH0sIGF1dGguYWNjZXNzX3Rva2VuKVxyXG4gICAgICAgICAgICAudGhlbiggcmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbiggcmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5lcnJvcikgcmV0dXJuIGRpc3BhdGNoKCB7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiByZXN1bHR9KTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHVwZGF0ZUl0ZW0oY2F0ZWdvcmllcywgaWQsIHsuLi5yZXN1bHQsIG5hbWV9LCAnQUREX0NBVCcpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBvc3REYXRhKCcvYXBpL2NhdGVnb3JpZXMnLCB7IG5hbWUgfSwgYXV0aC5hY2Nlc3NfdG9rZW4pXHJcbiAgICAgICAgICAgICAgICAudGhlbiggcmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0LmVycm9yKSByZXR1cm4gZGlzcGF0Y2goIHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHJlc3VsdH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCB7IHR5cGU6ICdBRERfQ0FUJywgcGF5bG9hZDogWy4uLmNhdGVnb3JpZXMsIHJlc3VsdF0gfSlcclxuICAgICAgICAgICAgICAgICAgICBzZXROYW1lKCcnKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGFkZENhdCA9ICgpID0+IHtcclxuICAgICAgICBzZXRJZCgnJyk7XHJcbiAgICAgICAgc2V0TmFtZSgnJyk7XHJcbiAgICAgICAgY2F0SW5wLmN1cnJlbnQuZm9jdXMoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0TmFtZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2F0c1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04IG15LTQgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHRleHQtY2VudGVyIGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9e2NhdElucH0gdHlwZT1cInRleHRcIiBuYW1lPVwiY2F0ZWdvcnlcIiB2YWx1ZT17bmFtZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9XCJjYXRlZ29yeSBuYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PnsgaWQgPyBcIlVwZGF0ZVwiIDogXCJDcmVhdGVcIiB9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzICYmIFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMubWFwKCBjYXRlZ29yeSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjYXRlZ29yeS5faWR9IGNsYXNzTmFtZT0nY2FyZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2F0ZWdvcnkubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgb25DbGljaz17KCkgPT4geyBzZXRJZChjYXRlZ29yeS5faWQpOyBzZXROYW1lKGNhdGVnb3J5Lm5hbWUpIH19IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZhcyBmYS1lZGl0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZXhhbXBsZU1vZGFsXCIgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnTU9EQUwnLCBwYXlsb2FkOiB7dGl0bGUgOiBjYXRlZ29yeS5uYW1lLCBzdGF0ZTogY2F0ZWdvcmllcywgaXRlbTogY2F0ZWdvcnksIGFjdGlvblR5cGU6ICdBRERfQ0FUJywgYXV0aCB9fSl9IGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIG1sLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmYXMgZmEtdHJhc2gtYWx0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXktMyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCJvbkNsaWNrPXthZGRDYXR9PjxpIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZmFzIGZhLXBsdXNcIiA+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcmllczsiXSwibmFtZXMiOlsidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwidXNlUmVmIiwicG9zdERhdGEiLCJwdXREYXRhIiwidXBkYXRlSXRlbSIsIkNhdGVnb3JpZXMiLCJjYXRJbnAiLCJkaXNwYXRjaCIsInN0YXRlIiwiYXV0aCIsImNhdGVnb3JpZXMiLCJuYW1lIiwic2V0TmFtZSIsImlkIiwic2V0SWQiLCJ1c2VyIiwicm9sZSIsImhhbmRsZUNsaWNrIiwidHlwZSIsInBheWxvYWQiLCJlcnJvciIsImFjY2Vzc190b2tlbiIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJhZGRDYXQiLCJjdXJyZW50IiwiZm9jdXMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInJlZiIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwiY2F0ZWdvcnkiLCJzcGFuIiwiX2lkIiwiaSIsImRhdGEtdG9nZ2xlIiwiZGF0YS10YXJnZXQiLCJ0aXRsZSIsIml0ZW0iLCJhY3Rpb25UeXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/categories/index.js\n"));

/***/ })

});