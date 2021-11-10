import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => console.log(this.state.count)
    );
  };

  decrement = () => {
    this.setState(
      (prevState) => ({
        count: prevState.count - 1,
      }),
      () => console.log(this.state.count)
    );
  };
  render() {
    return (
      <div>
        Count - {this.state.count}
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
