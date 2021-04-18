import styled from "styled-components";

import {
  SPACING,
  BORDER,
  COLOR,
  BREAK_POINTS,
  FONT,
  CARD_DIMENSIONS,
} from "../../constants";

export const StyledQuoteBlockWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  line-height: 1.6;
  padding: ${SPACING.M};
  font-family: ${FONT.FAMILY.BODY};
  border: 1px solid ${COLOR.GREY.LIGHT};
  border-radius: ${BORDER.RADIUS.M};
  box-shadow: ${BORDER.SHADOW.M};
  background-color: ${COLOR.WHITE};
  transition: 0.5s;
  will-change: transform;

  img {
    width: auto;
    max-height: 200px;
    padding: ${SPACING.S};
  }

  /** Media Queries */
  @media (max-width: ${BREAK_POINTS.S}) {
    margin-bottom: ${SPACING.S};
    min-width: ${CARD_DIMENSIONS.WIDTHXXS};
  }

  @media (min-width: ${BREAK_POINTS.L}) {
    width: ${CARD_DIMENSIONS.WIDTHL};
    margin-bottom: ${SPACING.M};
    flex-direction: ${(props) =>
      props.characterDirection.toLowerCase() === "left"
        ? "row"
        : "row-reverse"};

    &:nth-child(odd) {
      margin-right: ${SPACING.XS};
    }

    &:nth-child(even) {
      margin-left: ${SPACING.XS};
    }

    &:hover {
      transform: scale(1.1) rotate(1deg);
    }
  }
`;
