import React, { Component } from "react";
import Reactyoutube from "./reactyoutube";


class Showvideo extends Component {
  render() {
    return (
        // v64KOxKVLVg
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Vide Title</h3>
            <a href="/playlist" >Playlist</a>
            <Reactyoutube  />
          </div>
        </div>
      </div>
    );
  }
}

export default Showvideo;
