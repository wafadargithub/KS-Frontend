const Sidebar=()=>{
    return(
        <>
        <div className="   bg-gray-800 h-full w-1/6 px-2 flex pt-20  justify-end  ">
        <div className="w-full h-4/6  ">
        <h1 className="text-xl text-white font-semibold">
            Product management
        </h1>
        <h1 className="text-xl text-white font-semibold">
            Order management
        </h1>
        <h1 className="text-xl text-white font-semibold">
            Customer managment
        </h1>
        <input className="w-52 p-2 rounded-md" placeholder="Search...." required/>
        <button className="rounded-md p-2 mt-2 w-20 bg-white text-gray-800">Search</button>
        </div>
        </div>
        </>
    )
}

export default Sidebar;