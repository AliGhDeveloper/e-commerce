"use strict";
exports.id = 843;
exports.ids = [843];
exports.modules = {

/***/ 843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B6": () => (/* binding */ patchData),
/* harmony export */   "SR": () => (/* binding */ deleteData),
/* harmony export */   "Yu": () => (/* binding */ getData),
/* harmony export */   "fP": () => (/* binding */ putData),
/* harmony export */   "qC": () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, post, token)=>{
    const response = await fetch("http://localhost:3000/api" + url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "authorization": token
        },
        body: JSON.stringify(post)
    });
    return response;
};
const getData = async (url, token)=>{
    try {
        const response = await fetch("http://localhost:3000/api" + url, {
            headers: {
                "authorization": token
            }
        });
        return response;
    } catch (error) {
        console.log({
            error: error.message
        });
    }
};
const patchData = async (url, post, token)=>{
    const response = await fetch("http://localhost:3000/api" + url, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "authorization": token
        },
        body: JSON.stringify(post)
    });
    return response;
};
const deleteData = async (url, data, token)=>{
    const response = await fetch("http://localhost:3000/api" + url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "authorization": token
        },
        body: JSON.stringify(data)
    });
    return response;
};
const putData = async (url, data, token)=>{
    const response = await fetch("http://localhost:3000/api" + url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "authorization": token
        },
        body: JSON.stringify(data)
    });
    return response;
};


/***/ })

};
;