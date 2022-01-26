import { Fragment } from "react";
import { useParams } from "react-router-dom";

const QuoteDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h2> quote detail </h2>
      <p> {params.quoteId} </p>
    </Fragment>
  );
};

export default QuoteDetail;
