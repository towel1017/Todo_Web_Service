import React, { Component } from "react";

class ImpItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <span role="img" aria-label="today"></span>
        </div>
      </div>
    );
  }
}

export default ImpItem;
