import {GET_CART} from '../actions/cart.action'

const initialState = {
    data:[]
}

const cart = (state = initialState,action) => {
    switch(action.type){
        case GET_CART: {
            return {
                ...state,
                data: action.payload
            }
        }
        default:
            return state
    }
}

export default cart