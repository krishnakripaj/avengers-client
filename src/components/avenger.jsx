import React, { Component } from "react";

class Avenger extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://p1.hiclipart.com/preview/707/869/118/the-a-avengers-logo-png-clipart.jpg"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.avengerName}</h5>
            <p className="card-text">
              <ul>Show the movies here...</ul>
            </p>
            <button className="btn btn-primary">
              Like - {this.props.likeCount}
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Avenger;
