"use strict";
exports.id = 841;
exports.ids = [841];
exports.modules = {

/***/ 841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrderDetails)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_fetchData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(843);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var store_Actiontypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5014);






function OrderDetails() {
    const { orders , auth  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { id  } = router.query;
    const { 0: orderDetails , 1: setOrderDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (orders) {
            const ord = orders.filter((order)=>order._id === id);
            if (!ord) {
                router.push("/404");
            }
            setOrderDetails(ord[0]);
        }
    }, [
        orders
    ]);
    if (!auth.user) return null;
    const handlePayment = async ()=>{
        const response = await (0,utils_fetchData__WEBPACK_IMPORTED_MODULE_4__/* .patchData */ .B6)(`/orders/${orderDetails._id}`, null, auth.access_token);
        const result = await response.json();
        if (result.error) return dispatch({
            type: "NOTIFY",
            payload: result
        });
        dispatch((0,store_Actiontypes__WEBPACK_IMPORTED_MODULE_5__/* .updateItem */ .$G)(orders, orderDetails._id, {
            ...orderDetails,
            paid: result.data.paid,
            paidAt: result.data.paidAt
        }, "ADD_ORDERS"));
        return dispatch({
            type: "NOTIFY",
            payload: {
                success: result.message
            }
        });
    };
    const handleDelivered = async ()=>{
        dispatch({
            type: "NOTIFY",
            payload: {
                loading: "please wait..."
            }
        });
        const response = await (0,utils_fetchData__WEBPACK_IMPORTED_MODULE_4__/* .patchData */ .B6)(`/orders/delivered/${orderDetails._id}`, null, auth.access_token);
        const result = await response.json();
        if (result.error) return dispatch({
            type: "NOTIFY",
            payload: result
        });
        dispatch({
            type: "NOTIFY",
            payload: {
                success: "order updated"
            }
        });
        if (orderDetails.paid) {
            dispatch((0,store_Actiontypes__WEBPACK_IMPORTED_MODULE_5__/* .updateItem */ .$G)(orders, orderDetails._id, {
                ...orderDetails,
                delivered: true
            }));
        } else {
            dispatch((0,store_Actiontypes__WEBPACK_IMPORTED_MODULE_5__/* .updateItem */ .$G)(orders, orderDetails._id, {
                ...orderDetails,
                paid: true,
                paidAt: result.data.paidAt,
                delivered: true,
                method: result.data.method
            }));
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container d-flex justify-content-around",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "details my-4",
                children: orderDetails && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "mb-3",
                            children: orderDetails._id
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: "shipping"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            style: {
                                listStyle: "none"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    children: [
                                        "Address : ",
                                        orderDetails.address
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    children: [
                                        "Telephone : ",
                                        orderDetails.telephone
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    children: [
                                        "User ID : ",
                                        orderDetails.user
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `alert ${orderDetails.delivered ? "alert-success" : "alert-danger"} d-flex justify-content-between align-items-center`,
                            children: [
                                orderDetails.delivered ? `delivered` : "not delivered",
                                auth.user.role === "admin" && auth.user.root && !orderDetails.delivered && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "btn btn-secondary",
                                    onClick: handleDelivered,
                                    children: "MARK AS DELIVERED"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `alert ${orderDetails.paid ? "alert-success" : "alert-danger"}`,
                            children: orderDetails.paid ? `paid at ${orderDetails.paidAt}` : "not paid"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: "cart: "
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "table-responsive",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                                className: "table-bordered w-100",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                    children: orderDetails && orderDetails.cart.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "p-1",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "img-thumbnail w-100",
                                                        style: {
                                                            height: "80px",
                                                            maxWidth: "80px"
                                                        },
                                                        src: item.images[0].url,
                                                        alt: item.images[0].url
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                    className: "p-1",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "text-danger text-capitalize",
                                                            children: item.title
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                            children: [
                                                                item.quantity,
                                                                " x ",
                                                                item.price,
                                                                " = ",
                                                                item.quantity * item.price,
                                                                " $"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, item._id))
                                })
                            })
                        })
                    ]
                })
            }),
            orderDetails && !orderDetails.paid && auth.user && auth.user.role !== "admin" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "payment-button p-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "payment: "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn btn-primary",
                        onClick: handlePayment,
                        children: "PayPal"
                    })
                ]
            })
        ]
    });
};
;


/***/ })

};
;