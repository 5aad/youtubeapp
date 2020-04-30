import React, { Component } from "react";
import firebase from "./Firebase";

class Playlist extends Component {
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

  render() {

    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Playlist</h3>
            <a href="/youtubeapp">ShowVideo</a>
            <div class="table-responsive">
              <table className="table table-striped">
                <thead className="thead-light">
                  <tr>
                    <th>Title</th>
                    <th>VideoID</th>
                    <th>video</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.ytlinks.map((ytlink) => (
                    <tr>
                      <td>{ytlink.title}</td>
                      <td>{ytlink.emblink.split('/')[4]}</td>
                      <td>
                        <iframe
                          title={ytlink.title}
                          className="embed-responsive-item"
                          src={ytlink.emblink}
                          allowFullScreen
                        ></iframe>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Playlist;
