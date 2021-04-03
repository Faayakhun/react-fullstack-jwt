import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {Navbar} from 'react-bootstrap'

function Nav() {
    const isLoggedIn = useSelector((state)=>state.user.isLoggedIn)
    const deleteLogout = () => {
        localStorage.clear()
    }
    return (
        <div>
        <Navbar bg="dark" expand="lg" >
        <a className="navbar-brand">Navbar</a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <div className="navbar-nav">
            <li className="nav-link" >
                <Link to = "/register">Register</Link>
            </li>
            <li className="nav-link">
                {isLoggedIn ? <Link onClick={deleteLogout}>Logout</Link> : <Link to = "/login">Login</Link>}

            </li>
            <li className="nav-link" >
                <Link to = "/cart">Cart Page</Link>
            </li>
        </div>
        </Navbar.Collapse>
        </Navbar>
    </div>
    )
}

export default Nav
