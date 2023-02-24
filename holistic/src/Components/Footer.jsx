import React from 'react';
import "./Footer.css";
import { IconName } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='Footerexample1'>
            <div className='Footerexample2'>


                <div style={{ display: "flex" }}>
                    <img style={{ height: "70px", width: "70px", marginTop: "20px" }} src="https://cdn-icons-png.flaticon.com/512/345/345553.png" alt="" />
                    <div>
                        <h2>Store Locator</h2>
                        <p>Find one of the 250 eddie buer <br />Stores in North America </p>
                    </div>

                </div>
                <div style={{ display: "flex" }}>
                    <img style={{ height: "70px", width: "70px", marginTop: "20px" }} src="https://avatars.githubusercontent.com/u/1187159?s=200&v=4" alt="" />
                    <div>
                        <h2>Adventourous Reward</h2>
                        <p>Earn points For every purchases <br />today for 500 points towards your first <br />reward</p>
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <img style={{ height: "74px", width: "90px", marginTop: "20px" }} src="https://img.freepik.com/premium-vector/rb-initial-monogram-vector-icon-illustration_335296-341.jpg?w=740" alt="" />
                    <div>
                        <h2>VISION STATEMENT</h2>
                        <p>To inspire, enable, and empower <br /> everyone to experience the outdoors <br /> and live their adventure.</p>
                    </div>

                </div>


            </div>

            <hr style={{ width: "90%" }} />


            <div className='Footer_Paragraph'>
                <div>
                    <h4>HELP</h4>
                    <p>Customer Service</p>
                    <p>Track Your Order</p>
                    <p>Return Policy</p>
                    <p>Start A Return</p>
                    <p>Shipping</p>
                    <p>Payment Options</p>
                    <p>Contact Us</p>

                </div>
                <div>
                    <h4>SHOPPING</h4>
                    <p>Sign In / Register</p>
                    <p>Buy Gift Cards</p>
                    <p>Promos And Coupons</p>
                    <p>Find Your Fit</p>
                    <p>Price Match Policy</p>
                </div>
           
            
                <div>
                    <h4>EB CREDIT CARD</h4>
                    <p>Apply Now</p>
                    <p>Pay My Bill</p>
                    <br />
                    <h4>VISIT A STORE</h4>
                    <p>Store Locator</p>

                </div>
          

          
                <div>
                    <h4>(RE)ADVENTURE</h4>
                    <p>About</p>
                    <p>Resale</p>
                </div>
            

            
                <div>
                    <h4>ABOUT US</h4>
                    <p>Our Story</p>
                    <p>Careers</p>
                    <p>Land Acknowledgement</p>
                    <p>Privacy Policy</p>
                    <p>CA Supply Chains Act</p>
                    <p>Do Not Sell & CCPA</p>
                    <p>Do Not Contact Me</p>
                    <p>Accessibility Statement</p>

                </div>

              
                

                <div>
                    <h4>BE THE FIRST TO KNOW</h4>
                    <p>Earn rewards and be the first to hear about sales <br />and special offers.</p>
                   <button className='BUTTON'>SIGN UP</button>

                </div>
               
            </div>

            <hr style={{ width: "90%" }} />


            <div style={{width:"100%"}}>
                <div style={{width:"50%",textAlign:"left",marginLeft:"50px",display:"flex"}}>
                <img style={{width:"10%",height:"10%",paddingBottom:"10px"}} src="https://thumbs.dreamstime.com/b/minimal-usa-flag-icon-unaited-states-america-flag-icon-minimal-design-vector-illustration-91223246.jpg" alt="" />
                <img style={{width:"7%",height:"7%"}} src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/canadian-maple-leaf-bigalbaloo-stock.jpg" alt="" />
                <img style={{width:"20%",height:"20%",paddingBottom:"10px"}} src="https://logos-world.net/wp-content/uploads/2022/04/Eddie-Bauer-Logo.png" alt="" />
                </div>
                
            </div>
        </div>
    )
}

export default Footer