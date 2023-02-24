import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./Slider.css";

const imageData = [
  {
    label: "Image 1",
    alt: "image1",
    url:
      "https://eddiebauer.scene7.com/is/image/EddieBauer/D0080947_736C1?$328V1$"
  },
  {
    label: "Image 2",
    alt: "image2",
    url:
      "https://eddiebauer.scene7.com/is/image/EddieBauer/D0130519_798C1?$328V1$"
  },
  {
    label: "Image 3",
    alt: "image3",
    url: "https://eddiebauer.scene7.com/is/image/EddieBauer/D0130669_356C1?$328V1$"
  },
  {
    label: "Image 4",
    alt: "image4",
    url:
      "https://eddiebauer.scene7.com/is/image/EddieBauer/D0291297_158C1?$328V1$"
  }
  ,
  {
    label: "Image 4",
    alt: "image4",
    url:
      "https://eddiebauer.scene7.com/is/image/EddieBauer/D0230495_100C1?$328V1$"
  }
  ,
  {
    label: "Image 4",
    alt: "image4",
    url:
      "https://eddiebauer.scene7.com/is/image/EddieBauer/D0230469_630C1?$328V1$"
  }
  ,
  {
    label: "Image 4",
    alt: "image4",
    url:
      "https://eddiebauer.scene7.com/is/image/EddieBauer/D0130632_408C1?$328V1$"
  }
  ,
  {
    label: "Image 4",
    alt: "image4",
    url:
      "https://eddiebauer.scene7.com/is/image/EddieBauer/D0314014_100C1?$328V1$"
  }
  ,
  {
    label: "Image 4",
    alt: "image4",
    url:
      "https://eddiebauer.scene7.com/is/image/EddieBauer/D0291314_580C1?$328V1$"
  }
 
];

const renderSlides = imageData.map((image) => (
  <div style={{width:"100%",backgroundColor:"#f5f5f5"}} key={image.alt}>
    <img style={{width:"50%"}} src={image.url} />
   
  </div>
));

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  return (
    <div className="tpp">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        selectedItem={imageData[currentIndex]}
        onChange={handleChange}
        className="carousel-container"
      >
        {renderSlides}
      </Carousel>
    </div>
  );
}