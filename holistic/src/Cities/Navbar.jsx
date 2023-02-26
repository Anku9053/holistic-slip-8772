import './Navbar.css'
import { useAuth0 } from "@auth0/auth0-react";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
export const Navbar  =()=>{
  const navigate = useNavigate();
  const { loginWithRedirect,user,isAuthenticated,logout } = useAuth0();
    return(
        <>
      

        <div className='navbar1'>
       <div className='navbar2'>
        Enable Accessibility
       </div>
       <div className='navbar3'>
        <p className='navbar3p'>
             Earn Rewards On Purchases
        </p>
        <p className='navbar3p2'>
        LIMITED TIME! UP TO 40% OFF SALE
        </p>
        <h3 className='navbar3p2'>
         VIEW ALL OFFERS
        </h3 >
        <p onClick={()=>navigate(`/product`)} className='navbar3p2'>Stores
            {/* <div className='navbar2pd'></div> */}

        </p>
        <p >{isAuthenticated && <p className='username'>{user.name}</p>}</p>
       {
        isAuthenticated ?(
            <button className='button-5' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>
        ):(
            <button className='button-5' onClick={() => loginWithRedirect()}>Log In</button>
        )
        
       }
       </div>
   
       {/* <div className='n3'>
       <h3 className='h3'>NEW!
       <div className='dis'>
        <p>Featured</p>
        <p>View All</p>
        <p>Women Tall</p>
        <p></p>
        </div>
       </h3>
       <h3 className='h3'>WOMEN</h3>
       <h3 className='h3'>MEN</h3>
       <h3 className='h3'>KIDS</h3>
       <h3 className='h3'>OUTERWEAR</h3>
       <h3 className='h3'>GEAR</h3>
       <h3 className='h3'>FOOTWEAR</h3>
       <h3 className='h3'>HOME</h3>
       </div> */}
    <div className='dis'>
    <div class="dropdown">
  <h3 class="dropbtn">NEW!</h3>
  <div class="dropdown-content">
    <a href="#">Feature</a>
    <a href="#">Women training</a>
    <a href="#">Men training</a>
    <a href="#">Women travels</a>
    <a href="#">Mens travels</a>
  </div>
</div>

<div class="dropdown">
  <h3 class="dropbtn">WOMEN</h3>
  <div class="dropdown-content">
    <a href="#">View All</a>
    <a href="#">Women's Tall</a>
    <a href="#">Women's pettie</a>
    <a href="#">Tops</a>
    <a href="#">Jeans</a>
    
  </div>
</div>

<div class="dropdown">
  <h3 class="dropbtn">MEN</h3>
  <div class="dropdown-content">
    <a href="#">MENS PAGE</a>
    <a href="#">WOMENS PAGE</a>
    <a href="#">Kids PAGE</a>
    <a href="#">Googles PAGE</a>
    <a href="#">Spectatles PAGE</a>
    <a href="#">Product PAGE</a>
    <a href="#">Contact PAGE</a>
    <a href="#">About PAGE</a>
    <a href="#">About PAGE</a>
  </div>
</div>

<div class="dropdown">
  <h3 class="dropbtn">MEN</h3>
  <div class="dropdown-content">
    <a href="#">MENS PAGE</a>
    <a href="#">Kids PAGE</a>
    <a href="#">Googles PAGE</a>
    <a href="#">Spectatles PAGE</a>
    <a href="#">Product PAGE</a>
    <a href="#">Contact PAGE</a>
    <a href="#">About PAGE</a>
    <a href="#">About PAGE</a>
  </div>
</div>


<div class="dropdown">
  <h3 class="dropbtn">KIDS</h3>
  <div class="dropdown-content">
  <a href="#">MENS PAGE</a>
    <a href="#">WOMENS PAGE</a>
    <a href="#">Kids PAGE</a>
    <a href="#">Googles PAGE</a>
    <a href="#">Spectatles PAGE</a>
    <a href="#">Product PAGE</a>
    <a href="#">Contact PAGE</a>
    <a href="#">About PAGE</a>
    <a href="#">About PAGE</a>
  </div>
</div>


<div class="dropdown">
  <h3 class="dropbtn">FOOTWEAR</h3>
  <div class="dropdown-content">
    <a href="#">MENS PAGE</a>
    <a href="#">Footer PAGE</a>
    <a href="#">Comfort PAGE</a>
    <a href="#">Zip PAGE</a>
    <a href="#">Tissue PAGE</a>
    <a href="#">Tarot PAGE</a>
    <a href="#">Casue PAGE</a>
    <a href="#">Projects PAGE</a>
    <a href="#">Sunglasses PAGE</a>
    <a href="#">Api PAGE</a>
    <a href="#">tex PAGE</a>
    <a href="#">Comfort PAGE</a>

  </div>
</div>

<div class="dropdown">
  <h3 class="dropbtn">GEAR</h3>
  <div class="dropdown-content">
    <a href="#">MENS PAGE</a>
    <a href="#">MENS PAGE</a>
    <a href="#">MENS PAGE</a>
  </div>
</div>


</div>

        </div>

        {/* <div className='one'>one</div>
        <div className='one'></div>
        <div className='one'></div>
        <div className='one'></div> */}

       
        </>
    )
}





/* CSS */