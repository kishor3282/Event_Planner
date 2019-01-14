import React from 'react';
import Slider from "react-slick";

 import bc_JPG from '../../resources/images/icons/bc.JPG';
  import bc2_JPG from '../../resources/images/icons/bc2.JPG';
  import bc3_JPG from '../../resources/images/icons/bc3.JPG';

const Carrousel =() => {
// for image slider
const settings = {
    dots: false,
    infinite:true,
    autoplay: true,
    speed: 5000
}


return(
    <div
    className="carrousel_wrapper"
    style={{
        height:`${window.innerHeight}px`,
        overflow:'hidden'
    }}
    >
        <Slider {...settings}>

           <div>
              <div 
              className="carrousel_image"
              style={{
                  background:`url(${bc_JPG})`,
                  height:`${window.innerHeight}px`
              }}
              >
              
              </div>
           </div>
           <div>
           <div 
              className="carrousel_image"
              style={{
                  background:`url(${bc2_JPG})`,
                  height:`${window.innerHeight}px`
              }}
              >
              
              </div>
           </div>
           <div>
           <div 
              className="carrousel_image"
              style={{
                  background:`url(${bc3_JPG})`,
                  height:`${window.innerHeight}px`
              }}
              >
              
              </div>
           </div>


        </Slider>
        
    </div>
);
};

export default Carrousel;