"use strict";
exports.id = 757;
exports.ids = [757];
exports.modules = {

/***/ 8757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var store_Actiontypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5014);
/* harmony import */ var utils_fetchData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(843);





function Modal() {
    const { modal , cart , users , products  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const handleClick = ()=>{
        if (modal) {
            const { actionType , item  } = modal;
            if (actionType === "deleteUser") {
                (0,utils_fetchData__WEBPACK_IMPORTED_MODULE_3__/* .deleteData */ .SR)(`/users/deleteuser/${modal.item._id}`, modal.auth.access_token).then((response)=>response.json()).then((result)=>console.log(result));
                dispatch((0,store_Actiontypes__WEBPACK_IMPORTED_MODULE_4__/* .deleteItem */ .wz)(modal.item._id, users, "ADD_USERS"));
            } else if (actionType === "deleteCartItem") {
                dispatch((0,store_Actiontypes__WEBPACK_IMPORTED_MODULE_4__/* .deleteItem */ .wz)(modal.item._id, cart));
            } else if (actionType === "ADD_CAT") {
                (0,utils_fetchData__WEBPACK_IMPORTED_MODULE_3__/* .deleteData */ .SR)(`/categories/modify/${modal.item._id}`, modal.auth.access_token).then((response)=>response.json()).then((result)=>console.log(result));
            } else if (actionType === "deleteProduct") {
                return (0,utils_fetchData__WEBPACK_IMPORTED_MODULE_3__/* .deleteData */ .SR)(`/products/${item._id}`, null, modal.auth.access_token).then((response)=>response.json()).then((result)=>console.log(result));
            } else if (actionType === "ADD_PRODUCT") {
                dispatch({
                    type: "NOTIFY",
                    payload: {
                        loading: "please wait..."
                    }
                });
                return (0,utils_fetchData__WEBPACK_IMPORTED_MODULE_3__/* .deleteData */ .SR)("/products", modal.item, modal.auth.access_token).then((response)=>response.json()).then((result)=>{
                    if (result.error) return dispatch({
                        type: "NOTIFY",
                        payload: result
                    });
                    dispatch((0,store_Actiontypes__WEBPACK_IMPORTED_MODULE_4__/* .deleteItem */ .wz)(item, modal.state, actionType));
                    return dispatch({
                        type: "NOTIFY",
                        payload: result
                    });
                });
                return;
            }
        }
        dispatch((0,store_Actiontypes__WEBPACK_IMPORTED_MODULE_4__/* .deleteItem */ .wz)(modal.item._id, modal.state, modal.actionType));
        handleModalClose();
    };
    const handleModalClose = ()=>{
        dispatch({
            type: "MODAL",
            payload: {}
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "modal",
        id: "exampleModal",
        tabIndex: "-1",
        role: "dialog",
        "aria-labelledby": "exampleModalLabel",
        "aria-hidden": "true",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "modal-dialog",
            role: "document",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "modal-content",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "modal-header",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                className: "text-capitalize modal-title",
                                id: "exampleModalLabel",
                                children: modal.title && modal.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: "close",
                                onClick: handleModalClose,
                                "data-dismiss": "modal",
                                "aria-label": "Close",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    "aria-hidden": "true",
                                    children: "\xd7"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "modal-body",
                        children: "Are you sure you want to delete this item?"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "modal-footer",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: "btn btn-primary",
                                "data-dismiss": "modal",
                                onClick: handleModalClose,
                                children: "Close"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                onClick: handleClick,
                                "data-dismiss": "modal",
                                className: "btn btn-danger",
                                children: "Yes"
                            })
                        ]
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 5725:
/***/ ((module) => {


/** @type {import('next').NextConfig} */ const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    env: {
        BASE_URL: "http://localhost:3000/api"
    }
};
module.exports = nextConfig;


/***/ })

};
;