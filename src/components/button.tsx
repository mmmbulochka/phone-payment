import styled from "styled-components";
import * as React from "react";
import {Button} from "baseui/button";


const StyledButton = styled.button`
  padding: 14px 16px;
  color: white;
  background-color: black;
  border-radius: 0;
  border: none;
  font-weight: 700;
  cursor: pointer;
`


function Buttons(props) {
    return <Button onClick={props.onClick}> {props.label} </Button>
}

export default Buttons