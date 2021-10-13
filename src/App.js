import React from 'react';
import { Header } from './components/Header/Header';
import { Search } from './components/Main/Search/Search';
import { GifList } from './components/Main/GiflLst/GifList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
    }
  }

  onSearch = (newValue) => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=HOZl59F3Vw0FJs7IpKPlOc0vvfUPU5eC&q=${newValue}`)
      .then(res => res.json())
      .then(info => {
        this.setState({ gifs: info.data })
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search onSearch={this.onSearch} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }

}

export default App;

