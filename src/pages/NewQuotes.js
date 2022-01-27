import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';


const NewQuotes = () => {

  const {sendRequest, status} = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {       // nabigate as soon as rqst completes
    if(status === 'completed') {
      history.push('/quotes')
    }
  },[status,history])


  const newQuoteHandler = quoteData => {
    sendRequest(quoteData);  
    // history.push('/quotes')

  }
  
  return <QuoteForm isLoading = {status === 'pending'} onAddQuote = {newQuoteHandler}/>

 }
 
 export default NewQuotes;

 //send rqst to add new quotes

 //navigate once done sending request