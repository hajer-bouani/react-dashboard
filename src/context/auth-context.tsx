
// Les imports 
import React from 'react'


// Declaration du context auth qui est reponsable de gerer les etats globals reliés à l'authentification 
const authContext = React.createContext(
    {
    isConnected: false,
    authenticatedUser: {    
        exp: 1,
        iat: 1,
        name: "name",
        roles: ["ROLE"],
        sub: "0",
        username: "username"
      },
    setIsConnected: (state:boolean)=>{},
    setUser: (user:any)=>{},
});

export default authContext;