import React, { Component } from "react";

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  onIncrement() {
    this.setState({
      count: this.state.count + 1
    });
  }

  onDecrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div>
        <button
          className="counter__btn-increment"
          onClick={() => this.onIncrement()}
        >
          +
        </button>
        <span className="counter__value">
          {this.state.count}
        </span>
        <button
          className="counter__btn-decrement"
          onClick={() => this.onDecrement()}
        >
          -
        </button>
      </div>
    );
  }
}

export default CounterContainer;
