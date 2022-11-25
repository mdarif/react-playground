import React from "react";

class ClassStateExample extends React.Component {
  constructor() {
    super();
    // In class components, the state is always an object
    this.state = {
      firstName: "",
      lastName: "",
    };
  }

  /**
   * this.setState() is asynchronous and batched
   *
   * setState() automatically merges the object you provide into the current state
   */

  render() {
    return (
      <div>
        <h1>Class Based Component with this.setState()</h1>
        <input
          type="text"
          value={this.state.firstName}
          onChange={(e) => this.setState({ firstName: e.target.value })}
        />
        <input
          type="text"
          value={this.state.lastName}
          onChange={(e) => this.setState({ lastName: e.target.value })}
        />
        <p>
          {this.state.firstName} {this.state.lastName}
        </p>
        <p>{JSON.stringify(this.state, null, 2)}</p>
      </div>
    );
  }
}

export default ClassStateExample;
