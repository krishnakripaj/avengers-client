import React, { Component } from "react";

class AvengerIndividual extends Component {
  render() {
    return (
      <div>Avenger Individual Component - {this.props.match.params.id}</div>
    );
  }
}

export default AvengerIndividual;
