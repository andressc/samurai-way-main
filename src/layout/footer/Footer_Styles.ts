import styled from "styled-components"
import {theme} from "../../styles/Theme"
import {font} from "../../styles/Common"

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  grid-area: footer;
  background-color: ${theme.colors.tripleBg};
  ${font({fMax: 13, fMin: 12, color: theme.colors.tripleFont})}
`

export const S = {
    Footer,
}