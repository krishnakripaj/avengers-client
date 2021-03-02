import React, { Component } from "react";

class Avenger extends Component {
  state = {};
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={this.props.avenger.imgUrl} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{this.props.avenger.name}</h5>
          <p className="card-text">{this.props.avenger.birthName}</p>
          <ul>{this.showMovies()}</ul>
          <button className="btn btn-primary" onClick={this.props.onLike}>
            Like{" "}
            <span className="badge bg-dark">
              {this.props.avenger.likeCount}
            </span>
          </button>{" "}
          <button className="btn btn-danger" onClick={this.props.onDelete}>
            Delete
          </button>
        </div>
      </div>
    );
  }
  showMovies() {
    return (
      this.props.avenger.movies &&
      this.props.avenger.movies.map((movie, index) => (
        <li key={index}>{movie}</li>
      ))
    );
  }
}

export default Avenger;
