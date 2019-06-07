import React from "react";

import Counter from "./Counter";

class CounterList extends React.Component {
  state = {
    counterValues: [
      {
        id: 0,
        value: 0
      }
    ],
    nextId: 0
  };

  componentDidUpdate() {
    if (this.props.doOp === "add") {
      this.setState({
        counterValues: [
          ...this.state.counterValues,
          { id: this.state.nextId + 1, value: 0 }
        ],
        nextId: this.state.nextId + 1
      });
    } else if (this.props.doOp === "delete") {
      console.log(this.props.id);

      const counters = this.state.counterValues.filter(counter => {
        return counter.id !== this.props.selectedItem;
      });

      this.setState({ counterValues: counters });
    }
  }

  onCounterSelected = selection => {
    this.props.onCounterSelected(selection);
  };

  renderList() {
    return this.state.counterValues.map(counter => {
      return (
        <Counter
          key={counter.id}
          id={counter.id}
          value={counter.value}
          onSelected={this.onCounterSelected}
        />
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

export default CounterList;
