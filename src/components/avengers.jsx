import React, { Component } from "react";
import axios from "axios";
import Avenger from "./avenger";

class Avengers extends Component {
  state = {
    allAvengers: [],
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.allAvengers.map((avenger) => (
            <div key={avenger.id} className="col">
              <Avenger key={avenger.id} avenger={avenger} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  async componentDidMount() {
    const { data } = await axios.get("http://localhost:5000/api/avengers");
    let avengers = data.map((avenger) => {
      return {
        id: avenger._id,
        imgUrl: avenger.imgUrl,
        name: avenger.name,
        birthName: avenger.birthName,
        likeCount: avenger.likeCount,
        movies: avenger.movies,
      };
    });
    this.setState({ allAvengers: avengers });
  }
}

export default Avengers;
