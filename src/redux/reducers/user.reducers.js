import {REGISTER,LOGIN} from '../actions/user.action'

const token  = localStorage.getItem('token')

const initialState = token !== undefined && token !== null ? {
    isLoggedIn: true,
    data: []
} : {
    isLoggedIn: false,
    data: []
}

const user = (state = initialState, action) => {
    switch(action.type){
        case REGISTER:
            console.log("action didalam reducer register", action)
            return {
                registerData: action.payload,
            }
        case LOGIN:
            console.log("action didalam reducer login", action)
            return {
                ...state,
                isLoggedIn: true
            }
        default:
            return state
    }
}

export default user;