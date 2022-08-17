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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var utils_fetchData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/fetchData */ \"./utils/fetchData.js\");\n/* harmony import */ var store_Actiontypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/Actiontypes */ \"./store/Actiontypes.js\");\n\n\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Categories = function() {\n    var _this1 = _this;\n    _s();\n    var catInp = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    var ref = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function(state) {\n        return state;\n    }), auth = ref.auth, categories = ref.categories;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), name = ref1[0], setName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), id = ref2[0], setId = ref2[1];\n    if (!auth || auth.user && auth.user.role !== \"admin\") return null;\n    var handleClick = function() {\n        if (auth.user && auth.user.role !== \"admin\") return dispatch({\n            type: \"NOTIFY\",\n            payload: {\n                error: \"Only admins can add/update categories\"\n            }\n        });\n        if (id) {\n            (0,utils_fetchData__WEBPACK_IMPORTED_MODULE_3__.putData)(\"/api/categories/modify/\".concat(id), {\n                name: name\n            }, auth.access_token).then(function(response) {\n                return response.json();\n            }).then(function(result) {\n                if (result.error) return dispatch({\n                    type: \"NOTIFY\",\n                    payload: result\n                });\n                dispatch((0,store_Actiontypes__WEBPACK_IMPORTED_MODULE_4__.updateItem)(categories, id, (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, result), {\n                    name: name\n                }), \"ADD_CAT\"));\n            });\n        } else {\n            if (!name) return dispatch({\n                type: \"NOTIFY\",\n                payload: \"enter the category name!\"\n            });\n            ostData(\"/api/categories\", {\n                name: name\n            }, auth.access_token).then(function(response) {\n                return response.json();\n            }).then(function(result) {\n                if (result.error) return dispatch({\n                    type: \"NOTIFY\",\n                    payload: result\n                });\n                dispatch({\n                    type: \"ADD_CAT\",\n                    payload: (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(categories).concat([\n                        result\n                    ])\n                });\n                setName(\"\");\n            });\n        }\n    };\n    var addCat = function() {\n        setId(\"\");\n        setName(\"\");\n        catInp.current.focus();\n    };\n    var handleChange = function(e) {\n        setName(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container cats\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-md-8 my-4 mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-group text-center d-flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                ref: catInp,\n                                type: \"text\",\n                                name: \"category\",\n                                value: name,\n                                className: \"form-control\",\n                                onChange: handleChange,\n                                placeholder: \"category name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n                                lineNumber: 51,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-secondary\",\n                                onClick: handleClick,\n                                children: id ? \"Update\" : \"Create\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n                                lineNumber: 52,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, _this),\n                    categories && categories.map(function(category) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"card-body d-flex justify-content-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: category.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 33\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: function() {\n                                                    setId(category._id);\n                                                    setName(category.name);\n                                                },\n                                                className: \"btn btn-primary\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                    className: \"text-white fas fa-edit\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 37\n                                                }, _this1)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 37\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                \"data-toggle\": \"modal\",\n                                                \"data-target\": \"#exampleModal\",\n                                                onClick: function() {\n                                                    return dispatch({\n                                                        type: \"MODAL\",\n                                                        payload: {\n                                                            title: category.name,\n                                                            state: categories,\n                                                            item: category,\n                                                            actionType: \"ADD_CAT\",\n                                                            auth: auth\n                                                        }\n                                                    });\n                                                },\n                                                className: \"btn btn-danger ml-3\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                    className: \"text-white fas fa-trash-alt\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 37\n                                                }, _this1)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n                                                lineNumber: 64,\n                                                columnNumber: 37\n                                            }, _this1)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 33\n                                    }, _this1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n                                lineNumber: 58,\n                                columnNumber: 29\n                            }, _this1)\n                        }, category._id, false, {\n                            fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n                            lineNumber: 57,\n                            columnNumber: 25\n                        }, _this1);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row my-3 d-flex justify-content-center align-items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn btn-success\",\n                    onClick: addCat,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"text-white fas fa-plus\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n                        lineNumber: 74,\n                        columnNumber: 69\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n                    lineNumber: 74,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\categories\\\\index.js\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, _this);\n};\n_s(Categories, \"pliHy4z+jVLQqlmu3xGbhW2Am5A=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n_c = Categories;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Categories);\nvar _c;\n$RefreshReg$(_c, \"Categories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs2QkFBTTs7Ozs7eUJBQVM7Ozs7O3FCQUN0Rzs7Ozs7O2FBQ0osQ0FDVDtDQUNKO0dBeEVLOUIsVUFBVTs7UUFFS04sb0RBQVc7UUFDQ0Qsb0RBQVc7OztBQUh0Q08sS0FBQUEsVUFBVTtBQTBFaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYXRlZ29yaWVzL2luZGV4LmpzP2FkNzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBwb3N0RGF0YSwgcHV0RGF0YSB9IGZyb20gJ3V0aWxzL2ZldGNoRGF0YSc7XHJcbmltcG9ydCB7IHVwZGF0ZUl0ZW0gfSBmcm9tICdzdG9yZS9BY3Rpb250eXBlcyc7XHJcblxyXG5jb25zdCBDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2F0SW5wID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IGF1dGgsIGNhdGVnb3JpZXMgfSA9IHVzZVNlbGVjdG9yKCBzdGF0ZSA9PiBzdGF0ZSApO1xyXG4gICAgY29uc3QgWyBuYW1lLCBzZXROYW1lIF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbIGlkLCBzZXRJZCBdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgaWYoICFhdXRoIHx8IGF1dGgudXNlciAmJiBhdXRoLnVzZXIucm9sZSAhPT0gJ2FkbWluJyApIHJldHVybiBudWxsO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoIGF1dGgudXNlciAmJiBhdXRoLnVzZXIucm9sZSAhPT0gJ2FkbWluJyApIHJldHVybiBkaXNwYXRjaCggeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiAnT25seSBhZG1pbnMgY2FuIGFkZC91cGRhdGUgY2F0ZWdvcmllcyd9fSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoaWQpIHsgXHJcbiAgICAgICAgICAgIHB1dERhdGEoYC9hcGkvY2F0ZWdvcmllcy9tb2RpZnkvJHtpZH1gLCB7IG5hbWUgfSwgYXV0aC5hY2Nlc3NfdG9rZW4pXHJcbiAgICAgICAgICAgIC50aGVuKCByZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKCByZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0LmVycm9yKSByZXR1cm4gZGlzcGF0Y2goIHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHJlc3VsdH0pO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2godXBkYXRlSXRlbShjYXRlZ29yaWVzLCBpZCwgey4uLnJlc3VsdCwgbmFtZX0sICdBRERfQ0FUJykpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYoIW5hbWUpIHJldHVybiBkaXNwYXRjaCh7dHlwZTogJ05PVElGWScsIHBheWxvYWQ6ICdlbnRlciB0aGUgY2F0ZWdvcnkgbmFtZSEnfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG9zdERhdGEoJy9hcGkvY2F0ZWdvcmllcycsIHsgbmFtZSB9LCBhdXRoLmFjY2Vzc190b2tlbilcclxuICAgICAgICAgICAgICAgIC50aGVuKCByZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbiggcmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQuZXJyb3IpIHJldHVybiBkaXNwYXRjaCggeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogcmVzdWx0fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goIHsgdHlwZTogJ0FERF9DQVQnLCBwYXlsb2FkOiBbLi4uY2F0ZWdvcmllcywgcmVzdWx0XSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHNldE5hbWUoJycpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYWRkQ2F0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElkKCcnKTtcclxuICAgICAgICBzZXROYW1lKCcnKTtcclxuICAgICAgICBjYXRJbnAuY3VycmVudC5mb2N1cygpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjYXRzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTggbXktNCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgdGV4dC1jZW50ZXIgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlZj17Y2F0SW5wfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJjYXRlZ29yeVwiIHZhbHVlPXtuYW1lfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBwbGFjZWhvbGRlcj1cImNhdGVnb3J5IG5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+eyBpZCA/IFwiVXBkYXRlXCIgOiBcIkNyZWF0ZVwiIH08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllcy5tYXAoIGNhdGVnb3J5ID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NhdGVnb3J5Ll9pZH0gY2xhc3NOYW1lPSdjYXJkJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjYXRlZ29yeS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICBvbkNsaWNrPXsoKSA9PiB7IHNldElkKGNhdGVnb3J5Ll9pZCk7IHNldE5hbWUoY2F0ZWdvcnkubmFtZSkgfX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZmFzIGZhLWVkaXRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNleGFtcGxlTW9kYWxcIiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdNT0RBTCcsIHBheWxvYWQ6IHt0aXRsZSA6IGNhdGVnb3J5Lm5hbWUsIHN0YXRlOiBjYXRlZ29yaWVzLCBpdGVtOiBjYXRlZ29yeSwgYWN0aW9uVHlwZTogJ0FERF9DQVQnLCBhdXRoIH19KX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgbWwtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZhcyBmYS10cmFzaC1hbHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBteS0zIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIm9uQ2xpY2s9e2FkZENhdH0+PGkgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmYXMgZmEtcGx1c1wiID48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yaWVzOyJdLCJuYW1lcyI6WyJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJwb3N0RGF0YSIsInB1dERhdGEiLCJ1cGRhdGVJdGVtIiwiQ2F0ZWdvcmllcyIsImNhdElucCIsImRpc3BhdGNoIiwic3RhdGUiLCJhdXRoIiwiY2F0ZWdvcmllcyIsIm5hbWUiLCJzZXROYW1lIiwiaWQiLCJzZXRJZCIsInVzZXIiLCJyb2xlIiwiaGFuZGxlQ2xpY2siLCJ0eXBlIiwicGF5bG9hZCIsImVycm9yIiwiYWNjZXNzX3Rva2VuIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdCIsIm9zdERhdGEiLCJhZGRDYXQiLCJjdXJyZW50IiwiZm9jdXMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInJlZiIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwiY2F0ZWdvcnkiLCJzcGFuIiwiX2lkIiwiaSIsImRhdGEtdG9nZ2xlIiwiZGF0YS10YXJnZXQiLCJ0aXRsZSIsIml0ZW0iLCJhY3Rpb25UeXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/categories/index.js\n"));

/***/ })

});