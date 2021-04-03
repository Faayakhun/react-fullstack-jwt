import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

// import Home from './pages/Home'
// import Register from './pages/Register'
// import Login from './pages/Login'
// import Cart from './pages/Cart'

import Nav from './components/Nav'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <div className="App">
      <h1>Redux JWT</h1>
      <Router>
        <Nav />
        <PrivateRoute />
      </Router>
    </div>
  );
}

export default App;
