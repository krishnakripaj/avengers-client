import React, { Component } from "react";

class Avenger extends Component {
  state = {
    avengerId: 10,
    movies: ["First Avenger", "Infinity War", "Endgame"],
    likeCount: 0,
  };
  isAvenger() {
    return this.state.avengerId > 1000 ? "He is an Avenger" : "Not an avenger";
  }
  showMovies() {
    return this.state.movies.map((movie, index) => (
      <li key={index}>{movie}</li>
    ));
  }
  likeAvenger = (addCounter) => {
    this.setState({ likeCount: this.state.likeCount + addCounter });
  };
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://p1.hiclipart.com/preview/707/869/118/the-a-avengers-logo-png-clipart.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">Avenger Name</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <ul>{this.showMovies()}</ul>
          <button
            className="btn btn-primary"
            onClick={() => this.likeAvenger(1)}
          >
            Like <span className="badge bg-dark">{this.state.likeCount}</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Avenger;
