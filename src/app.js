import React from "react";
import SearchBar from "./SearchBar";
import api from "./api";
import VideoList from "./VideoList";
import VideoInfo from "./VideoInfo";
// Ant.Design
import { Layout } from 'antd';
import { Row, Col } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

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
      <div classname="app">
        <Layout>
        {/* Search Bar Input */}
        {/* <div className="container" style={{ marginTop: "2em" }}> */}
          <Header color='#ffffff'>
          <SearchBar handleFormSubmit={this.handleSubmit} />
          </Header>

          <Row>
          Video Item & List
          <Col span={16}>

          {/* Video Item Frame */}
          {/* <div
            className="container"
            style={{
              marginTop: "5em",
              marginLeft: " 10em",
              padding: "0px",
              maxWidth: "175px",
              maxLength: "300px"
            }}
          > */}

            {/* Video Description */}
            <VideoInfo video={this.state.selectedVideo} />

          </Col>


          {/* Video List */}
          <Col span={8} offset={8}>

            <VideoList
              handleVideoSelect={this.handleVideoSelect}
              videos={this.state.videos}
            />

          </Col>

        </Row>

        </Layout>
      </div>
    );
  }
}

export default App;
