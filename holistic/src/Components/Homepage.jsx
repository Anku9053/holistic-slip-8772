
import React from 'react'
import LargeWithNewsletter from "./Footer";
import "./Homepage.css";
import Footer from './Footer';
import Slider from '../Slider/Slider';

const Homepage = () => {


    const Classname1 = {
        display:'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap:"20px",
        padding:"10px",
        width: "90%",
        margin:"auto"
    }
    
    const Classname2 = {
        display:'grid',
        gridTemplateColumns: 'repeat(5,1fr)',
        gap:"20px",
        padding:"10px",
        width: "95%",
        margin:"auto"
    }

    const Classname1_img = {
      
        width: "100%",
        gap:"10px"
    }
    const Classname1_Heading = {
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid'
    }
   





    return (
        <div>
            <h1>Homepage</h1>
            <div style={{backgroundColor:"#f5f5f5"}}>
                <h1 style={{fontSize:"26px",margin:"auto",width:"80%",textAlign:"center"}}>We’re on a mission to inspire, enable & empower everyone to experience the outdoors & live their adventure.</h1>
                <div className='wehave'>
                    <img src="https://www.bergans.com/pub_images/original/4583-14291_1.jpg?extend=copy&width=512&method=resize&type=webp&timestamp=1675684080" alt="" />
                <img src="https://eddiebauer.scene7.com/is/image/EddieBauer/0290703_116Q1?$748V1$" alt="" />
                </div>
            </div>
            <div>
                <h1>Spring Adventures Are Calling!</h1>
                <p style={{fontWeight:"600",fontSize:"15px", textAlign:"center"}}>
                    Outfit yourself with tech-enhanced essentials built for superior <br />
                    performance in unpredictable conditions.</p>
            </div>
            <div style={Classname1}>
                <div>
                    <img style={Classname1_img} src="https://eddiebauer.scene7.com/is/image/EBContent/230222_hp_bottoms_V2?$a8$" alt="" />
                    <h3>The most versatile pants & shorts</h3>
                    <a href=''>WOMEN’S BOTTOMS     </a><a href=''>      MEN’S BOTTOMS</a>
                </div>
                <div>
                    <img style={Classname1_img} src="https://eddiebauer.scene7.com/is/image/EBContent/230222_hp_tops_V2?$a8$" alt="" />
                    <h3>The season's best shirts & tees</h3>
                    <a href=''>WOMEN’S TOPS    </a><a href=''>       MEN’S TOPS</a>
                </div>
                <div>
                    <img style={Classname1_img} src="https://eddiebauer.scene7.com/is/image/EBContent/230222_hp_rain_V2?$a8$" alt="" />
                    <h3>Don't let the weather keep you inside</h3>
                  <a href=''>WOMEN’S RAIN    </a><a href=''>     MEN’S RAIN</a>
                </div>
            </div>


            <div style={{width:"80%",margin:"auto"}}>
                <h1 style={{fontSize:"80px",textAlign:"center"}}>SALE <span style={{fontSize:"80px"}}>|</span> UPTO 40%</h1>
               <div >
                <button className='example'>Shop Women</button>
                <button className='example'>Shop Men</button>
                <button className='example'>Shop Kid</button>
                <button className='example'>Shop Houses</button>
               </div>
               
            </div>


            <div style={{width:"100%",backgroundColor:"#cde2dd",margin:"auto"}}>
                <h1 style={{padding:"20px"}}>Buy Online Pick Up in Store</h1>
                <a style={{marginBottom:"20px"}} href="">Learn More</a>
            </div>

            <div style={Classname1}>
                <div>
                    <img style={Classname1_img} src="https://eddiebauer.scene7.com/is/image/EBContent/230131_hp_mrk3box_flyline_V1?$jpg12$&scl=1" alt="" />
                    <h1 style={{fontSize:"18px"}}>Bc flyline adaptive skiset skill</h1>
                    <p>Designing technical gear and apparel for all adventure seekers is a pledge we take seriously, and that’s why we worked with Eddie Bauer guide & professional sit-ski athlete Trevor Kennison to build a one-of-a-kind kit that would make the slopes more accessible for adaptive skiers. We’re proud to announce that this amazing gear won Product of the year at the 4th annual Outdoor Retailer Innovation Awards.</p>
                    <a href=''>Learn More</a>
                </div>
                <div>
                    <img style={Classname1_img} src="https://eddiebauer.scene7.com/is/image/EBContent/230131_hp_mrk3box_high-fives_V1?$jpg12$&scl=1" alt="" />
                    <h1 style={{fontSize:"18px"}}>Bc flyline adaptive skiset skill</h1>
                    <p>Designing technical gear and apparel for all adventure seekers is a pledge we take seriously, and that’s why we worked with Eddie Bauer guide & professional sit-ski athlete Trevor Kennison to build a one-of-a-kind kit that would make the slopes more accessible for adaptive skiers. We’re proud to announce that this amazing gear won Product of the year at the 4th annual Outdoor Retailer Innovation Awards.</p>
                    <a href=''>Learn More</a>
                </div>
                <div>
                    <img style={Classname1_img} src="https://eddiebauer.scene7.com/is/image/EBContent/221227_hp_mrkt3box_TT_V1?$jpg12$&scl=1" alt="" />
                    <h1 style={{fontSize:"18px"}}>Bc flyline adaptive skiset skill</h1>
                    <p>Designing technical gear and apparel for all adventure seekers is a pledge we take seriously, and that’s why we worked with Eddie Bauer guide & professional sit-ski athlete Trevor Kennison to build a one-of-a-kind kit that would make the slopes more accessible for adaptive skiers. We’re proud to announce that this amazing gear won Product of the year at the 4th annual Outdoor Retailer Innovation Awards.</p>
                    <a href=''>Learn More</a>
                </div>
            </div>
            <div style={{width:"100%",marginTop:"30px"}}>
            <div style={{width:"30%",margin:"auto"}}>
                <h1 style={{display:"flex",textAlign:"center",fontSize:"15px"}}>SHOP NOW PAY LATER <span style={{paddingLeft:"20px",paddingRight:"20px",borderRadius:"10px",textAlign:"center",justifyContent:"center",fontSize:"15px",backgroundColor:"#ffbdcf"}}>Klarna</span><a style={{marginLeft:"10px"}} href="">Learn more</a></h1>
            </div>
            </div>
           
            <div style={{height:"50px"}}>
                <h1 style={{textAlign:"center",fontSize:"15px"}}>
                    Best Sellers
                </h1>
            </div>



            <div style={Classname2}>
                <div >
                    <img className='photos' src="https://eddiebauer.scene7.com/is/image/EddieBauer/D0095604_035C1?$328V1$" alt="" />
                    <h4>Women's Favorite Long-Sleeve Crewneck T-Shirt</h4>
                    <p style={Classname1_Heading }>$230.00-$235.00 </p><p style={{fontWeight:"900",fontFamily:"sans-serif",color:"red"}}> $123.99</p>
                </div>
                <div>
                    <img className='photos' src="https://eddiebauer.scene7.com/is/image/EddieBauer/D0097303_835C1?$328V1$" alt="" />
                      <h4>Women's Favorite Short-Sleeve Crewneck T-Shirt</h4>
                      <p style={Classname1_Heading }>$30.00-$35.00 </p><p style={{fontWeight:"900",fontFamily:"sans-serif",color:"red"}}> $12.99</p>
                </div>
                <div>
                    <img className='photos' src="https://eddiebauer.scene7.com/is/image/EddieBauer/D0332534_325C1?$328V1$" alt="" />
                      <h4>Women's Favorite Long-Sleeve Crewneck T-Shirt</h4>
                      <p>$70.00-$85.00</p>
                </div>
                <div>
                    <img className='photos' src="https://eddiebauer.scene7.com/is/image/EddieBauer/D0311902_045C1?$328V1$" alt="" />
                      <h4>Women's Favorite Short-Sleeve Crewneck T-Shirt</h4>
                      <p>$28.00-$31.00</p>
                </div>
                <div>
                    <img className='photos' src="https://eddiebauer.scene7.com/is/image/EddieBauer/D0311902_045C1?$328V1$" alt="" />
                      <h4>Women's Favorite Short-Sleeve Crewneck T-Shirt</h4>
                      <p style={Classname1_Heading }>$130.00-$315.00 </p><p style={{fontWeight:"900",fontFamily:"sans-serif",color:"red"}}> $126.99</p>
                </div>
               
            </div>






<div style={{backgroundColor:"#f5f5f5"}}>
<Slider/>
</div>


          <Footer/>
        </div>
       
    )
}

export default Homepage