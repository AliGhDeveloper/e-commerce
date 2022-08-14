import { getData } from "utils/fetchData";


export const addToCart = ( product, cart ) => {
    if(product.inStock === 0) return { type: 'NOTIFY', payload: { error: 'product is out of stock!'}};
    
    const check = cart.every( item => item._id !== product._id)
    console.log(check)
    if(!check) return  { type : 'NOTIFY', payload: { error: "product is already in your cart"}};

    return { type: 'ADD_CART', payload : [...cart, { ...product, quantity: 1}]};
};

export const increaseItem = (cart, id) => {
    const newCart = [...cart];
    newCart.forEach( item => {
        if( item._id === id ){
            item.quantity += 1
        }
    })
    return { type : 'ADD_CART', payload: newCart}
};

export const decreaseItem = (cart, id) => {
    const newCart = [...cart];
    newCart.forEach( item => {
        if( item._id === id ){
            item.quantity -= 1
        }
    })
    return { type : 'ADD_CART', payload: newCart}
};

export const deleteItem = (itemId, array, type) => {
    let newArr = [...array];
    if(Array.isArray(itemId)) {
        itemId.forEach( id => {
            newArr = newArr.filter(item => item._id !== id )
        })
    } else {
        newArr = array.filter( item => item._id === itemId)
    }
    return { type , payload : newArr}
}

export const updateItem = (state, id, updatedata, type) => {
    
    const newArr = state.map(item => {
        if(item._id === id){
            return updatedata
        }
        return item
    });
    return { type , payload : newArr}
};