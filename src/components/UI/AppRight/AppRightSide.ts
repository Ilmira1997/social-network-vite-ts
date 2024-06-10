import styled from "styled-components";

export const SCAppRightSide = styled.aside`
    grid-area: R;

    .List {
      margin-bottom: 20px;
    }

    @media (max-width: 1440px) {
  .MainPage {
    grid-template-areas: "L M";
    grid-template-columns: 290px auto;

    .RightSide {
      display: none;
    }
  }
}
`