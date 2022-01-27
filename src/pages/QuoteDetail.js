import { Fragment } from "react";
import { useParams, Route, Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Jorge Luis Borges",
    text: "Donot talk unless you can improve the silence.",
  },
  {
    id: "q2",
    author: "Henning Mankell",
    text: "“You forget what you want to remember and remember what you would prefer to forget.” ",
  },
  {
    id: "q3",
    author: " Janet Evanovich",
    text: "Romance novels are birthday cake and life is often peanut butter and jelly. I think everyone should have lots of delicious romance novels lying around for those times when the peanut butter of life gets stuck to the roof of your mouth.",
  },
];

const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p> No quotes found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
      <div className="centered">
        <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}> 
          Load comments
        </Link>
      </div>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
