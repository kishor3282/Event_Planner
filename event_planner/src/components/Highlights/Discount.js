import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";


import MyButton from '../utils/MyButtons';


class Discount extends Component {

    state = {
        discountStart:0,
        discountEnd:30
    }
    porcentage = () => {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart:this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.porcentage()
        },20)
    }


  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">

        <Fade
        onReveal={()=> this.porcentage()}
        >
        <div className="discount_porcentage">
            <span>{this.state.discountStart}%</span>
            <span>OFF</span>
          </div>

        </Fade>
         
<Slide right>
<div className="discount_description">
            <h3>Purchase tickets before 13th MAY</h3>
            <p>
              Concerts are live performances by a musician or multiple
              musicians, where the performer or performing group plays a piece
              or multiple pieces of music. Those pieces are created by
              themselves or by other songwriters. Concerts are held in all types
              of places from a small house/apartment show to a large show at an
              arena or amphitheater.
            </p>
           <MyButton
           text="Purchase ticket"
           bck="#ffa800"
           color="#ffffff"
           link="http://google.com"
           
           />
          </div>
</Slide>
          
        </div>
      </div>
    );
  }
}

export default Discount;
