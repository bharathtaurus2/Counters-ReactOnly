import React from "react";

import CounterList from "./CounterList";

class App extends React.Component {
  state = {
    selected: -1,
    counters: 0,
    counterOp: null
  };

  componentDidUpdate() {
    if (this.state.counterOp !== null) {
      this.setState({ counterOp: null });
    }
  }

  addCounter = e => {
    e.preventDefault();
    this.setState({ counters: this.state.counters + 1, counterOp: "add" });
  };

  removeCounter = e => {
    e.preventDefault();
    console.log(this.state.selected);

    if (this.state.selected === -1) {
      return null;
    }

    this.setState({
      counters: this.state.counters - 1,
      counterOp: "delete"
    });
  };

  updateSelectedCounter = selection => {
    this.setState({ selected: selection });
  };

  render() {
    console.log(this.state.counterOp);

    return (
      <div>
        <button onClick={this.addCounter}>Add Counter</button>
        <button onClick={this.removeCounter}>Remove Counter</button>
        <CounterList
          selectedItem={this.state.selected}
          onCounterSelected={this.updateSelectedCounter}
          doOp={this.state.counterOp}
        />
      </div>
    );
  }
}

export default App;
