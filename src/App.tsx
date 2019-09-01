// Les imports 
import React ,{useState , useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./components/Login"
import Signup from './components/Signup';
import TopNavigation from "./components/topNavigation"
import { BrowserRouter as Router, Route} from "react-router-dom";
import AuthContext from "./context/auth-context";
import Jwt from "jsonwebtoken";
import Dashboard from './components/Dashboard';
// dans le nouveaux concept de react on evite d'utiliser les classes alors on utilise des entites
const App: React.FC = () => {
  /* Les entites et leurs settets
     en utilisant le useState qui permet de gerer les entites dans un composant
  */
  const [isConnected, setIsConnected] = useState(false)
  const [authenticatedUser, setauthenticatedUser] = useState({    
    exp: 1,
    iat: 1,
    name: "name",
    roles: ["ROLE"],
    sub: "0",
    username: "username"
  });
  // Utilisation de useEffect pour executer du code des la creation du component app
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if (token)
    {
      // utilisation de JWT
      const decoded : any = Jwt.decode(token)
      setauthenticatedUser(decoded);
      setIsConnected(true);
      console.log("Connected as",decoded)
    }
    else
    {
      setauthenticatedUser({exp: 1,
        iat: 1,
        name: "name",
        roles: ["ROLE"],
        sub: "0",
        username: "username"})
        setIsConnected(false)
      console.log("Not connected")
    }
  },[])
  // Le resultat retourné par le code JSX
  return (
    // Utilisation du context api et utiliser le component app comme provider
    <AuthContext.Provider value={{isConnected,setIsConnected: setIsConnected,authenticatedUser: authenticatedUser,setUser: setauthenticatedUser}}>
      
    <Router>
    <TopNavigation></TopNavigation>
    <div className="p-5">
      <Route path="/login/" component={Login} />
      <Route path="/signup/" component={Signup} />
      <Route path="/dashboard/" component={Dashboard} />
    </div>
    </Router>
    </AuthContext.Provider>
  );
}
export default App;
