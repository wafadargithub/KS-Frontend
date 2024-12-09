import { Link } from "react-router-dom";

const Product =()=>{
    return(
        <>
        <h1>product pages</h1>
        <Link to="/get-product">Get Product</Link>
        <Link to="/create-product">Create Product</Link>
        </>
    )
}
export default Product;