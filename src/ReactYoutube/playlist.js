import React, { Component } from "react";
import YouTube from "react-youtube";
import firebase from "./Firebase";
import "./size.css";

class Playlist extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("youtubeLinks");
    this.unsubscribe = null;
    this.state = {
      ytlinks: [],
      links: [],
      link: "",
      index: 0,
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
    const plink = ytlinks.map((ytlink) => ytlink.emblink.split("/")[4]);
    this.setState({
      ytlinks,
      links: plink,
      link: plink[0],
      index: 0,
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  handleLinks = (e) => {
    if (e.target.value === "back") {
      if (this.state.index === 0) {
        this.setState({
          index: this.state.links.length - 1,
          link: this.state.links[this.state.links.length - 1],
        });
      } else {
        const ind = this.state.index - 1;
        this.setState({
          index: ind,
          link: this.state.links[ind],
        });
      }
    } else if (e.target.value === "next") {
      if (this.state.index === this.state.links.length - 1) {
        this.setState({
          index: 0,
          link: this.state.links[0],
        });
      } else if (this.state.index < this.state.links.length - 1) {
        const ind = this.state.index + 1;
        this.setState({
          index: ind,
          link: this.state.links[ind],
        });
      }
    }
  };

  intialize = () => {};
  render() {
    const opts = {
      height: "390",
      width: "640",
    };
    return (
      <div>
        <div className="embed-responsive embed-responsive-16by9">
          <YouTube videoId={this.state.link} opts={opts} />
        </div>
        <div className="sq py-2" id="hide">
          <button
            class="float"
            value="back"
            onClick={(e) => this.handleLinks(e)}
          >
            <i class="fa fa-step-backward "></i>
          </button>
          <button
            class="float"
            value="next"
            onClick={(e) => this.handleLinks(e)}
          >
            <i class="fa fa-step-forward "></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Playlist;
