import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search-bar';
import Gif from './gif';
import GifList from './gif-list';

const GIPHY_API_KEY = 'EYrTkHOS5II8YvE5F9uHvw81D2Rh7bDn';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null // "mBjWEqDZOhqvQNTC0y"
    };
  }

  //call API
  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true }).search({
      q: query,
      rating: 'g',
      limit: 10
    },
    (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

selectGif = (id) => {
  this.setState({
    selectedGifId: id
  });
}


render() {
  return (
    <div>
      <div className="left-scene">
        <div className="title-search">
          <h1>Find Your GIF</h1>
          <SearchBar searchFunction={this.search} />
        </div>
        <div className="selected-gif">
          <Gif id={this.state.selectedGifId} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
      </div>
    </div>
  );
}
}

export default App;
