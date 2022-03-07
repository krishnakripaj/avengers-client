import React, { Component } from "react";

class Avenger extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="card" style={{ width: "18rem" }}>
          <img src={this.props.avenger.imgUrl} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{this.props.avenger.avengerName}</h5>
            <p className="card-text">{this.props.avenger.birthName}</p>
            <ul>
              {this.props.avenger.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
            <button className="btn btn-primary" onClick={this.props.onLike}>
              Like - {this.props.avenger.likeCount}
            </button>{" "}
            <button className="btn btn-danger" onClick={this.props.onDelete}>
              Delete
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Avenger;
