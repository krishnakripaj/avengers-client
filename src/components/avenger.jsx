import React, { Component } from "react";

class Avenger extends Component {
  state = {
    avengerId: -190,
    avengerName: "Hulk",
    movies: ["Movie 1", "Movie 2"],
    likeCount: 0,
  };
  isAvenger() {
    return this.state.avengerId < 0 ? "Not an avenger" : "Yes, it's an avenger";
  }
  showMovies() {
    if (this.state.movies.length == 0) return <p>No movies available</p>;
    else
      return this.state.movies.map((movie, index) => (
        <li key={index}>{movie}</li>
      ));
  }
  likeAvenger = () => {
    this.setState({ likeCount: this.state.likeCount + 1 });
  };
  render() {
    return (
      <React.Fragment>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://p1.hiclipart.com/preview/707/869/118/the-a-avengers-logo-png-clipart.jpg"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">Avenger Name</h5>
            <p className="card-text">
              <ul>{this.showMovies()}</ul>
            </p>
            <button className="btn btn-primary" onClick={this.likeAvenger}>
              Like - {this.state.likeCount}
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Avenger;
