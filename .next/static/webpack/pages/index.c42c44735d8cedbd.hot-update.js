"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var utils_filtering__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/filtering */ \"./utils/filtering.js\");\n/* harmony import */ var components_productItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/productItem */ \"./components/productItem.js\");\n/* harmony import */ var components_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/filter */ \"./components/filter.js\");\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction Home(param) {\n    var productsList = param.productsList, more = param.more;\n    var _this = this;\n    _s();\n    var ref = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state;\n    }), categories = ref.categories, auth = ref.auth, products = ref.products;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    //defining state for pagination\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(router.query.page || 1), page = ref1[0], setPage = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isChecked = ref2[0], setIschecked = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isAllChecked = ref3[0], setIsAllChecked = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), disDeleteAll = ref4[0], setdisDeleteAll = ref4[1];\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (productsList) dispatch({\n            type: \"ADD_PRODUCT\",\n            payload: productsList\n        });\n    }, [\n        productsList\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var arr = products.filter(function(product) {\n            return product.checked;\n        });\n        if (arr.length > 0) {\n            setdisDeleteAll(false);\n        } else {\n            setdisDeleteAll(true);\n        }\n    }, [\n        products\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        checkTheCheck();\n    }, [\n        products\n    ]);\n    var checkTheCheck = function() {\n        var arr = products.filter(function(product) {\n            return !product.checked;\n        });\n        if (arr.length > 0) {\n            setIsAllChecked(false);\n        } else {\n            setIsAllChecked(true);\n        }\n    };\n    var handleCheckAll = function() {\n        var newProducts = [];\n        products.forEach(function(product) {\n            return newProducts.push((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, product), {\n                checked: !isChecked\n            }));\n        });\n        dispatch({\n            type: \"ADD_PRODUCT\",\n            payload: newProducts\n        });\n        setIschecked(!isChecked);\n        setIsAllChecked(!isAllChecked);\n    };\n    var handlePagination = function(e, option) {\n        if (option.direc === \"next\") {\n            (0,utils_filtering__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n                router: router,\n                page: page + 1\n            });\n            setPage(page + 1);\n        } else {\n            if (page > 1) {\n                setPage(page - 1);\n                (0,utils_filtering__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n                    router: router,\n                    page: page - 1\n                });\n            }\n        }\n    };\n    var handleDeleteAll = function() {\n        var deletingProducts = products.filter(function(product) {\n            return product.checked;\n        }).map(function(product) {\n            return product._id;\n        });\n        dispatch({\n            type: \"MODAL\",\n            payload: {\n                state: products,\n                item: (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(deletingProducts),\n                actionType: \"ADD_PRODUCT\",\n                auth: auth\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_filter__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        categories: categories\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\index.js\",\n                        lineNumber: 94,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"p-2 align-items-center justify-content-center bg-danger\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: isAllChecked,\n                                onChange: handleCheckAll\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\index.js\",\n                                lineNumber: 95,\n                                columnNumber: 81\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-danger\",\n                                onClick: handleDeleteAll,\n                                style: {\n                                    padding: \"1px 1px\"\n                                },\n                                \"data-toggle\": \"modal\",\n                                \"data-target\": \"#exampleModal\",\n                                disabled: disDeleteAll,\n                                children: \"delete all\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\index.js\",\n                                lineNumber: 95,\n                                columnNumber: 156\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\index.js\",\n                        lineNumber: 95,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\index.js\",\n                lineNumber: 93,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"products_list\",\n                children: [\n                    !products && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"there is no product\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\index.js\",\n                        lineNumber: 99,\n                        columnNumber: 22\n                    }, this),\n                    products && products.map(function(product) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_productItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            product: product\n                        }, product._id, false, {\n                            fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\index.js\",\n                            lineNumber: 104,\n                            columnNumber: 18\n                        }, _this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\index.js\",\n                lineNumber: 97,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                \"aria-label\": \"Page navigation example\",\n                className: \"d-flex justify-content-end mx-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"pagination d-flex flex-row-reverse\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"page-item \".concat(page === 1 && \"disabled\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"page-link\",\n                                href: \"#\",\n                                onClick: function(e) {\n                                    return handlePagination(e, {\n                                        direc: \"prev\"\n                                    });\n                                },\n                                children: \"Previous\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\index.js\",\n                                lineNumber: 110,\n                                columnNumber: 65\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\index.js\",\n                            lineNumber: 110,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"page-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"page-link\",\n                                href: \"#\",\n                                children: page\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\index.js\",\n                                lineNumber: 111,\n                                columnNumber: 35\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\index.js\",\n                            lineNumber: 111,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"page-item \".concat(!more && \"disabled\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"page-link\",\n                                href: \"#\",\n                                onClick: function(e) {\n                                    return handlePagination(e, {\n                                        direc: \"next\"\n                                    });\n                                },\n                                children: \"Next\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\index.js\",\n                                lineNumber: 112,\n                                columnNumber: 60\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\index.js\",\n                            lineNumber: 112,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\index.js\",\n                    lineNumber: 109,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\index.js\",\n                lineNumber: 108,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"hVy7n7pE9UNy8Cwce09tPVV89OY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLEVBQUMsb0NBQW9DOztzQ0FDaEQsOERBQUNlLElBQUU7NEJBQUNmLFNBQVMsRUFBRSxZQUFXLENBQTJCLE9BQXpCaEMsSUFBSSxLQUFLLENBQUMsSUFBSSxVQUFVLENBQUU7c0NBQUUsNEVBQUNnRCxHQUFDO2dDQUFDaEIsU0FBUyxFQUFDLFdBQVc7Z0NBQUNpQixJQUFJLEVBQUMsR0FBRztnQ0FBQ1osT0FBTyxFQUFFLFNBQUNmLENBQUM7MkNBQUtELGdCQUFnQixDQUFDQyxDQUFDLEVBQUU7d0NBQUVFLEtBQUssRUFBRyxNQUFNO3FDQUFFLENBQUM7aUNBQUE7MENBQUUsVUFBUTs7Ozs7b0NBQUk7Ozs7O2dDQUFLO3NDQUNwSyw4REFBQ3VCLElBQUU7NEJBQUNmLFNBQVMsRUFBQyxXQUFXO3NDQUFDLDRFQUFDZ0IsR0FBQztnQ0FBQ2hCLFNBQVMsRUFBQyxXQUFXO2dDQUFDaUIsSUFBSSxFQUFDLEdBQUc7MENBQUdqRCxJQUFJOzs7OztvQ0FBSzs7Ozs7Z0NBQUs7c0NBQzVFLDhEQUFDK0MsSUFBRTs0QkFBQ2YsU0FBUyxFQUFFLFlBQVcsQ0FBc0IsT0FBcEIsQ0FBQ3ZDLElBQUksSUFBSSxVQUFVLENBQUU7c0NBQUUsNEVBQUN1RCxHQUFDO2dDQUFFaEIsU0FBUyxFQUFDLFdBQVc7Z0NBQUNpQixJQUFJLEVBQUMsR0FBRztnQ0FBQ1osT0FBTyxFQUFFLFNBQUNmLENBQUM7MkNBQUtELGdCQUFnQixDQUFDQyxDQUFDLEVBQUU7d0NBQUVFLEtBQUssRUFBRyxNQUFNO3FDQUFFLENBQUM7aUNBQUE7MENBQUcsTUFBSTs7Ozs7b0NBQUk7Ozs7O2dDQUFLOzs7Ozs7d0JBQzFKOzs7OztvQkFDRDs7b0JBQ0gsQ0FDSjtDQUNGO0dBekd1QmpDLElBQUk7O1FBRWFMLG9EQUFXO1FBQ2pDRCxrREFBUztRQVVURSxvREFBVzs7O0FBYk5JLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXREYXRhIH0gZnJvbSBcInV0aWxzL2ZldGNoRGF0YVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IGZpbHRlcmluZyBmcm9tIFwidXRpbHMvZmlsdGVyaW5nXCI7XG5pbXBvcnQgUHJvZHVjdEl0ZW0gZnJvbSBcImNvbXBvbmVudHMvcHJvZHVjdEl0ZW1cIjtcbmltcG9ydCBGaWx0ZXIgZnJvbSAnY29tcG9uZW50cy9maWx0ZXInO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHByb2R1Y3RzTGlzdCwgbW9yZSB9KXtcblxuICBjb25zdCB7IGNhdGVnb3JpZXMsIGF1dGgsIHByb2R1Y3RzIH0gPSB1c2VTZWxlY3Rvciggc3RhdGUgPT4gc3RhdGUpO1xuICBjb25zdCByb3V0ZXIgICA9IHVzZVJvdXRlcigpO1xuICBcbiAgLy9kZWZpbmluZyBzdGF0ZSBmb3IgcGFnaW5hdGlvblxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZShyb3V0ZXIucXVlcnkucGFnZSB8fCAxKVxuICBcbiAgXG4gIGNvbnN0IFsgaXNDaGVja2VkLCBzZXRJc2NoZWNrZWQgXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbIGlzQWxsQ2hlY2tlZCwgc2V0SXNBbGxDaGVja2VkIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFsgZGlzRGVsZXRlQWxsICwgc2V0ZGlzRGVsZXRlQWxsIF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIFxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihwcm9kdWN0c0xpc3QpIGRpc3BhdGNoKHsgdHlwZTogJ0FERF9QUk9EVUNUJywgcGF5bG9hZDogcHJvZHVjdHNMaXN0fSlcbiAgfSwgW3Byb2R1Y3RzTGlzdF0pXG5cbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYXJyID0gcHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdC5jaGVja2VkKTtcbiAgICBpZihhcnIubGVuZ3RoID4gMCl7XG4gICAgICBzZXRkaXNEZWxldGVBbGwoZmFsc2UpXG4gICAgfSBlbHNlIHsgXG4gICAgICBzZXRkaXNEZWxldGVBbGwodHJ1ZSlcbiAgICB9XG4gIH0sIFtwcm9kdWN0c10pXG5cbiAgXG4gIFxuICBcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hlY2tUaGVDaGVjaygpXG4gIH0sIFtwcm9kdWN0c10pXG4gIGNvbnN0IGNoZWNrVGhlQ2hlY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgYXJyID0gcHJvZHVjdHMuZmlsdGVyKCBwcm9kdWN0ID0+ICFwcm9kdWN0LmNoZWNrZWQpXG4gICAgaWYoYXJyLmxlbmd0aCA+IDApe1xuICAgICAgc2V0SXNBbGxDaGVja2VkKGZhbHNlKVxuICAgIH1lbHNlIHtcbiAgICAgIHNldElzQWxsQ2hlY2tlZCh0cnVlKVxuICAgIH0gXG4gIH1cbiAgXG4gIFxuXG4gIGNvbnN0IGhhbmRsZUNoZWNrQWxsID0gKCkgPT4ge1xuICAgIGxldCBuZXdQcm9kdWN0cyA9IFtdO1xuICAgIHByb2R1Y3RzLmZvckVhY2goIHByb2R1Y3QgPT4gXG4gICAgICBuZXdQcm9kdWN0cy5wdXNoKHsuLi5wcm9kdWN0LCBjaGVja2VkIDogIWlzQ2hlY2tlZH0pXG4gICAgKTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdBRERfUFJPRFVDVCcsIHBheWxvYWQ6IG5ld1Byb2R1Y3RzIH0pO1xuICAgIHNldElzY2hlY2tlZCghaXNDaGVja2VkKVxuICAgIHNldElzQWxsQ2hlY2tlZCghaXNBbGxDaGVja2VkKVxuICB9O1xuXG5cbiAgY29uc3QgaGFuZGxlUGFnaW5hdGlvbiA9IChlLCBvcHRpb24pID0+IHtcbiAgICBpZihvcHRpb24uZGlyZWMgPT09ICduZXh0Jyl7XG4gICAgICBmaWx0ZXJpbmcoe3JvdXRlciwgcGFnZTogcGFnZSArIDF9KTtcbiAgICAgIHNldFBhZ2UocGFnZSArIDEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKHBhZ2UgPiAxKXtcbiAgICAgICAgc2V0UGFnZShwYWdlIC0gMSlcbiAgICAgICAgZmlsdGVyaW5nKHtyb3V0ZXIsIHBhZ2U6IHBhZ2UgLSAxfSk7XG4gICAgICB9IFxuICAgIH1cbiAgfTtcblxuICBcbiAgY29uc3QgaGFuZGxlRGVsZXRlQWxsID0gKCkgPT4ge1xuICAgIGNvbnN0IGRlbGV0aW5nUHJvZHVjdHMgPSBwcm9kdWN0cy5maWx0ZXIoIHByb2R1Y3QgPT4gcHJvZHVjdC5jaGVja2VkICkubWFwKHByb2R1Y3QgPT4gcHJvZHVjdC5faWQpXG4gICAgZGlzcGF0Y2goe3R5cGU6ICdNT0RBTCcsIHBheWxvYWQ6IHtzdGF0ZTogcHJvZHVjdHMsIGl0ZW06IFsuLi5kZWxldGluZ1Byb2R1Y3RzXSwgYWN0aW9uVHlwZTogJ0FERF9QUk9EVUNUJywgYXV0aH19KVxuICAgIFxuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxGaWx0ZXIgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gLz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInAtMiBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBiZy1kYW5nZXJcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17aXNBbGxDaGVja2VkfSAgb25DaGFuZ2U9e2hhbmRsZUNoZWNrQWxsfSAvPjxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXsgaGFuZGxlRGVsZXRlQWxsIH0gc3R5bGU9e3twYWRkaW5nOiAnMXB4IDFweCd9fSBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZXhhbXBsZU1vZGFsXCIgZGlzYWJsZWQ9e2Rpc0RlbGV0ZUFsbH0+ZGVsZXRlIGFsbDwvYnV0dG9uPjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzX2xpc3RcIj5cbiAgICAgIHtcbiAgICAgICAgIXByb2R1Y3RzICYmIDxoMj50aGVyZSBpcyBubyBwcm9kdWN0PC9oMj5cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgcHJvZHVjdHMgJiYgXG4gICAgICAgIHByb2R1Y3RzLm1hcCggcHJvZHVjdCA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxQcm9kdWN0SXRlbSBrZXk9e3Byb2R1Y3QuX2lkfSBwcm9kdWN0PXtwcm9kdWN0fS8+XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgPC9kaXY+XG4gICAgPG5hdiBhcmlhLWxhYmVsPVwiUGFnZSBuYXZpZ2F0aW9uIGV4YW1wbGVcIiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBteC0zXCI+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvbiBkLWZsZXggZmxleC1yb3ctcmV2ZXJzZVwiPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtgcGFnZS1pdGVtICR7cGFnZSA9PT0gMSAmJiAnZGlzYWJsZWQnfWB9PjxhIGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IGhhbmRsZVBhZ2luYXRpb24oZSwgeyBkaXJlYyA6ICdwcmV2JyB9KX0+UHJldmlvdXM8L2E+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPjxhIGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiIGhyZWY9XCIjXCIgPntwYWdlfTwvYT48L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtgcGFnZS1pdGVtICR7IW1vcmUgJiYgJ2Rpc2FibGVkJ31gfT48YSAgY2xhc3NOYW1lPVwicGFnZS1saW5rXCIgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlUGFnaW5hdGlvbihlLCB7IGRpcmVjIDogJ25leHQnIH0pfSA+TmV4dDwvYT48L2xpPlxuICAgICAgPC91bD5cbiAgICA8L25hdj5cbiAgICA8Lz5cbiAgKVxufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHF1ZXJ5IH0pe1xuICBjb25zdCBwYWdlID0gcXVlcnkucGFnZSB8fCAxO1xuICBjb25zdCBzb3J0ID0gcXVlcnkuc29ydCB8fCAnJztcbiAgY29uc3QgY2F0ZWdvcnkgPSBxdWVyeS5jYXRlZ29yeSB8fCAnYWxsJztcbiAgY29uc3Qgc2VhcmNoID0gcXVlcnkuc2VhcmNoIHx8ICdhbGwnXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0RGF0YShgL3Byb2R1Y3RzP2xpbWl0PSR7M30mcGFnZT0ke3BhZ2V9JnNvcnQ9JHtzb3J0fSZjYXRlZ29yeT0ke2NhdGVnb3J5fSZ0aXRsZT0ke3NlYXJjaH1gKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzIDoge1xuICAgICAgcHJvZHVjdHNMaXN0IDogZGF0YS5wcm9kdWN0cyB8fCBkYXRhLFxuICAgICAgbW9yZTogZGF0YS5tb3JlIHx8IGZhbHNlXG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsImZpbHRlcmluZyIsIlByb2R1Y3RJdGVtIiwiRmlsdGVyIiwiSG9tZSIsInByb2R1Y3RzTGlzdCIsIm1vcmUiLCJzdGF0ZSIsImNhdGVnb3JpZXMiLCJhdXRoIiwicHJvZHVjdHMiLCJyb3V0ZXIiLCJxdWVyeSIsInBhZ2UiLCJzZXRQYWdlIiwiaXNDaGVja2VkIiwic2V0SXNjaGVja2VkIiwiaXNBbGxDaGVja2VkIiwic2V0SXNBbGxDaGVja2VkIiwiZGlzRGVsZXRlQWxsIiwic2V0ZGlzRGVsZXRlQWxsIiwiZGlzcGF0Y2giLCJ0eXBlIiwicGF5bG9hZCIsImFyciIsImZpbHRlciIsInByb2R1Y3QiLCJjaGVja2VkIiwibGVuZ3RoIiwiY2hlY2tUaGVDaGVjayIsImhhbmRsZUNoZWNrQWxsIiwibmV3UHJvZHVjdHMiLCJmb3JFYWNoIiwicHVzaCIsImhhbmRsZVBhZ2luYXRpb24iLCJlIiwib3B0aW9uIiwiZGlyZWMiLCJoYW5kbGVEZWxldGVBbGwiLCJkZWxldGluZ1Byb2R1Y3RzIiwibWFwIiwiX2lkIiwiaXRlbSIsImFjdGlvblR5cGUiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwiaW5wdXQiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdHlsZSIsInBhZGRpbmciLCJkYXRhLXRvZ2dsZSIsImRhdGEtdGFyZ2V0IiwiZGlzYWJsZWQiLCJoMiIsIm5hdiIsImFyaWEtbGFiZWwiLCJ1bCIsImxpIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});