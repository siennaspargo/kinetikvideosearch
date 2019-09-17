import React from "react";
import SearchBar from "./SearchBar";
import api from "../api/api";
import VideoList from "./VideoList";
import VideoInfo from "./VideoInfo";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };
  handleSubmit = async termFromSearchBar => {
    const response = await api.get("/search", {
      params: {
        q: termFromSearchBar
      }
    });
    this.setState({
      videos: response.data.items
    });
  };
  handleVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="container" style={{ marginTop: "2em" }}>
        <SearchBar handleFormSubmit={this.handleSubmit} />
        {/* Video Item Frame */}
        <div
          className="container"
          style={{
            marginTop: "5em",
            marginLeft: " 10em",
            padding: "0px",
            maxWidth: "175px",
            maxLength: "300px"
          }}
        >
          {/* Video Description */}
          <VideoInfo video={this.state.selectedVideo} />
        </div>
        {/* Video List */}
        <div
          className="container"
          style={{ marginTop: "2em", marginLeft: "0em", padding: "10px" }}
        >
          <VideoList
            handleVideoSelect={this.handleVideoSelect}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

export default App;
