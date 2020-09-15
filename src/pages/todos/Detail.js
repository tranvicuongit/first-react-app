import React, { Component } from "react";
class Detail extends Component {
  render() {
    const id = this.props.match.params["id"];
    if (id && !Number.isNaN(+id)) {
      return (
        <div>
          <h1>Detail of {id}</h1>
        </div>
      );
    } else {
    }
  }
}

export default Detail;
