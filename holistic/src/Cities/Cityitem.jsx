import "./product.css"
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
// import ProductDetails from "./ProductDetails";


// import { useNavigate } from "react-router-dom"
const Cityitem = ({ title,image, id, brand,category, price, handledeletecity }) => {
  const navigate = useNavigate();
 
    return (
        <div className="product">
      <div className="productgrid">
        <div>
        <img style={{width:"100%"}} src={image} alt="" />
        <p>NAME:{title}</p>
        <p>Brand:{brand}</p>
        <p>Category:{category}</p>
        
        <p>Price:{price}</p>

        {/* <Link to={`/products/${id}`} >Watch More</Link> */}
        {/* <Link to={`/products/${id}`}>Watch more</Link> */}
        {/* <a href="ProductDetails">Watchmore</a> */}
        <button onClick={()=>navigate(`/checkout`)}>Add to cart</button>
        {/* <button onClick={() => navigate(`/`)}>Go to Home page</button> */}


        {/* <button onClick={()=>{navigate(`/product/${id}`)}}>Add To Cart</button> */}
        {/* <button onClick={() => handledeletecity(id)}>DeleteCity</button> */}
        </div>
       

      </div>
      </div>
    );
  };
  export default Cityitem;
  