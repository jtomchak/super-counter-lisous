import React from "react";

const Counter = props => {
  return (
    <div>
      <button className="counter__btn-increment" onClick={props.onIncrement()}>
        +
      </button>
      <span className="counter__value">
        {props.count}
      </span>
      <button className="counter__btn-decrement" onClick={props.onDecrement()}>
        -
      </button>
    </div>
  );
};

export default Counter;
