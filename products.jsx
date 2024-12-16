import { Link } from "react-router-dom";
  
const Product =({children})=>{
    return(
        <>
        <div className="h-full w-full p-8 bg-slate-50 flex flex-col"> 
        <h1 className="text-2xl font-semibold">product pages</h1>
        <div className="w-full h-full flex  flex-col py-4 gap-x-4">
        <div className="w-full  h-1/6 flex gap-x-4">
        <Link to="/product/createproduct" className="bg-gray-800 h-11 text-white py-2 px-4  rounded-md">Create Product</Link>
        <Link to="/product/getproduct" className="bg-gray-800 h-11 text-white py-2 px-4 rounded-md">Get Product</Link>
        </div>
      
        <div className="w-full h-5/6 "> {children}</div>
        </div>
        </div>
        
        </>
        
    )
}
export default Product;