import {styled, css} from "styled-components";
interface IStyledInputProps {
  $isError:boolean;
}

export const SCAppInput = styled.input<IStyledInputProps>`
    display: block;
    width: 100%;
    margin-bottom: 20px;
    border: 2px solid ${(props)=>props.theme.color.disabledBgc};
    background-color: transparent;

    &:last-child {
      margin-bottom: 40px; 
    }

    ${(props) =>
    props.$isError &&
    css`
      border-color: ${(props) => props.theme.color.red};
    `}


    &:is(:hover, :focus) {
      border-color: ${(props)=>props.theme.color.primeColor};
    }
`

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.color.red};
  margin-bottom: 10px;
`;