import * as actions from './Actions';
const initialState = { products: [], notify: {} , auth: {}, cart: [], modal: {}, orders: [], users: [], categories: []}
export default function reducers( state = initialState, action){
    switch(action.type){
        case actions.NOTIFY :
            return {
                ...state, 
                notify: action.payload
            };
        case actions.ADD_CAT :
            return {
                ...state, 
                categories: action.payload
            };
        case actions.MODAL :
            return {
                ...state, 
                modal: action.payload
            };
        case actions.AUTH : 
            return {
                ...state,
                auth : action.payload
            };
        case actions.ADD_CART : 
            return {
                ...state,
                cart : action.payload
            };
        case actions.ADD_ORDERS :
            return {
                ...state, 
                orders : action.payload
            };
        case actions.ADD_USERS :
        return {
            ...state, 
            users : action.payload
        };
        case actions.ADD_PRODUCT:
            return {
                ...state,
                products : action.payload
            }
        default:
            return state
    }
};
