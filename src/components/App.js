import React, { useState } from "react";
import styled from "styled-components";

import Button from "./Button";
import Header from "./Header";
import RandomList from './RandomList/RandomList'

import { CONTENT_WIDTH, SPACING } from "../constants";

import fetchQuotes from '../fetchQuotes'

const StyledContentWrapper = styled.div`
  margin: 0 auto;
  max-width: ${CONTENT_WIDTH};
  padding: ${SPACING.L};
`;

const App = () => {
  const [simpsonQuotes, setSimpsonQuotes] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  // TODO: add error handling (i.e shows a message/component error)
  const [hasError, setHasError] = useState(false) 

  const onClickHandler = async () => {
    setIsLoading(true)
    try {
      const {data} = await fetchQuotes()
      setSimpsonQuotes(data)
      setIsLoading(false)
    } catch(e) {
      setIsLoading(false)
      setHasError(true)
      console.error(`Ooops, there was an error ${e}`);
    }
  }

  return (
    <>
      <Header />
      <StyledContentWrapper>
        <Button onClick={onClickHandler}>{isLoading ? 'Searching...' : 'Load quotes'}</Button>
        <RandomList simpsonQuotes={simpsonQuotes} />
      </StyledContentWrapper>
    </>
  );
};

export default App;
