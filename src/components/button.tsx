import styled from "styled-components";

const StyledButton = styled.button`
  padding: 14px 16px;
  color: white;
  background-color: black;
  border-radius: 0;
  border: none;
  font-weight: 700;
  cursor: pointer;
`


function Button(props) {
    return <StyledButton onClick={props.onClick}> {props.label} </StyledButton>
}

export default Button