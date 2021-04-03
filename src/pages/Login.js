import {useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {useHistory} from 'react-router-dom'
import {loginActions}  from '../redux/actions/user.action'
import {Form} from 'react-bootstrap'

function Login() {
    const history = useHistory()
    const dispacth = useDispatch()

    const user = useSelector((state)=>state.user)
    console.log('user from store',user)

    const [loginState, setLoginState] = useState({
        name:"",
        password:""
    })
    const handleChange = (event) => {
        setLoginState({
            ...loginState,
            [event.target.name]: event.target.value
        })
    }
    return (
        <div>
            
            <Form onSubmit ={(event)=>{
                dispacth(loginActions(loginState,event,history))
            }} >
                <h1>Login Form</h1>
                <div className="form-group text-left">
                <input 
                    type="text"
                    name="name"
                    value={loginState.name}
                    placeholder="Enter your name"
                    onChange={(event)=> handleChange(event)}
                />
                </div>
                <div className="form-group text-left">
                <input 
                    type="password"
                    name="password"
                    value={loginState.password}
                    placeholder="Enter your password"
                    onChange={(event)=> handleChange(event)}
                />
                </div>
                <div className="form-check">
                </div>
                <button className= 'btn btn-primary'>Login</button>
            </Form>
        </div>
    )
}

export default Login

