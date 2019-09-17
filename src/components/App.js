import React from 'react';
import SearchBar from './SearchBar';
import api from '../api/api';
import VideoList from './VideoList';
import VideoInfo from './VideoInfo';

import { Layout } from 'antd';

const { Header, Sider, Content } = Layout;



class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await api.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        this.setState({
            videos: response.data.items
        })
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }
    render() {
        return (
            
            <div className='container' style={{marginTop: '2em'}}>
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoInfo video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>

            
        )
    }
}

export default App;
