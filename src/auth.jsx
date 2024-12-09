import {useState} from "react"
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
 

const Auth=()=>{
const [auth,setAuth]=useState("login")
    
    return(
        <>
        {auth == "login" && <Login setAuth={setAuth}/>}
        {auth == "signup" && <Signup setAuth={setAuth}/>}
        </>
    )
}

export default Auth;