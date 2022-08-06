"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,187];
exports.modules = {

/***/ 1870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./utils/fetchData.js
var fetchData = __webpack_require__(843);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./utils/filtering.js
function filtering({ router , page , sort , category , search  }) {
    const path = router.pathname;
    const query = router.query;
    if (page) query.page = page;
    if (sort) query.sort = sort;
    if (category) query.category = category;
    if (search) query.search = search;
    router.push({
        pathname: path,
        query
    });
};

// EXTERNAL MODULE: ./store/Actiontypes.js
var Actiontypes = __webpack_require__(5014);
;// CONCATENATED MODULE: ./components/productItem.js




const ProductItem = ({ product  })=>{
    const { cart , auth , products  } = (0,external_react_redux_.useSelector)((state)=>state);
    const dispatch = (0,external_react_redux_.useDispatch)();
    //user card buttons ui
    const userButtons = (product)=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: `/products/${product._id}`,
                    className: "flex-fill w-100 mx-1 btn btn-primary",
                    children: "view"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: ()=>dispatch((0,Actiontypes/* addToCart */.Xq)(product, cart)),
                    className: " flex-fill btn w-100 btn-success mx-1",
                    children: "buy"
                })
            ]
        });
    };
    //admin card buttons ui
    const adminButtons = (product)=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: `/create/${product._id}`,
                    className: "flex-fill w-100 mx-1 btn btn-primary",
                    children: "Edit"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: " flex-fill btn w-100 btn-danger mx-1",
                    "data-toggle": "modal",
                    "data-target": "#exampleModal",
                    onClick: ()=>dispatch({
                            type: "MODAL",
                            payload: {
                                title: product.title,
                                item: product,
                                auth,
                                actionType: "deleteProduct"
                            }
                        }),
                    children: "Delete"
                })
            ]
        });
    };
    const handleCheck = (product)=>{
        dispatch((0,Actiontypes/* updateItem */.$G)(products, product._id, {
            ...product,
            checked: !product.checked
        }, "ADD_PRODUCT"));
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "card",
        style: {
            position: "relative",
            width: "18rem"
        },
        children: [
            auth.user && auth.user.role === "admin" && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    type: "checkbox",
                    checked: product.checked,
                    style: {
                        position: "absolute"
                    },
                    onChange: ()=>handleCheck(product)
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: "card-img-top",
                src: product.images && product.images[0].url,
                alt: "Card image cap"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "card-body",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "stock d-flex justify-content-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                className: "text-danger",
                                children: [
                                    product.price,
                                    "$"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                className: "text-danger",
                                children: [
                                    product.inStock > 0 ? "inStock : " + product.inStock : "out of stock",
                                    " | sold: ",
                                    product.sold
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        className: "card-title text-capitalize",
                        children: product.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "card-text",
                        children: product.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "d-flex justify-content-between",
                        children: auth.user && auth.user.role === "admin" ? adminButtons(product) : userButtons(product)
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const productItem = (ProductItem);

;// CONCATENATED MODULE: ./components/filter.js




function Filter({ categories  }) {
    const router = (0,router_.useRouter)();
    const { 0: category , 1: setCategory  } = (0,external_react_.useState)(router.query.category || "");
    const { 0: search , 1: setSearch  } = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        filtering({
            router,
            search: search ? search.toLowerCase() : "all"
        });
    }, [
        search
    ]);
    const handleCategory = (e)=>{
        setCategory(e.target.value);
        filtering({
            router,
            category: e.target.value
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "filter my-2 d-flex",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "input-group w-25",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "input-group-prepend",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "input-group-text",
                            children: "categroy"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                        value: category,
                        className: "form-control",
                        onChange: handleCategory,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "all",
                                children: "All Products"
                            }),
                            categories.map((cat)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: cat._id,
                                    children: cat.name
                                }, cat._id))
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "text",
                placeholder: "search...",
                name: "title",
                className: "form-control w-50",
                onChange: (e)=>setSearch(e.target.value)
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                className: "form-control w-25",
                onChange: (e)=>{
                    filtering({
                        router,
                        sort: e.target.value
                    });
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "-createdAt",
                        children: "newest"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "oldest",
                        children: "oldest"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "-sold",
                        children: "best sell"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "price",
                        children: "price low-high"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "-price",
                        children: "price high-low"
                    })
                ]
            })
        ]
    });
};
;

