"use strict";
exports.id = 14;
exports.ids = [14];
exports.modules = {

/***/ 5014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$G": () => (/* binding */ updateItem),
/* harmony export */   "Xq": () => (/* binding */ addToCart),
/* harmony export */   "dx": () => (/* binding */ decreaseItem),
/* harmony export */   "pE": () => (/* binding */ increaseItem),
/* harmony export */   "wz": () => (/* binding */ deleteItem)
/* harmony export */ });

const addToCart = (product, cart)=>{
    if (product.inStock === 0) return {
        type: "NOTIFY",
        payload: {
            error: "product is out of stock!"
        }
    };
    const check = cart.every((item)=>item._id !== product._id);
    console.log(check);
    if (!check) return {
        type: "NOTIFY",
        payload: {
            error: "product is already in your cart"
        }
    };
    return {
        type: "ADD_CART",
        payload: [
            ...cart,
            {
                ...product,
                quantity: 1
            }
        ]
    };
};
const increaseItem = (cart, id)=>{
    const newCart = [
        ...cart
    ];
    newCart.forEach((item)=>{
        if (item._id === id) {
            item.quantity += 1;
        }
    });
    return {
        type: "ADD_CART",
        payload: newCart
    };
};
const decreaseItem = (cart, id)=>{
    const newCart = [
        ...cart
    ];
    newCart.forEach((item)=>{
        if (item._id === id) {
            item.quantity -= 1;
        }
    });
    return {
        type: "ADD_CART",
        payload: newCart
    };
};
const deleteItem = (itemId, array, type)=>{
    let newArr = [
        ...array
    ];
    console.log(Array.isArray(itemId));
    if (Array.isArray(itemId)) {
        itemId.forEach((id)=>{
            newArr = newArr.filter((item)=>item._id !== id);
        });
    } else {
        newArr = array.filter((item)=>{
            return item._id !== itemId;
        });
    }
    return {
        type,
        payload: newArr
    };
};
const updateItem = (state, id, updatedata, type)=>{
    const newArr = state.map((item)=>{
        if (item._id === id) {
            return updatedata;
        }
        return item;
    });
    return {
        type,
        payload: newArr
    };
};


/***/ })

};
;