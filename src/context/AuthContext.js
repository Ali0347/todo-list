import React, { createContext, useState } from 'react'

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {

    // Component did mount
    const API_URL = ''
    const [auth, setAuth] = useState("ali")
    const [dark, setDark] = useState(true)

    return (

    <AuthContext.Provider value={
        {auth,setAuth,dark,setDark,API_URL}
    }>
{children}
    </AuthContext.Provider>
    
    // <div>AuthContextProvider</div>

    );
}

export default AuthContextProvider