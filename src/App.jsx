import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import Index from ".";
import Auth from "./auth";
import Product from "./products";
import Create from "./components/Product/createproduct";
import Get from "./components/Product/getproduct";
import Layout from "./components/Layouts/layout";
 

const App=()=>{
   

  const [count,setCount]=useState(0);
   
  return(
    <>
    <div className="flex justify-center items-center w-screen h-screen flex-col ">
    <h1 >{`count value${count}`}</h1>
    <button className="bg-slate-600 p-2 border-2 text-white"  onClick={()=>{
     return setCount(count+1)
       
    }}
    >count ++
    </button>
    <button className="bg-slate-600 p-2 border-2 text-white" onClick={()=>{
      return setCount(count-1)
    }}>count  --</button>
      
      
       
    </div>
    {/* <div className="flex justify-center items-center w-screen h-screen flex-col ">

    </div> */}
    {/* <div className="flex justify-center items-center w-screen h-screen flex-col "> */}
      {/* <Routes>
        <Route path="/" element={<Auth/>}/>
        <Route path="index" element={<Index/>}/> 
        <Route path="product" element={<Product/>}>
        <Route path="create" element={<Create/>}/>
        <Route path="get-product" element={<Get/>}/>

        </Route> 

        
      </Routes> */}
      {/* <Layout/>
     </div> */}

    </>
  )
}

export default App;