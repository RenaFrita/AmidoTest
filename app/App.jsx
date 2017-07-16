import React from 'react';
import Search from './Search.jsx'
import List from './List.jsx'
import Favourites from './Favourites.jsx'
import search from './searchService.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      favourites: [],
      query: '',
      page: 1
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.searchMore());
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.searchMore());
  }

  search(query) {
    search(query).then((res) => {
      this.setState({
        results: res.data.results,
        query: query,
        page: 0
      });
    });
  }

  // this could be saved to localStorage or SessionStora or a real api.
  searchMore() {
    if(document.documentElement.clientHeight * 0.8 < window.window.scrollY + window.innerHeight ) {
      const page = this.state.page + 1;
      search(this.state.query, page * 10).then((res) => {
        this.setState({
          results: res.data.results,
          page: page
        });
      });
    }
  }

  add(item) {
    const newFavourites = this.state.favourites;
    newFavourites.push(item)
    this.setState({favourites: newFavourites});
  }

  render() {
    return (
      <div className="container-fluid">
        <Search search={(query) => this.search(query)} />
        <div className="row">
          <List
            items={this.state.results}
            add={(item) => this.add(item)}
            query={this.state.query}
          />
          <Favourites items={this.state.favourites} />
        </div>
      </div>
    );
  }
}
