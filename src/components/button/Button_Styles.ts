import styled from "styled-components"
import {theme} from "../../styles/Theme"
import {font} from "../../styles/Common"

type ButtonPropsType = {
  icon: string
}
export const Button = styled.button`
  background-color: ${theme.colors.tripleBg};
  height: 40px;
  width: fit-content;
  border: none;
  cursor: pointer;
  font-size: 17px;
  ${font({fMax: 17, fMin: 17, color: theme.colors.tripleFont})};
  transition: .3s;
  text-align: center;
  
  &:hover {
    background-color: ${theme.colors.quaternaryBg};
  }
`

const ButtonTitle = styled.span<ButtonPropsType>`
  position: relative;
  padding-left: 30px;
  margin: 25px;
  text-transform: capitalize;
  
  &:before {
    content: "";
    width: 20px;
    height: 20px;
    background-image: url(${props => props.icon});
    background-repeat: no-repeat;
    display: inline-block;
    position: absolute;
    left: 0;
    fill: red
  }
`

export const S = {
  Button,
  ButtonTitle,
}