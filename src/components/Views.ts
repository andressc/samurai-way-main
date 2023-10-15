import styled from "styled-components"
import icon from "../assets/icons/view.svg"

export const Views = styled.span`
  position: relative;
  padding-left: 25px;

  &:before {
    content: "";
    width: 20px;
    height: 20px;
    background-image: url(${icon});
    background-repeat: no-repeat;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 2px;
    fill: red
  }
`