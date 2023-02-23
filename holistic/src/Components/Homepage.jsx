import { textDecoration } from '@chakra-ui/react'
import React from 'react'

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
        width: "90%",
        margin:"auto"
    }

    const Classname1_img = {
      
        width: "100%",
        gap:"10px"
    }
   





    return (
        <div>
            <h1>Homepage</h1>
            <div>
                <h1>We’re on a mission to inspire, enable & empower everyone to experience the outdoors & live their adventure.</h1>
            </div>
            <div>
                <h1>Spring Adventures Are Calling!</h1>
                <p>
                    Outfit yourself with tech-enhanced essentials built for superior
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
                <button style={{marginLeft:"40px",backgroundColor:"black",fontSize:"20px",color:"white",width:"180px",height:"40px"}}>Shop Women</button>
                <button style={{marginLeft:"40px",backgroundColor:"black",fontSize:"20px",color:"white",width:"180px",height:"40px"}}>Shop Men</button>
                <button style={{marginLeft:"40px",backgroundColor:"black",fontSize:"20px",color:"white",width:"180px",height:"40px"}}>Shop Kid</button>
                <button style={{marginLeft:"40px",backgroundColor:"black",fontSize:"20px",color:"white",width:"180px",height:"40px"}}>Shop Houses</button>
               </div>
               
            </div>


            <div style={{width:"60%",backgroundColor:"#cde2dd",margin:"auto"}}>
                <h1 style={{padding:"20px"}}>Buy Online Pick Up in Store</h1>
                <a href="">Learn More</a>
            </div>

            <div style={Classname1}>
                <div>
                    <img style={Classname1_img} src="https://eddiebauer.scene7.com/is/image/EBContent/230131_hp_mrk3box_flyline_V1?$jpg12$&scl=1" alt="" />
                    <h1>Bc flyline adaptive skiset skill</h1>
                    <p>Designing technical gear and apparel for all adventure seekers is a pledge we take seriously, and that’s why we worked with Eddie Bauer guide & professional sit-ski athlete Trevor Kennison to build a one-of-a-kind kit that would make the slopes more accessible for adaptive skiers. We’re proud to announce that this amazing gear won Product of the year at the 4th annual Outdoor Retailer Innovation Awards.</p>
                    <a href=''>Learn More</a>
                </div>
                <div>
                    <img style={Classname1_img} src="https://eddiebauer.scene7.com/is/image/EBContent/230131_hp_mrk3box_high-fives_V1?$jpg12$&scl=1" alt="" />
                    <h1>Bc flyline adaptive skiset skill</h1>
                    <p>Designing technical gear and apparel for all adventure seekers is a pledge we take seriously, and that’s why we worked with Eddie Bauer guide & professional sit-ski athlete Trevor Kennison to build a one-of-a-kind kit that would make the slopes more accessible for adaptive skiers. We’re proud to announce that this amazing gear won Product of the year at the 4th annual Outdoor Retailer Innovation Awards.</p>
                    <a href=''>Learn More</a>
                </div>
                <div>
                    <img style={Classname1_img} src="https://eddiebauer.scene7.com/is/image/EBContent/221227_hp_mrkt3box_TT_V1?$jpg12$&scl=1" alt="" />
                    <h1>Bc flyline adaptive skiset skill</h1>
                    <p>Designing technical gear and apparel for all adventure seekers is a pledge we take seriously, and that’s why we worked with Eddie Bauer guide & professional sit-ski athlete Trevor Kennison to build a one-of-a-kind kit that would make the slopes more accessible for adaptive skiers. We’re proud to announce that this amazing gear won Product of the year at the 4th annual Outdoor Retailer Innovation Awards.</p>
                    <a href=''>Learn More</a>
                </div>
            </div>

            <div style={{width:"60%",margin:"auto"}}>
                <h1 style={{display:"flex",textAlign:"center"}}>SHOP NOW PAY LATER <span style={{marginLeft:"10px",paddingLeft:"20px",paddingRight:"20px",borderRadius:"10px",fontSize:"30px",backgroundColor:"#ffbdcf"}}>Klarna</span><a style={{marginLeft:"10px"}} href="">Learn more</a></h1>
            </div>
            <div>
                <h1 style={{textAlign:"center"}}>
                    Best Sellers
                </h1>
            </div>



            <div style={Classname2}>
                <div>
                    <img style={Classname1_img} src="https://eddiebauer.scene7.com/is/image/EddieBauer/D0095604_035C1?$328V1$" alt="" />
                    <h4>Women's Favorite Long-Sleeve Crewneck T-Shirt</h4>
                    <p>$30.00-$35.00 </p><p> Sale Price$23.99</p>
                </div>
                <div>
                    <img style={Classname1_img} src="https://eddiebauer.scene7.com/is/image/EddieBauer/D0097303_835C1?$328V1$" alt="" />
                      <h4>Women's Favorite Short-Sleeve Crewneck T-Shirt</h4>
                      <p>$30.00-$35.00 </p><p> Sale Price$23.99</p>
                </div>
                <div>
                    <img style={Classname1_img} src="https://eddiebauer.scene7.com/is/image/EddieBauer/D0332534_325C1?$328V1$" alt="" />
                      <h4>Women's Favorite Long-Sleeve Crewneck T-Shirt</h4>
                      <p>$30.00-$35.00 </p><p> Sale Price$23.99</p>
                </div>
                <div>
                    <img style={Classname1_img} src="https://eddiebauer.scene7.com/is/image/EddieBauer/D0311902_045C1?$328V1$" alt="" />
                      <h4>Women's Favorite Short-Sleeve Crewneck T-Shirt</h4>
                      <p>$30.00-$35.00 </p><p> Sale Price$23.99</p>
                </div>
                <div>
                    <img style={Classname1_img} src="https://eddiebauer.scene7.com/is/image/EddieBauer/D0097327_443C1?$328V1$" alt="" />
                    <h4>Women's Favorite Short-Sleeve V-Neck T-Shirt</h4>
                    <p>$30.00-$35.00 </p><p> Sale Price$23.99</p>
                </div>
            </div>















        </div>
    )
}

export default Homepage