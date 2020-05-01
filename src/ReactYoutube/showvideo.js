import React, { Component } from "react";
import Playlist from "./playlist";

class Showvideo extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default Showvideo;
