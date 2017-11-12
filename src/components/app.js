import React, { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetail  from './video_detail';

const API_KEY = 'AIzaSyD3w0Ug3YJ05OoO6sBuwtNoEt8qMEYjc1E';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            videos: [],
            selectedVideo: null
         };

        YTSearch({key: API_KEY, term: 'Celine Dion'}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
             });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectVideo => this.setState({selectVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

  export default App;