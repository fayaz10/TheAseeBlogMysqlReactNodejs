import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("theUser"))|| null)
    // =======login function==========
    const login = async (inputs)=>{
        const res =  await axios.post('http://localhost:4000/auth/login',inputs)
        setCurrentUser(res.data)
    }

    // =========logout function==========
    const logout = async ()=>{
         await axios.post('http://localhost:4000/auth/logout')
        setCurrentUser(null)
        alert('User Logout!')
    } 
    
    //=============use Effect Function==========
    useEffect(()=>{
        localStorage.setItem("theUser", JSON.stringify(currentUser))
    },[currentUser])
    return(<AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
          </AuthContext.Provider>
        )
}
