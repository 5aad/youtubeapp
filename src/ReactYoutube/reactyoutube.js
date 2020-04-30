import React, { Component } from "react";
import YouTube from "react-youtube";
import firebase from "./Firebase";

class Reactyoutube extends Component {

    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection("youtubeLinks");
        this.unsubscribe = null;
        this.state = {
          ytlinks: [],
        };
      }
    
      onCollectionUpdate = (querySnapshot) => {
        const ytlinks = [];
        querySnapshot.forEach((doc) => {
          const { title, emblink } = doc.data();
          ytlinks.push({
            key: doc.id,
            doc, // DocumentSnapshot
            title,
            emblink,
          });
        });
        this.setState({
          ytlinks,
        });
      };
    
      componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
      }



  videoOnReady(event) {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
    console.log(event.target)
  }

//   videoOnChangeState(event) {
//     event.target.nextVideo();
//   }
  render() {

    const plink = this.state.ytlinks.map((ytlink) => ytlink.emblink.split('/')[4])

    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        // autoplay: 1,
        color: 'white',
        // next, prev video
        playlist: plink.toString()
      },
    };
    // const {videoId} = this.props
    return (
      <YouTube   opts={opts} onReady={this.videoOnReady}    />
    );
  }
}

export default Reactyoutube;
