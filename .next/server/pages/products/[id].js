(() => {
var exports = {};
exports.id = 304;
exports.ids = [304];
exports.modules = {

/***/ 4620:
/***/ ((module) => {

// Exports
module.exports = {
	"active_img": "DetailsProduct_active_img__DE8b_"
};


/***/ }),

/***/ 8278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductDetail),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_fetchData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(843);
/* harmony import */ var styles_DetailsProduct_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4620);
/* harmony import */ var styles_DetailsProduct_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styles_DetailsProduct_module_css__WEBPACK_IMPORTED_MODULE_2__);




function ProductDetail({ product  }) {
    const { 0: tab , 1: setTab  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const isActive = (index)=>{
        if (index === tab) {
            return (styles_DetailsProduct_module_css__WEBPACK_IMPORTED_MODULE_2___default().active_img);
        } else {
            return "";
        }
    };
    const handleImgClick = (index)=>{
        setTab(parseInt(index));
    };
    console.log(product.images[0].url);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container details mt-3",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: " col-md-6",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: product.images[tab].url,
                            className: "d-block rounded img-thumbnail w-100",
                            style: {
                                height: "350px"
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row mx-0",
                            children: product.images.map((image, index)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: image.url,
                                    className: `${isActive(index)} img-thumbnail rounded`,
                                    style: {
                                        cursor: "pointer",
                                        width: "80px",
                                        height: "80px"
                                    },
                                    alt: image.url,
                                    onClick: ()=>handleImgClick(index)
                                }, index);
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {},
                    className: "col-md-6",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            className: "text-capitalize ",
                            children: product.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: product.content
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "btn btn-secondary",
                            children: "Buy Now"
                        })
                    ]
                })
            ]
        })
    });
};
;
async function getServerSideProps(context) {
    const { params  } = context;
    const response = await (0,utils_fetchData__WEBPACK_IMPORTED_MODULE_3__/* .getData */ .Yu)(`http://localhost:3000/api/products/${params.id}`);
    const data = await response.json();
    return {
        props: {
            product: data
        }
    };
}


/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [843], () => (__webpack_exec__(8278)));
module.exports = __webpack_exports__;

})();