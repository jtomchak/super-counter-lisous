import React, { Component } from "react";
import Counter from "./Counter";
import PropTypes from "prop-types";

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialCount
    };
  }

  onIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  onDecrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <Counter
        count={this.state.count}
        onIncrement={() => this.onIncrement}
        onDecrement={() => this.onDecrement}
      />
    );
  }
}

CounterContainer.propTypes = {
  initialCount: PropTypes.number.isRequired
};
// Specifies the default values for props:
// CounterContainer.defaultProps = {
//   initialCount: 0
// };
export default CounterContainer;
