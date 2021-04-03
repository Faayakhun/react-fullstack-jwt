import {useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {useHistory} from 'react-router-dom'
import {registerActions} from '../redux/actions/user.action'
import {Form} from 'react-bootstrap'

function Register() {
    const history = useHistory()
    const dispacth = useDispatch()

    const isLoggedIn = useSelector((state)=>state)
    console.log('status isloggedin dari store',isLoggedIn)

    const [register, setRegister] = useState({
        name:"",
        password:"",
        email: "",
        address: ""
    })
    const handleChange = (event) => {
        setRegister({
            ...register,
            [event.target.name]: event.target.value
        })
    }
    return (
        <div>
            
            <h1>Register Form</h1>
            <Form onSubmit ={(event)=>{
                dispacth(registerActions(register,event,history))
            }}>
                <div className="form-group text-left">
                <input 
                    type="text"
                    name="name"
                    value={register.name}
                    placeholder="Enter your name"
                    onChange={(event)=> handleChange(event)}
                />
                </div>
                <div className="form-group text-left">
                <input 
                    type="password"
                    name="password"
                    value={register.password}
                    placeholder="Enter your password"
                    onChange={(event)=> handleChange(event)}
                />
                </div>
                <div className="form-group text-left">
                 <input 
                    type="text"
                    name="email"
                    value={register.email}
                    placeholder="Enter your email"
                    onChange={(event)=> handleChange(event)}
                />
                </div>
                <div className="form-group text-left">
                 <input 
                    type="text"
                    name="address"
                    value={register.address}
                    placeholder="Enter your address"
                    onChange={(event)=> handleChange(event)}
                />
                </div>
                <div className="form-check">
                </div>
                <button className = "btn btn-primary">Register</button>
            </Form>
        </div>
    )
}

export default Register
