import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch
} from 'react-instantsearch-dom';
import SearchBox from './SearchBox';
import Hits from './Hits';
import {
  AppBar,
  Toolbar,
  Typography
} from "@material-ui/core"
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`
const searchClient = algoliasearch(
  'YO6PC43NQ1',
  'ca9193c095e56259c3d1dcfd312a85b7'
);

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Search
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <InstantSearch searchClient={searchClient} indexName="products">
          <div className="search-panel">
            <div className="search-panel__results">
              <SearchBox  />
              <Hits />
            </div>
          </div>
        </InstantSearch>
      </Container>
    </div>
  );
}

export default App;
