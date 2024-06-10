import styled from "styled-components";

export const SCAppLeftSide = styled.aside`

    grid-area: L;

    .Navbar {
      margin-bottom: 20px;
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

  .Navbar {
    .navbar__item {
      display: inline-block;

      .icon {
        height: 25px;
      }

      .item__name {
        display: none;
      }

      .Badge {
        display: none;
      }
    }
  }
}


`