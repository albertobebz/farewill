import React from "react";
import PropTypes from "prop-types";

// Styles
import { StyledQuoteBlockWrapper } from "./QuoteBlock.styles";

const QuoteBlock = ({ quote }) => {
  return (
    <StyledQuoteBlockWrapper characterDirection={quote.characterDirection}>
      <img src={quote.image} alt={quote.character} />
      <p>{quote.quote}</p>
    </StyledQuoteBlockWrapper>
  );
};

QuoteBlock.propTypes = {
  quote: PropTypes.shape({
    quote: PropTypes.string,
    image: PropTypes.string,
    character: PropTypes.string,
    characterDirection: PropTypes.string,
  }),
};

export default QuoteBlock;
