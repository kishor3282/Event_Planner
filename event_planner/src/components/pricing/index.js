import React, { Component } from "react";
import MyButton from "../utils/MyButtons";
import Zoom from "react-reveal/Zoom";


class Pricing extends Component {
  state = {
    prices: [250, 500, 800],
    positions: ["Silver", "Gold", "Platinum"],
    desc: [
      "Silver Ticket is one of the chipest ticket of this concert cheers up and enjoy the full concert",
      "Gold Ticket is medium ticket where you can enjoy the full seniero of the live concert",
      "Platinum Ticket is the expensive ticket those who buy this ticket he will get one lucky draw"
    ],
    linkto: ["http://sales/s", "http://sales/g", "http://sales/p"]
    
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom duration={500} delay={600}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>Rs.{this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">
              <span>{this.state.desc[i]}</span>
            </div>
            <div className="pricing_button">
              <MyButton
                text="Purchase Tickets"
                bck="#ffa800"
                color="#ffffff"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>

          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
