import React from 'react';
import TextField from '@material-ui/core/TextField';
import {
  connectSearchBox
} from 'react-instantsearch-dom';


const SearchBox = ({
  currentRefinement,
  refine,
}) => {
  console.log(refine)
  return(
    <TextField
      label="Search"
      size="medium"
      fullWidth
      margin="normal"
      value={currentRefinement}
      onChange={event => refine(event.currentTarget.value)}
    />
  )
};
const CustomSearchBox = connectSearchBox(SearchBox)
export default CustomSearchBox;