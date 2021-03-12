import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Pagination,
} from 'react-instantsearch-dom';
import './App.css';
import SearchBox from './SearchBox';
import Hits from './Hits';
import {
  AppBar,
  Toolbar,
  Typography
} from "@material-ui/core"

const searchClient = algoliasearch(
  'YO6PC43NQ1',
  'ca9193c095e56259c3d1dcfd312a85b7'
);

class App extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Search
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="container">
          <InstantSearch searchClient={searchClient} indexName="products">
            <div className="search-panel">
              <div className="search-panel__results">
                <SearchBox  />
                <Hits />
                <div className="pagination">
                  <Pagination />
                </div>
              </div>
            </div>
          </InstantSearch>
        </div>
      </div>
    );
  }
}

export default App;
