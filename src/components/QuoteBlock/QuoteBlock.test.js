import React from "react";

import { shallow } from "enzyme";

import QuoteBlock from "./QuoteBlock";

const defaultProps = {
  quote: {
    characterDirection: "Left",
    character: "Lisa",
    quote: "Fake quote text...",
    image: "image.png",
  },
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<QuoteBlock {...setupProps} />);
};

describe("<QuoteBlock> component", () => {
  it("should render without exploding", () => {
    const wrapper = setup();
    expect(wrapper.length).toBe(1);
  });

  it("should render the correct text and display an img tag", () => {
    const wrapper = setup();

    expect(wrapper.text()).toEqual(defaultProps.quote.quote);
    expect(wrapper.find("img").length).toBe(1);
  });
});
