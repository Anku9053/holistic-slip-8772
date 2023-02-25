import "./product.css"

const Cityitem = ({ title,image, id, brand,category, price, handledeletecity }) => {
   
  
    return (
        <div className="product">
      <div className="productgrid">
        <div>
        <img style={{width:"100%"}} src={image} alt="" />
        <p>NAME:{title}</p>
        <p>COUNTRY:{brand}</p>
        <p>Category:{category}</p>
        
        <p>Price:{price}</p>
        <button>Add To Cart</button>
        {/* <button onClick={() => handledeletecity(id)}>DeleteCity</button> */}
        </div>
       
      </div>
      </div>
    );
  };
  export default Cityitem;
  