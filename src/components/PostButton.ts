import styled from "styled-components"
import {theme} from "../styles/Theme"
import {font} from "../styles/Common"

export const PostButton = styled.button`
  background-color: ${theme.colors.tripleBg};
  max-width: 100px;
  height: 40px;
  width: 100%;
  border: none;
  cursor: pointer;
  ${font({fMax: 17, fMin: 17, color: theme.colors.tripleFont})};
  transition: .5s;
  
  &:hover {
    background-color: ${theme.colors.quaternaryBg};
  }
`