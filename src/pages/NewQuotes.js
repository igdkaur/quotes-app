import { useHistory } from 'react-router-dom'
import QuoteForm from '../components/quotes/QuoteForm'

const NewQuotes = () => {
  const history = useHistory();


  const newQuoteHandler = quoteData => {
    console.log(quoteData);
    history.push('/quotes')

  }
  
  return <QuoteForm onAddQuote = {newQuoteHandler}/>

 }
 
 export default NewQuotes;