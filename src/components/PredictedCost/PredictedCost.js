import React from "react";

// CSS
import "./PredictedCost.css";

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
        <div class="counter">Estimated cost: {this.state.cost} Sek</div>
      </div>
    );
  }
}

export default Counter;
