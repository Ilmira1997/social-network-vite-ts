import styled from "styled-components";

export const SCLoginPage = styled.div`
  box-shadow: 0 0 10px var${(props)=>props.theme.color.lightGray};
  border-radius: 20px;
  background-color: ${(props)=>props.theme.color.elemsBgc};
  margin: 0 auto;
  width: 80%;
  max-width: 500px;
  text-align: center;
  padding: 40px;

  h1 {
    margin-bottom: 50px;
  }

  input {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    border: 2px solid ${(props)=>props.theme.color.disabledBgc};
    background-color: transparent;

    &:last-child {
      margin-bottom: 40px;
    }

    &:is(:hover, :focus) {
      border-color: ${(props)=>props.theme.color.primeColor};
    }
  }

  button {
    width: 100%;
    margin-bottom: 30px;
  }

  a {
    display: inline-block;
    width: 100%;
    text-align: right;
    text-decoration: none;
    color:${(props)=>props.theme.color.gray};

    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 530px) {
  .LoginPage {
    width: 100%;
  }
}
`