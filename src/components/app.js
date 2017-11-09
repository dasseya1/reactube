import React, { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyD3w0Ug3YJ05OoO6sBuwtNoEt8qMEYjc1E';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'Celine Dion'}, (videos) => {
            this.setState({ videos });
        });
    }

    render() {
        return (
            <SearchBar />
        );
    }
}

  export default App;