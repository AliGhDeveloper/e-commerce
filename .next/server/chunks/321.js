exports.id = 321;
exports.ids = [321];
exports.modules = {

/***/ 469:
/***/ ((module) => {

// Exports
module.exports = {
	"navlink": "Navbar_navlink__w4k_R"
};


/***/ }),

/***/ 2645:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(469);
/* harmony import */ var styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
js_cookie__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function Navbar() {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const cart = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.cart);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const handleLogout = ()=>{
        localStorage.removeItem("firstlogin");
        js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].remove("refreshToken");
        dispatch({
            type: "AUTH",
            payload: {}
        });
        dispatch({
            type: "NOTIFY",
            payload: {
                success: "logged out"
            }
        });
        router.push("/");
    };
    const loggedRouter = ()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
            className: "nav-item",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "dropdown ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "#",
                        onClick: (e)=>e.preventDefault(),
                        className: "mx-2 dropdown-toggle",
                        type: "button",
                        id: "dropdownMenu2",
                        "data-toggle": "dropdown",
                        children: "user"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: auth.user.avatar,
                        style: {
                            width: "50px",
                            height: "40px"
                        },
                        className: "img-thumbnail rounded"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            position: "flex"
                        },
                        className: ` dropdown-menu `,
                        "aria-labelledby": "dropdownMenu2",
                        children: [
                            auth.user.role === "admin" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/users",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "dropdown-item",
                                            children: "Users"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/create",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "dropdown-item",
                                            children: "Create"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/categories",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "dropdown-item",
                                            children: "Categories"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/profile",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "dropdown-item",
                                    type: "button",
                                    children: "profile"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "dropdown-divider"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "dropdown-item",
                                onClick: handleLogout,
                                type: "button",
                                children: "logout"
                            })
                        ]
                    })
                ]
            })
        });
    };
    const auth = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.auth);
    const isActive = (r)=>{
        if (r === router.pathname) {
            return " active";
        } else {
            return "";
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: "navbar navbar-expand-lg navbar-light bg-light",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: "navbar-brand",
                href: "#",
                children: "Online Shop"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "navbar-toggler",
                type: "button",
                "data-toggle": "collapse",
                "data-target": "#navbarNav",
                "aria-controls": "navbarNav",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "navbar-toggler-icon"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "collapse navbar-collapse",
                id: "navbarNav",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "navbar-nav",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "nav-item",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: `${(styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().navlink)} nav-link` + isActive("/"),
                                    "aria-current": "page",
                                    href: "#",
                                    children: "Home"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "nav-item",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/cart",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    className: `${(styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().navlink)} nav-link` + isActive("/cart"),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fas fa-shopping-cart position-relative",
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                style: {
                                                    backgroundColor: "red",
                                                    padding: "2px 5px",
                                                    borderRadius: "50%",
                                                    left: "12px",
                                                    top: "-17px"
                                                },
                                                className: "text-white position-absolute",
                                                children: cart.length
                                            })
                                        }),
                                        "Cart"
                                    ]
                                })
                            })
                        }),
                        Object.keys(auth).length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "nav-item",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/signin",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    className: `${(styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().navlink)} nav-link` + isActive("/signin"),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            "aria-hidden": "true",
                                            className: "fas fa-user"
                                        }),
                                        "SignIn"
                                    ]
                                })
                            })
                        }) : loggedRouter()
                    ]
                })
            })
        ]
    });
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Notify)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/toast.js

function Toast({ title , handleShow , message , bgColor  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            position: "fixed",
            zIndex: 101,
            right: "0"
        },
        className: `alert show bg-${bgColor}`,
        role: "alert",
        "aria-live": "assertive",
        "aria-atomic": "true",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "d-flex justify-content-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                        className: "mr-auto",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        className: "ml-2 mb-1 close",
                        "data-dismiss": "toast",
                        "aria-label": "Close",
                        onClick: handleShow,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "outlined",
                            children: "x"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "toast-body",
                children: message
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/loading.js
var loading = __webpack_require__(138);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./components/notify.js




function Notify() {
    const dispatch = (0,external_react_redux_.useDispatch)();
    const state = (0,external_react_redux_.useSelector)((state)=>state.notify);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            state.loading && /*#__PURE__*/ jsx_runtime_.jsx(loading/* default */.Z, {}),
            state.error && /*#__PURE__*/ jsx_runtime_.jsx(Toast, {
                bgColor: "danger",
                message: state.error,
                title: "error",
                handleShow: ()=>dispatch({
                        type: "NOTIFY",
                        payload: {}
                    })
            }),
            state.success && /*#__PURE__*/ jsx_runtime_.jsx(Toast, {
                bgColor: "success",
                message: state.success,
                title: "success",
                handleShow: ()=>dispatch({
                        type: "NOTIFY",
                        payload: {}
                    })
            })
        ]
    });
};


/***/ })

};
;