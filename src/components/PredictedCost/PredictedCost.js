import React from "react";

// CSS
import "./PredictedCost.css";
// import icon__money from "@/assets/img/icons/icon__money.svg";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsedTime: 0,
      nextTarget: 60,
      cost: 0,
    };

    this.countUp = this.countUp.bind(this);
    this.startCounting();
  }

  startCounting() {
    setInterval(this.countUp, 1000);
  }

  countUp() {
    this.setState(({ elapsedTime }) => ({ elapsedTime: elapsedTime + 1 }));
    if (this.state.elapsedTime == this.state.nextTarget) {
      this.setState({
        cost: (this.state.cost += 1),
        nextTarget: this.state.nextTarget + 60,
      });
    }
  }

  render() {
    return (
      <div>
        <div class="predictedcost__counter">
          {/* <img src={icon__money} alt="timer icon"></img>  */}
          Uppskattad kostnad: <span>{this.state.cost} Sek</span>
        </div>
      </div>
    );
  }
}

export default Counter;
