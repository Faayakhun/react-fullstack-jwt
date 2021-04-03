import axios from 'axios'
export const REGISTER = 'REGISTER'
export const LOGIN = 'LOGIN'

export const setRegister = (data) => {
    return {
        type: REGISTER,
        payload: data
    }
}

export const setLogin = (data) => {
    return {
        type: LOGIN,
        payload: data
    }
}


export const registerActions = (value, event, history) => (dispatch) => {
    event.preventDefault()
    console.log("register action values",value)
    console.log("register action event",event)
    console.log("register action history",history)

    return axios
        .post("https://faay-backend-react-jwt.herokuapp.com/register",value)
        .then((response)=> {
            console.log("response register dari server",response)
            dispatch(setRegister(response.data))
            history.push("/login")
    })
        .catch((error)=>{
            console.log(error.response.data)
        })
}

export const loginActions = (value, event,history) => (dispatch) => {
    event.preventDefault()
    console.log("login action values",value)
    console.log("login action event",event)

    return axios
        .post("https://faay-backend-react-jwt.herokuapp.com/login",value)
        .then((response)=> {
            console.log("response login dari server",response)
            dispatch(setLogin(response.data))
            if (response.data.token !== undefined) {
                localStorage.setItem('token', response.data.token)
                alert("login berhasil")
                history.push("/cart")
            } else {
                alert("invalid login credentials")
            }
            
    })
        .catch((error)=>{
            console.log(error)
        })
}