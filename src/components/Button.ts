import styled from "styled-components"
import {theme} from "../styles/Theme"
import {font} from "../styles/Common"

export const Button = styled.button`
  background-color: ${theme.colors.tripleBg};

  height: 40px;
  width: 100%;
  border: none;
  cursor: pointer;
  ${font({fMax: 17, fMin: 17, color: theme.colors.tripleFont})};
  transition: .3s;
  
  &:hover {
    background-color: ${theme.colors.quaternaryBg};
  }
`