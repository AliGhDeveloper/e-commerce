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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var utils_filtering__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/filtering */ \"./utils/filtering.js\");\n/* harmony import */ var components_productItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/productItem */ \"./components/productItem.js\");\n/* harmony import */ var components_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/filter */ \"./components/filter.js\");\n/* harmony import */ var _layout_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/layout/pagination */ \"./components/layout/pagination.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction Home(param) {\n    var productsList = param.productsList, more = param.more;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(productsList), products = ref[0], setProducts = ref[1];\n    var ref1 = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state;\n    }), categories = ref1.categories, auth = ref1.auth;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    //defining state for pagination\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(router.query.page || 1), page = ref2[0], setPage = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isChecked = ref3[0], setIschecked = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isAllChecked = ref4[0], setIsAllChecked = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), disDeleteAll = ref5[0], setdisDeleteAll = ref5[1];\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    // useEffect(() => {\n    //   if(productsList) dispatch({ type: 'ADD_PRODUCT', payload: productsList})\n    // }, [productsList])\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var arr = products.filter(function(product) {\n            return product.checked;\n        });\n        if (arr.length > 0) {\n            setdisDeleteAll(false);\n        } else {\n            setdisDeleteAll(true);\n        }\n    }, [\n        products\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        checkTheCheck();\n    }, [\n        products\n    ]);\n    var checkTheCheck = function() {\n        var arr = products.filter(function(product) {\n            return !product.checked;\n        });\n        if (arr.length > 0) {\n            setIsAllChecked(false);\n        } else {\n            setIsAllChecked(true);\n        }\n    };\n    var handleCheckAll = function() {\n        var newProducts = [];\n        products.forEach(function(product) {\n            return newProducts.push((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, product), {\n                checked: !isChecked\n            }));\n        });\n        setProducts(newProducts);\n        setIschecked(!isChecked);\n        setIsAllChecked(!isAllChecked);\n    };\n    var handleDeleteAll = function() {\n        var deletingProducts = products.filter(function(product) {\n            return product.checked;\n        }).map(function(product) {\n            return product._id;\n        });\n        dispatch({\n            type: \"MODAL\",\n            payload: {\n                state: products,\n                setProducts: setProducts,\n                item: (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(deletingProducts),\n                actionType: \"deleteAllProducts\",\n                auth: auth\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_filter__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        categories: categories\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\index.js\",\n                        lineNumber: 85,\n                        columnNumber: 7\n                    }, this),\n                    auth.user && auth.user.role === \"admin\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"p-2 align-items-center justify-content-center bg-danger\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: isAllChecked,\n                                onChange: handleCheckAll\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\index.js\",\n                                lineNumber: 88,\n                                columnNumber: 83\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-danger\",\n                                onClick: handleDeleteAll,\n                                style: {\n                                    padding: \"1px 1px\"\n                                },\n                                \"data-toggle\": \"modal\",\n                                \"data-target\": \"#exampleModal\",\n                                disabled: disDeleteAll,\n                                children: \"delete all\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\index.js\",\n                                lineNumber: 88,\n                                columnNumber: 158\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\index.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\index.js\",\n                lineNumber: 84,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"products_list\",\n                children: products && products.map(function(product) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_productItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        setProducts: setProducts,\n                        products: products,\n                        product: product\n                    }, product._id, false, {\n                        fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\index.js\",\n                        lineNumber: 95,\n                        columnNumber: 18\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\index.js\",\n                lineNumber: 91,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_pagination__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                page: page,\n                more: more\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ali\\\\Desktop\\\\ecommerc project\\\\e-commerce\\\\pages\\\\index.js\",\n                lineNumber: 99,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"FqtarWmVS5zOgZwmB3mWV9GkSdg=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dDQUFHaUIsS0FBSyxFQUFFO29DQUFDQyxPQUFPLEVBQUUsU0FBUztpQ0FBQztnQ0FBRUMsYUFBVyxFQUFDLE9BQU87Z0NBQUNDLGFBQVcsRUFBQyxlQUFlO2dDQUFDQyxRQUFRLEVBQUVsQyxZQUFZOzBDQUFFLFlBQVU7Ozs7O29DQUFTOzs7Ozs7NEJBQU87Ozs7OztvQkFFalY7MEJBQ04sOERBQUNxQixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsZUFBZTswQkFFMUJuQyxRQUFRLElBQ1JBLFFBQVEsQ0FBQzRCLEdBQUcsQ0FBRVYsU0FBQUEsT0FBTyxFQUFJO29CQUN2QixxQkFBTyw4REFBQ3hCLDhEQUFXO3dCQUFtQk8sV0FBVyxFQUFFQSxXQUFXO3dCQUFFRCxRQUFRLEVBQUVBLFFBQVE7d0JBQUVrQixPQUFPLEVBQUVBLE9BQU87dUJBQTNFQSxPQUFPLENBQUNXLEdBQUc7Ozs7NkJBQW1FO2lCQUN4RyxDQUFDOzs7OztvQkFFQTswQkFDTiw4REFBQ2pDLDBEQUFVO2dCQUFDVyxJQUFJLEVBQUVBLElBQUk7Z0JBQUVSLElBQUksRUFBRUEsSUFBSTs7Ozs7b0JBQUk7O29CQUNuQyxDQUNKO0NBQ0Y7R0F6RnVCRixJQUFJOztRQUlHTixvREFBVztRQUN2QkQsa0RBQVM7UUFVVEUsb0RBQVc7OztBQWZOSyxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gXCJ1dGlscy9mZXRjaERhdGFcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBmaWx0ZXJpbmcgZnJvbSBcInV0aWxzL2ZpbHRlcmluZ1wiO1xuaW1wb3J0IFByb2R1Y3RJdGVtIGZyb20gXCJjb21wb25lbnRzL3Byb2R1Y3RJdGVtXCI7XG5pbXBvcnQgRmlsdGVyIGZyb20gJ2NvbXBvbmVudHMvZmlsdGVyJztcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCJAL2xheW91dC9wYWdpbmF0aW9uXCI7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcHJvZHVjdHNMaXN0LCBtb3JlIH0pe1xuXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUocHJvZHVjdHNMaXN0KVxuXG4gIGNvbnN0IHsgY2F0ZWdvcmllcywgYXV0aCB9ID0gdXNlU2VsZWN0b3IoIHN0YXRlID0+IHN0YXRlKTtcbiAgY29uc3Qgcm91dGVyICAgPSB1c2VSb3V0ZXIoKTtcbiAgXG4gIC8vZGVmaW5pbmcgc3RhdGUgZm9yIHBhZ2luYXRpb25cbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUocm91dGVyLnF1ZXJ5LnBhZ2UgfHwgMSlcbiAgXG4gIFxuICBjb25zdCBbIGlzQ2hlY2tlZCwgc2V0SXNjaGVja2VkIF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgWyBpc0FsbENoZWNrZWQsIHNldElzQWxsQ2hlY2tlZCBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbIGRpc0RlbGV0ZUFsbCAsIHNldGRpc0RlbGV0ZUFsbCBdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBcbiAgXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgaWYocHJvZHVjdHNMaXN0KSBkaXNwYXRjaCh7IHR5cGU6ICdBRERfUFJPRFVDVCcsIHBheWxvYWQ6IHByb2R1Y3RzTGlzdH0pXG4gIC8vIH0sIFtwcm9kdWN0c0xpc3RdKVxuXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGFyciA9IHByb2R1Y3RzLmZpbHRlcihwcm9kdWN0ID0+IHByb2R1Y3QuY2hlY2tlZCk7XG4gICAgaWYoYXJyLmxlbmd0aCA+IDApe1xuICAgICAgc2V0ZGlzRGVsZXRlQWxsKGZhbHNlKVxuICAgIH0gZWxzZSB7IFxuICAgICAgc2V0ZGlzRGVsZXRlQWxsKHRydWUpXG4gICAgfVxuICB9LCBbcHJvZHVjdHNdKVxuXG4gIFxuICBcbiAgXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNoZWNrVGhlQ2hlY2soKVxuICB9LCBbcHJvZHVjdHNdKVxuXG4gIGNvbnN0IGNoZWNrVGhlQ2hlY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgYXJyID0gcHJvZHVjdHMuZmlsdGVyKCBwcm9kdWN0ID0+ICFwcm9kdWN0LmNoZWNrZWQpXG4gICAgaWYoYXJyLmxlbmd0aCA+IDApe1xuICAgICAgc2V0SXNBbGxDaGVja2VkKGZhbHNlKVxuICAgIH1lbHNlIHtcbiAgICAgIHNldElzQWxsQ2hlY2tlZCh0cnVlKVxuICAgIH0gXG4gIH1cbiAgXG4gIFxuXG4gIGNvbnN0IGhhbmRsZUNoZWNrQWxsID0gKCkgPT4ge1xuICAgIGxldCBuZXdQcm9kdWN0cyA9IFtdO1xuICAgIHByb2R1Y3RzLmZvckVhY2goIHByb2R1Y3QgPT4gXG4gICAgICBuZXdQcm9kdWN0cy5wdXNoKHsuLi5wcm9kdWN0LCBjaGVja2VkIDogIWlzQ2hlY2tlZH0pXG4gICAgKTtcbiAgICBzZXRQcm9kdWN0cyhuZXdQcm9kdWN0cyk7XG4gICAgc2V0SXNjaGVja2VkKCFpc0NoZWNrZWQpXG4gICAgc2V0SXNBbGxDaGVja2VkKCFpc0FsbENoZWNrZWQpXG4gIH07XG5cbiAgXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUFsbCA9ICgpID0+IHtcbiAgICBjb25zdCBkZWxldGluZ1Byb2R1Y3RzID0gcHJvZHVjdHMuZmlsdGVyKCBwcm9kdWN0ID0+IHByb2R1Y3QuY2hlY2tlZCApLm1hcChwcm9kdWN0ID0+IHByb2R1Y3QuX2lkKVxuICAgIGRpc3BhdGNoKHt0eXBlOiAnTU9EQUwnLCBwYXlsb2FkOiB7c3RhdGU6IHByb2R1Y3RzLCBzZXRQcm9kdWN0cywgaXRlbTogWy4uLmRlbGV0aW5nUHJvZHVjdHNdLCBhY3Rpb25UeXBlOiAnZGVsZXRlQWxsUHJvZHVjdHMnLCBhdXRofX0pXG4gICAgXG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPEZpbHRlciBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSAvPlxuICAgICAge1xuICAgICAgICBhdXRoLnVzZXIgJiYgYXV0aC51c2VyLnJvbGUgPT09ICdhZG1pbicgJiZcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicC0yIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGJnLWRhbmdlclwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtpc0FsbENoZWNrZWR9ICBvbkNoYW5nZT17aGFuZGxlQ2hlY2tBbGx9IC8+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9eyBoYW5kbGVEZWxldGVBbGwgfSBzdHlsZT17e3BhZGRpbmc6ICcxcHggMXB4J319IGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNleGFtcGxlTW9kYWxcIiBkaXNhYmxlZD17ZGlzRGVsZXRlQWxsfT5kZWxldGUgYWxsPC9idXR0b24+PC9zcGFuPlxuICAgICAgfVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNfbGlzdFwiPlxuICAgICAge1xuICAgICAgICBwcm9kdWN0cyAmJiBcbiAgICAgICAgcHJvZHVjdHMubWFwKCBwcm9kdWN0ID0+IHtcbiAgICAgICAgICByZXR1cm4gPFByb2R1Y3RJdGVtIGtleT17cHJvZHVjdC5faWR9IHNldFByb2R1Y3RzPXtzZXRQcm9kdWN0c30gcHJvZHVjdHM9e3Byb2R1Y3RzfSBwcm9kdWN0PXtwcm9kdWN0fS8+XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgPC9kaXY+XG4gICAgPFBhZ2luYXRpb24gcGFnZT17cGFnZX0gbW9yZT17bW9yZX0gLz5cbiAgICA8Lz5cbiAgKVxufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHF1ZXJ5IH0pe1xuICBjb25zdCBwYWdlID0gcXVlcnkucGFnZSB8fCAxO1xuICBjb25zdCBzb3J0ID0gcXVlcnkuc29ydCB8fCAnJztcbiAgY29uc3QgY2F0ZWdvcnkgPSBxdWVyeS5jYXRlZ29yeSB8fCAnYWxsJztcbiAgY29uc3Qgc2VhcmNoID0gcXVlcnkuc2VhcmNoIHx8ICdhbGwnXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0RGF0YShgL3Byb2R1Y3RzP2xpbWl0PSR7M30mcGFnZT0ke3BhZ2V9JnNvcnQ9JHtzb3J0fSZjYXRlZ29yeT0ke2NhdGVnb3J5fSZ0aXRsZT0ke3NlYXJjaH1gKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzIDoge1xuICAgICAgcHJvZHVjdHNMaXN0IDogZGF0YS5wcm9kdWN0cyB8fCBkYXRhLFxuICAgICAgbW9yZTogZGF0YS5tb3JlIHx8IGZhbHNlXG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsImZpbHRlcmluZyIsIlByb2R1Y3RJdGVtIiwiRmlsdGVyIiwiUGFnaW5hdGlvbiIsIkhvbWUiLCJwcm9kdWN0c0xpc3QiLCJtb3JlIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsInN0YXRlIiwiY2F0ZWdvcmllcyIsImF1dGgiLCJyb3V0ZXIiLCJxdWVyeSIsInBhZ2UiLCJzZXRQYWdlIiwiaXNDaGVja2VkIiwic2V0SXNjaGVja2VkIiwiaXNBbGxDaGVja2VkIiwic2V0SXNBbGxDaGVja2VkIiwiZGlzRGVsZXRlQWxsIiwic2V0ZGlzRGVsZXRlQWxsIiwiZGlzcGF0Y2giLCJhcnIiLCJmaWx0ZXIiLCJwcm9kdWN0IiwiY2hlY2tlZCIsImxlbmd0aCIsImNoZWNrVGhlQ2hlY2siLCJoYW5kbGVDaGVja0FsbCIsIm5ld1Byb2R1Y3RzIiwiZm9yRWFjaCIsInB1c2giLCJoYW5kbGVEZWxldGVBbGwiLCJkZWxldGluZ1Byb2R1Y3RzIiwibWFwIiwiX2lkIiwidHlwZSIsInBheWxvYWQiLCJpdGVtIiwiYWN0aW9uVHlwZSIsImRpdiIsImNsYXNzTmFtZSIsInVzZXIiLCJyb2xlIiwic3BhbiIsImlucHV0Iiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwic3R5bGUiLCJwYWRkaW5nIiwiZGF0YS10b2dnbGUiLCJkYXRhLXRhcmdldCIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});