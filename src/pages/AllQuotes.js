import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import NoQuotesFound from '../components/quotes/NoQuotesFound'


// const DUMMY_QUOTES = [
//   {
//     id: "q1",
//     author: "Jorge Luis Borges",
//     text: "Donot talk unless you can improve the silence.",
//   },
//   {
//     id: "q2",
//     author: "Henning Mankell",
//     text: "“You forget what you want to remember and remember what you would prefer to forget.” ",
//   },
//   {
//     id: "q3",
//     author: " Janet Evanovich",
//     text: "Romance novels are birthday cake and life is often peanut butter and jelly. I think everyone should have lots of delicious romance novels lying around for those times when the peanut butter of life gets stuck to the roof of your mouth.",
//   },
// ];

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  // send request when ever comp renders
  useEffect(() => {
    sendRequest();

  }, [sendRequest]);
  // handle states

  if(status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner/>
      </div>
    )
  }
  if(error) {
    return (
      <div className="centered focused">
        {error}
      </div>
    )
  }

  if(status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />
  }


  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
