const Signup=({setAuth})=>{
    return(
        <>
        <div className="h-full w-full flex justify-center items-center">
            <div className="w-1/4 h-6/7 bg-slate-600 flex flex-col">
            <h1 className=" bg-red-500 flex justify-center items-center m-2 text-2xl font-medium p-2 text-gray-200">Signup Form</h1>
             <div className="m-2 h-5/6  flex flex-col gap-2 ">
             <label className="text-xl text-white">username</label>
             <input className="p-1.5 rounded-md " placeholder="enter the username" type="text" required/>
             <label className="text-xl text-white">name</label>
             <input className="p-1.5 rounded-md " placeholder="enter the name" type="text" required/>
             <label className="text-xl text-white">email</label>
             <input className="p-1.5 rounded-md " placeholder="enter the username" type="text" required/>
             <label className="text-xl text-white">password</label>
             <input className="p-1.5 rounded-md " placeholder="enter the password" type="password" required/>
             <label className="text-xl text-white">Confirm password</label>
             <input className="p-1.5 rounded-md " placeholder="enter the password" type="password" required/>
             <p className="text-white">Already have an account <span className=":hover text-blue-600 cursor-pointer"
             onClick={()=>{
                setAuth("login")
             }}
             >Login</span></p>
             <div className="flex justify-center">
                <button className="p-2 bg-blue-600 m-2 w-2/5 rounded-md"
                  onClick={()=>{
                    setAuth("login")
                 }}>
                    Signup</button>
             </div>
             </div>
            </div>
        </div>
      </>
    )
}

export default Signup;