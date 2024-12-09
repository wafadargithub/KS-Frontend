import { useNavigate } from "react-router-dom"

const Login=({setAuth})=>{
    const navigate=useNavigate()
    return(
        <>
        <div className="h-full w-full flex justify-center items-center">
            <div className="w-1/4 h-2/4 bg-slate-600 flex flex-col">
            <h1 className=" bg-red-500 flex justify-center items-center m-2 text-2xl font-medium p-2 text-gray-200">Login Form</h1>
             <div className="m-2 h-3/5  flex flex-col gap-2 ">
             <label className="text-xl text-white">username</label>
             <input className="p-2 rounded-md " placeholder="enter the username" type="text" required/>
             <label className="text-xl text-white">password</label>
             <input className="p-2 rounded-md " placeholder="enter the password" type="password" required/>
             <p className="text-white">Don't have an account <span className=":hover text-blue-600 cursor-pointer" 
              onClick={()=>{
                setAuth("signup")
              }}
              >Signup</span></p>
             <div className="flex justify-center">
                <button className="p-2 bg-blue-600 m-2 w-2/5 rounded-md" 
                onClick={()=>{
                    navigate("/index")
                }}
                >Login</button>
             </div>
             </div>
            </div>
        </div>
       
         
        </>
    )
}

export default Login;