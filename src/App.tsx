import React ,{useState , useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./components/Login"
import Signup from './components/Signup';
import TopNavigation from "./components/topNavigation"
import { BrowserRouter as Router, Route} from "react-router-dom";
import AuthContext from "./context/auth-context";
import Jwt from "jsonwebtoken";
import Dashboard from './components/Dashboard';
import Charts from './components/Charts'
const App: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false)
  const [authenticatedUser, setauthenticatedUser] = useState({    
    exp: 1,
    iat: 1,
    name: "name",
    roles: ["ROLE"],
    sub: "0",
    username: "username"
  });
  const login = (email: string,password: string)=>{
    return (email+ " "+ password)
  }
  const register = (name :string,
    username: string,
    password: string,
    email: string)=>{

  }
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if (token)
    {
      const decoded : any = Jwt.decode(token)
      setauthenticatedUser(decoded);
      setIsConnected(true);
      console.log("Connected as",decoded)
    }
    else
    console.log("Not connected")
  },[])
  return (
    <AuthContext.Provider value={{isConnected,authenticatedUser: authenticatedUser,login : login,register}}>
      
    <Router>
    <TopNavigation></TopNavigation>
    <div className="p-5">
      <Route path="/login/" component={Login} />
      <Route path="/signup/" component={Signup} />
      <Route path="/dashboard2/" component={Charts} />
      <Route path="/dashboard/" component={Dashboard} />
    </div>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
