import React from "react";
import PropTypes from "prop-types";

// Component
import QuoteBlock from "../QuoteBlock/QuoteBlock";

// Style
import { StyledRandomListWrapper } from "./RandomList.styles";

const RandomList = ({ simpsonQuotes }) => {
  return (
    <StyledRandomListWrapper>
      {simpsonQuotes?.map((quote) => (
        <QuoteBlock
          quote={quote}
          key={quote.character}
          data-test="quote-block-component"
        />
      ))}
    </StyledRandomListWrapper>
  );
};

QuoteBlock.propTypes = {
  simpsonQuotes: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      image: PropTypes.string,
      character: PropTypes.string,
      characterDirection: PropTypes.string,
    })
  ),
};

export default RandomList;