;// CONCATENATED MODULE: ./pages/index.js








function Home({ productsList , more  }) {
    const { categories , auth , products  } = (0,external_react_redux_.useSelector)((state)=>state);
    const router = (0,router_.useRouter)();
    //defining state for pagination
    const { 0: page , 1: setPage  } = (0,external_react_.useState)(router.query.page || 1);
    const { 0: isChecked , 1: setIschecked  } = (0,external_react_.useState)(false);
    const { 0: isAllChecked , 1: setIsAllChecked  } = (0,external_react_.useState)(false);
    const { 0: disDeleteAll , 1: setdisDeleteAll  } = (0,external_react_.useState)(true);
    const dispatch = (0,external_react_redux_.useDispatch)();
    (0,external_react_.useEffect)(()=>{
        if (productsList) dispatch({
            type: "ADD_PRODUCT",
            payload: productsList
        });
    }, [
        productsList
    ]);
    (0,external_react_.useEffect)(()=>{
        const arr = products.filter((product)=>product.checked);
        if (arr.length > 0) {
            setdisDeleteAll(false);
        } else {
            setdisDeleteAll(true);
        }
    }, [
        products
    ]);
    (0,external_react_.useEffect)(()=>{
        checkTheCheck();
    }, [
        products
    ]);
    const checkTheCheck = ()=>{
        const arr = products.filter((product)=>!product.checked);
        if (arr.length > 0) {
            setIsAllChecked(false);
        } else {
            setIsAllChecked(true);
        }
    };
    const handleCheckAll = ()=>{
        let newProducts = [];
        products.forEach((product)=>newProducts.push({
                ...product,
                checked: !isChecked
            }));
        dispatch({
            type: "ADD_PRODUCT",
            payload: newProducts
        });
        setIschecked(!isChecked);
        setIsAllChecked(!isAllChecked);
    };
    const handlePagination = (e, option)=>{
        if (option.direc === "next") {
            filtering({
                router,
                page: page + 1
            });
            setPage(page + 1);
        } else {
            if (page > 1) {
                setPage(page - 1);
                filtering({
                    router,
                    page: page - 1
                });
            }
        }
    };
    const handleDeleteAll = ()=>{
        const deletingProducts = products.filter((product)=>product.checked).map((product)=>product._id);
        dispatch({
            type: "MODAL",
            payload: {
                state: products,
                item: [
                    ...deletingProducts
                ],
                actionType: "ADD_PRODUCT",
                auth
            }
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Filter, {
                        categories: categories
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "p-2 align-items-center justify-content-center bg-danger",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "checkbox",
                                checked: isAllChecked,
                                onChange: handleCheckAll
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "btn btn-danger",
                                onClick: handleDeleteAll,
                                style: {
                                    padding: "1px 1px"
                                },
                                "data-toggle": "modal",
                                "data-target": "#exampleModal",
                                disabled: disDeleteAll,
                                children: "delete all"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "products_list",
                children: [
                    !products && /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "there is no product"
                    }),
                    products && products.map((product)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(productItem, {
                            product: product
                        }, product._id);
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                "aria-label": "Page navigation example",
                className: "d-flex justify-content-end mx-3",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "pagination d-flex flex-row-reverse",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: `page-item ${page === 1 && "disabled"}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "page-link",
                                href: "#",
                                onClick: (e)=>handlePagination(e, {
                                        direc: "prev"
                                    }),
                                children: "Previous"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "page-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "page-link",
                                href: "#",
                                children: page
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: `page-item ${!more && "disabled"}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "page-link",
                                href: "#",
                                onClick: (e)=>handlePagination(e, {
                                        direc: "next"
                                    }),
                                children: "Next"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
;
async function getServerSideProps({ query  }) {
    const page = query.page || 1;
    const sort = query.sort || "";
    const category = query.category || "all";
    const search = query.search || "all";
    const response = await (0,fetchData/* getData */.Yu)(`/products?limit=${3}&page=${page}&sort=${sort}&category=${category}&title=${search}`);
    const data = await response.json();
    return {
        props: {
            productsList: data.products || data,
            more: data.more || false
        }
    };
}


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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [843,14], () => (__webpack_exec__(1870)));
module.exports = __webpack_exports__;

})();