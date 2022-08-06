"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,187];
exports.modules = {

/***/ 8608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Footer() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        children: "Footer"
    });
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 7029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ StartUp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_fetchData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(843);




function StartUp({ children  }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    const { cart , auth  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const firstLogin = localStorage.getItem("firstlogin");
        if (firstLogin) {
            (0,utils_fetchData__WEBPACK_IMPORTED_MODULE_3__/* .getData */ .Yu)("/auth/accessToken").then((response)=>response.json()).then((result)=>{
                if (result.error) return dispatch({
                    type: "NOTIFY",
                    payload: result
                });
                dispatch({
                    type: "AUTH",
                    payload: result
                });
            });
        }
        (0,utils_fetchData__WEBPACK_IMPORTED_MODULE_3__/* .getData */ .Yu)("/categories").then((response)=>response.json()).then((result)=>{
            if (!result.error) return dispatch({
                type: "ADD_CAT",
                payload: result
            });
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const __next__cart = JSON.parse(localStorage.getItem("nextCart"));
        if (__next__cart && __next__cart.length > 0) {
            dispatch({
                type: "ADD_CART",
                payload: __next__cart
            });
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        let newCart = JSON.stringify(cart);
        localStorage.setItem("nextCart", newCart);
    }, [
        cart
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (auth.access_token) {
            (0,utils_fetchData__WEBPACK_IMPORTED_MODULE_3__/* .getData */ .Yu)("/orders", auth.access_token).then((res)=>res.json()).then((data)=>{
                if (data.error) {
                    return dispatch({
                        type: "NOTIFY",
                        payload: data
                    });
                }
                dispatch({
                    type: "ADD_ORDERS",
                    payload: data
                });
            });
        }
        if (auth.user && auth.user.role === "admin") {
            (0,utils_fetchData__WEBPACK_IMPORTED_MODULE_3__/* .getData */ .Yu)("/users", auth.access_token).then((response)=>response.json()).then((result)=>{
                if (result.error) return dispatch({
                    type: "NOTIFY",
                    payload: result
                });
                dispatch({
                    type: "ADD_USERS",
                    payload: result
                });
            });
        }
    }, [
        auth
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
};


/***/ }),

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2645);
/* harmony import */ var _layout_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8608);
/* harmony import */ var _components_notify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8074);
/* harmony import */ var components_startup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7029);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8355);
/* harmony import */ var components_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8757);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_navbar__WEBPACK_IMPORTED_MODULE_1__]);
_layout_navbar__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function MyApp({ Component , pageProps  }) {
    if (Component.getLayout) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_store_GlobalState__WEBPACK_IMPORTED_MODULE_5__/* .DataProvider */ .F, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_startup__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: Component.getLayout(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                }))
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_store_GlobalState__WEBPACK_IMPORTED_MODULE_5__/* .DataProvider */ .F, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_startup__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_navbar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_notify__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_modal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ DataProvider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./store/Actions.js
const NOTIFY = "NOTIFY";
const AUTH = "AUTH";
const ADD_CART = "ADD_CART";
const MODAL = "MODAL";
const ADD_ORDERS = "ADD_ORDERS";
const ADD_USERS = "ADD_USERS";
const ADD_CAT = "ADD_CAT";
const ADD_PRODUCT = "ADD_PRODUCT";

;// CONCATENATED MODULE: ./store/Reducers.js

const initialState = {
    products: [],
    notify: {},
    auth: {},
    cart: [],
    modal: {},
    orders: [],
    users: [],
    categories: []
};
function reducers(state = initialState, action) {
    switch(action.type){
        case NOTIFY:
            return {
                ...state,
                notify: action.payload
            };
        case ADD_CAT:
            return {
                ...state,
                categories: action.payload
            };
        case MODAL:
            return {
                ...state,
                modal: action.payload
            };
        case AUTH:
            return {
                ...state,
                auth: action.payload
            };
        case ADD_CART:
            return {
                ...state,
                cart: action.payload
            };
        case ADD_ORDERS:
            return {
                ...state,
                orders: action.payload
            };
        case ADD_USERS:
            return {
                ...state,
                users: action.payload
            };
        case ADD_PRODUCT:
            return {
                ...state,
                products: action.payload
            };
        default:
            return state;
    }
};
;

;// CONCATENATED MODULE: external "redux-logger"
const external_redux_logger_namespaceObject = require("redux-logger");
var external_redux_logger_default = /*#__PURE__*/__webpack_require__.n(external_redux_logger_namespaceObject);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: ./store/GlobalState.js







const store = (0,external_redux_namespaceObject.createStore)(reducers, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)((external_redux_logger_default()), (external_redux_thunk_default()))));
const DataProvider = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: store,
        children: children
    });
};


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,843,14,138,321,757], () => (__webpack_exec__(8510)));
module.exports = __webpack_exports__;

})();