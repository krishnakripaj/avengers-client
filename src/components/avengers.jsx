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
              <Avenger
                key={avenger.id}
                avenger={avenger}
                onLike={() => this.likeAvenger(avenger)}
                onDelete={() => this.deleteAvenger(avenger.id)}
              />
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

  async likeAvenger(avenger) {
    await axios.put(`http://localhost:5000/api/avengers/${avenger.id}`, {
      likeCount: avenger.likeCount + 1,
    });

    let updatedAvengers = [...this.state.allAvengers];
    let index = updatedAvengers.indexOf(avenger);
    updatedAvengers[index] = { ...avenger };
    updatedAvengers[index].likeCount++;
    this.setState({ allAvengers: updatedAvengers });
  }

  async deleteAvenger(id) {
    await axios.delete(`http://localhost:5000/api/avengers/${id}`);
    let updatedAvengers = this.state.allAvengers.filter(
      (avenger) => avenger.id !== id,
    );
    this.setState({ allAvengers: updatedAvengers });
  }
}

export default Avengers;
