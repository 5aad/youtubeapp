import React, { Component } from "react";
import Reactyoutube from "./reactyoutube";

import Playlist from "./playlist";

class Showvideo extends Component {
  render() {
    return (
        // v64KOxKVLVg
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Vide Title</h3>
            <a href="/playlist" >Playlist</a>
            <Reactyoutube playerVars="taJ60kskkns" videoId="v64KOxKVLVg"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Showvideo;
