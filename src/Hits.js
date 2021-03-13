import React from 'react';
import {
  connectHighlight,
  connectHits
} from 'react-instantsearch-dom';
import Card from '@material-ui/core/Card';
import {CardContent} from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const CustomHighlight = connectHighlight(({ highlight, attribute, hit }) => {
  const parsedHit = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit
  });

  return (
    <>
      {parsedHit.map(
        part => (part.isHighlighted ? <mark>{part.value}</mark> : part.value)
      )}
    </>
  );
});

const ResultsList = styled.ol`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
  flex-wrap: wrap;
`
const ResultsListItem = styled.li`
  display: block;
  margin: 0.5rem;
  padding: 0;
  list-style-type: none;
  width: 100%;
  flex-grow: 1;
`
function Hits ({hits}) {
  return(
    <ResultsList>
    {hits.map(hit => (
      <ResultsListItem key={hit.objectID}>
         <Hit hit={hit} />
      </ResultsListItem>
    ))}
  </ResultsList>
  )
};

function Hit({hit}) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom={true} component="h2">
          <CustomHighlight attribute="title" hit={hit} />
        </Typography>
        <Typography variant="subtitle2"  paragraph={true}>
          <CustomHighlight attribute="name" hit={hit} />
        </Typography>
        <Typography variant="body1">
          <CustomHighlight attribute="description" hit={hit} />
        </Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="outlined" color="secondary">Watch Trailer</Button>
      </CardActions>
    </Card>
  );
}

export default connectHits(Hits);