import Navbar from "./nav-bar";
import Sidebar from "./side-bar";

 

const Layout=()=>{
    return(
        <>
        <div className="bg-gray-200 h-full w-full">
             <Navbar/>
             <Sidebar/>
        </div>
        </>
    )
}

export default Layout;