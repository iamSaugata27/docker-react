import React, { Component } from "react";

class ClassCompo extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor!",
    };
  }
  changeMessage = () => {
    this.setState({
      message: "Thanks for subscribing!",
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe now hurryup!!</button>
      </div>
    );
  }
}

export default ClassCompo;
