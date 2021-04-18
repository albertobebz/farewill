import React from "react";

import { shallow } from "enzyme";

import RandomList from "./RandomList";

const quotes = {
  simpsonQuotes: [
    {
      character: "Lisa",
      quote: "somehing",
      image: "fakeimage.png",
    },
    {
      character: "Lisa",
      quote: "somehing",
      image: "fakeimage.png",
    },
    {
      character: "Lisa",
      quote: "somehing",
      image: "fakeimage.png",
    },
    {
      character: "Lisa",
      quote: "somehing",
      image: "fakeimage.png",
    },
  ],
};

const setup = (props = {}) => {
  return shallow(<RandomList {...props} />);
};

describe("<RandomList> component", () => {
  it("should render without exploding and with zero quotes during the first render", () => {
    const wrapper = setup();
    const QuoteBlockComponent = wrapper.find(
      `[data-test="quote-block-component"]`
    );

    expect(wrapper.length).toBe(1);
    expect(QuoteBlockComponent.length).toBe(0);
  });

  it("should render QuoteBlockComponent when 'simpsonsQuotes' props is passed down", () => {
    const wrapper = setup(quotes);
    const QuoteBlockComponent = wrapper.find(
      `[data-test="quote-block-component"]`
    );

    expect(QuoteBlockComponent.length).toBe(4);
  });
});
