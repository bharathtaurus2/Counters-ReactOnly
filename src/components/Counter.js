import React from "react";

class Counter extends React.Component {
  state = { value: 0 };

  componentDidMount() {
    if (this.props.value) this.setState({ value: this.props.value });
  }

  onCounterClicked = e => {
    e.preventDefault();
    this.props.onSelected(this.props.id);
  };

  onClickPlus = e => {
    e.preventDefault();
    this.setState({ value: this.state.value + 1 });
  };

  onClickMinus = e => {
    e.preventDefault();
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <div onClick={this.onCounterClicked} className="ui card">
        <h3>{this.state.value}</h3>
        <button onClick={this.onClickPlus}>+</button>
        <button onClick={this.onClickMinus}>-</button>
      </div>
    );
  }
}

export default Counter;
