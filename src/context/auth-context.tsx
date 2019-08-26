import React from 'react'

const authContext = React.createContext({
    authenticatedUser: {    
    exp: 1,
    iat: 1,
    name: "name",
    roles: ["ROLE"],
    sub: "0",
    username: "username"
    },
    login: (email: string,password: string)=>{},
    register: (name: string,
        username: string,
        password: string,
        email: string)=>{

    }

});

export default authContext;