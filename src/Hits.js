import React, {useState} from 'react';
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
import Modal from 'react-modal';

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '1rem',
    transform: 'translate(-50%, -50%)'
  }
};

const CustomHighlight = connectHighlight(({ highlight, attribute, hit }) => {
  const parsedHit = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit
  });

  return (
    <>
      {parsedHit.map(
        (part, i) => (part.isHighlighted ? <mark key={i}>{part.value}</mark> : <React.Fragment key={i}>{part.value}</React.Fragment>)
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

function TrailerButton({hit}) {
  const [modalIsOpen,setIsOpen] = useState(false);

  function closeModal(){
    setIsOpen(false);
  }
  function showTrailer() {
    setIsOpen(true);
  }
  return(
    <>
      <Button onClick={showTrailer} fullWidth variant="outlined" color="secondary">Watch Trailer</Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <iframe width="560" height="315" src={hit.trailer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <Button variant="contained" color="primary" onClick={closeModal}>Close</Button>
      </Modal>
    </>
  )
}
function Hit({hit}) {
  return (
    <Card key={hit.objectID}>
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
        <TrailerButton hit={hit}></TrailerButton>
      </CardActions>
    </Card>
  );
}

export default connectHits(Hits);