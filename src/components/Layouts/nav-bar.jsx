const Navbar=()=>{
    return(
        <>
        <div className=" absolute top-0 bg-gray-800 h-20 w-full border-b-2 border-white px-8 flex justify-end ">
            <div className="h-full w-2/5  flex items-center justify-between">
            <p className="text-xl text-white font-semibold">Home</p>
            <p className="text-xl text-white font-semibold">About us</p>
            <p className="text-xl text-white font-semibold">Contact us</p>


            </div>
        </div>
        </>
    )
}

export default Navbar;