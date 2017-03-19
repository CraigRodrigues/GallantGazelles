import React from 'react';
import NavBar from './NavBar.jsx';
import MainVideo from './MainVideo.jsx';
import Footer from './Footer.jsx';
import TrendingVideos from './TrendingVideos.jsx';
import SignUp from './SignUp.jsx';
import Pitch from './Pitch.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    }
  }

  render() {
    return (
      <div>

        <div className="ui container">
          <div className="ui two column container">
            <h2 className="ui header">
              <i className="plug icon"></i>
              <div className="content">
                Pitchme.io
              </div>
            </h2>
            <NavBar />
          </div>
        </div>

        <div className="ui container">
          <Pitch />
        </div>

        <Footer />
      </div>
    )
  }
}


export default App;