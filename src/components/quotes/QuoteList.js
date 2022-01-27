import { Fragment } from 'react';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
import { useHistory,useLocation } from 'react-router-dom';

const QuoteList = (props) => {
  
  const history = useHistory();
  const location = useLocation();
  console.log(location); 
  const queryParameters = new URLSearchParams(location.search)
  const isSortingAscending =  queryParameters.get('sort') === 'asc';

  const changeSortingHandler  = props => { // donot use state here, query parameters
    // history.push('/quotes?sort=' + ' asc')

    history.push('/quotes?sort=' + (isSortingAscending ? 'desc' :'asc')); 
    
  }

  return (
    <Fragment>
      <div className = {classes.sorting}>
        <button onClick={changeSortingHandler}>Sort {isSortingAscending ? 'Descending' :'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
