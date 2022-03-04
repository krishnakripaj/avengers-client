import React, { Component } from "react";
import axios from "axios";
import Avenger from "./avenger";

class Avengers extends Component {
  state = {
    allAvengers: [
      { id: 1, likeCount: 10, avengerName: "Avenger 1" },
      { id: 2, likeCount: 30, avengerName: "Avenger 2" },
      { id: 3, likeCount: 500, avengerName: "Avenger 3" },
    ],
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
                likeCount={avenger.likeCount}
                avengerName={avenger.avengerName}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  async componentDidMount() {
    console.log("Rendering finished. Component is fully mounted");
    let response = await axios.get("http://localhost:5000/api/avengers");
    console.log(response);
  }
}

export default Avengers;
