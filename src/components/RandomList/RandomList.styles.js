import styled from "styled-components";

// Constants
import { SPACING, BREAK_POINTS } from "../../constants";

export const StyledRandomListWrapper = styled.section`
  margin-top: ${SPACING.L};

  @media (min-width: ${BREAK_POINTS.L}) {
    display: flex;
    flex-wrap: wrap;
  }
`;
