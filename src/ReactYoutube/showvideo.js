import React, { Component } from "react";
import Reactyoutube from "./reactyoutube";


class Showvideo extends Component {
  render() {
    return (
        // v64KOxKVLVg
      <div className="container">
        <div className="card">
          <div className="card-body">
            <a href="/playlist" >Playlist</a>
            <div class="embed-responsive embed-responsive-16by9">
            <Reactyoutube  />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Showvideo;
