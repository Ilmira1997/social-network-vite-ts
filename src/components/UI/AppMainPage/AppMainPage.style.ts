import styled from "styled-components";

export const SCAppMainPage = styled.div`

  display: grid;
  grid-template-areas: "L M R";
  grid-template-columns: minmax(300px, 360px) auto minmax(300px, 360px);
  gap: 30px;


@media (max-width: 1440px) {
  .MainPage {
    grid-template-areas: "L M";
    grid-template-columns: 290px auto;

    .RightSide {
      display: none;
    }
  }
}

@media (max-width: 730px) {
  .MainPage {
    display: block;

    .LeftSide {
      display: none;
    }
  }
}

@media (max-width: 1100px) {
  .MainPage {
    grid-template-columns: min-content auto;

    .LeftSide {
      .List {
        display: none;
      }
    }
  }

}
`