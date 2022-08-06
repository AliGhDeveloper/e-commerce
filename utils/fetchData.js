export const postData = async (url, post, token) => {
    const response = await fetch(process.env.BASE_URL + url, {
        method: 'POST',
        headers : {
            'Content-Type' : 'application/json',
            'authorization' : token
        },
        body : JSON.stringify(post)
    });

    return response
};

export const getData = async (url, token) => {
    try {
        const response = await fetch(process.env.BASE_URL + url, {
            headers : {
                'authorization' : token
            }
        });
    
        return response
    } catch( error ){
        console.log( { error: error.message})
    }
};

export const patchData = async (url, post, token) => {
    const response = await fetch(process.env.BASE_URL + url, {
        method: 'PATCH',
        headers : {
            'Content-Type' : 'application/json',
            'authorization' : token
        },
        body : JSON.stringify(post)
    });

    return response
};

export const deleteData = async (url, data, token) => {
    const response = await fetch(process.env.BASE_URL + url, {
        method: "DELETE",
        headers : {
            'Content-Type' : 'application/json',
            'authorization' : token
        },
        body : JSON.stringify(data)
    });

    return response
};

export const putData = async (url, data, token) => {
    const response = await fetch(process.env.BASE_URL + url, {
        method: 'PUT',
        headers : {
            'Content-Type' : 'application/json',
            'authorization' : token
        },
        body : JSON.stringify(data)
    });

    return response
};
