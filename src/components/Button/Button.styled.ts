import styled from "styled-components"
import {theme} from "../../styles/Theme"

type ButtonPropsType = {
  $icon: string
}

export const Button = styled.button`
  background-color: ${theme.colors.tripleBg};
  height: 40px;
  width: fit-content;
  border: none;
  cursor: pointer;
  font-size: 17px;
  color: ${theme.colors.tripleFont};
  transition: ${theme.animations.transition};
  text-align: center;
  
  &:hover {
    background-color: ${theme.colors.quaternaryBg};
  }

  &.${props => props.className} {
    background-color: ${theme.colors.quaternaryBg};
  }
`

export const ButtonTitle = styled.span<ButtonPropsType>`
  position: relative;
  padding-left: ${props => props.$icon ? "30px" : "0px"};
  margin: 15px;
  text-transform: capitalize;
  
  &:before {
    content: "";
    width: 20px;
    height: 20px;
    background-image: url(${props => props.$icon});
    background-repeat: no-repeat;
    display: inline-block;
    position: absolute;
    left: 0;
  }
`