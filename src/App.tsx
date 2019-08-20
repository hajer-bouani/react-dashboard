import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./components/Login"
import Signup from './components/Signup';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const App: React.FC = () => {
  return (
    <Router>
    <div>

      <Route path="/Login/" component={Login} />
      <Route path="/SignUp/" component={Signup} />
    {/* <Signup></Signup> */}
    </div>
    </Router>
  );
}

export default App;
