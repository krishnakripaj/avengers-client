import React, { Component } from "react";
import axios from "axios";
import Avenger from "./avenger";

class Avengers extends Component {
  state = {
    allAvengers: [],
  };
  render() {
    console.log("Rendering Avengers component ......");
    return (
      <div className="container">
        <div className="row">
          {this.state.allAvengers.map((avenger) => (
            <div key={avenger.id} className="col">
              <Avenger
                key={avenger.id}
                avenger={avenger}
                onDelete={() => this.deleteAvenger(avenger.id)}
                onLike={() => this.likeAvenger(avenger)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  async likeAvenger(avenger) {
    try {
      await axios.put(`http://localhost:5000/api/avengers/${avenger.id}`, {
        likeCount: avenger.likeCount + 1,
      });
      let allAvengers = [...this.state.allAvengers];
      let index = allAvengers.indexOf(avenger);
      allAvengers[index] = { ...avenger };
      allAvengers[index].likeCount++;
      this.setState({ allAvengers: allAvengers });
    } catch (err) {
      console.log(err);
    }
  }

  async deleteAvenger(avengerId) {
    let updatedAvengerArray = this.state.allAvengers.filter(
      (avenger) => avenger.id !== avengerId
    );

    await axios.delete(`http://localhost:5000/api/avengers/${avengerId}`);
    this.setState({ allAvengers: updatedAvengerArray });
  }

  async componentDidMount() {
    console.log("Rendering finished. Component is fully mounted");
    let { data } = await axios.get("http://localhost:5000/api/avengers");
    // console.log(data);
    let avengers = data.map((avenger) => {
      return {
        id: avenger._id,
        imgUrl: avenger.imgUrl,
        birthName: avenger.birthName,
        likeCount: avenger.likeCount,
        avengerName: avenger.name,
        movies: avenger.movies,
      };
    });
    this.setState({ allAvengers: avengers });
  }
}

export default Avengers;
