import axios from 'axios'

export const GET_CART = 'GET_CART'

export const getCart = (data) => {
    return {
        type: GET_CART,
        payload: data
    }
}


export const cartAction = () => (dispatch) => {
    const token = localStorage.getItem('token')
    return axios
    .get('https://faay-backend-react-jwt.herokuapp.com/cart',{headers:{
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${token}`
    }})
    .then((response)=> {
        console.log('respon get cart from server', response)
        dispatch(getCart(response.data))
    })
    .catch((error)=>{
        console.log(error)
    })
}