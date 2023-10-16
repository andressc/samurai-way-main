import styled from "styled-components"
import {theme} from "../../styles/Theme"

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.indentation.padding};
  grid-area: footer;
  background-color: ${theme.colors.tripleBg};
  font-size: 13px;
  color: ${theme.colors.tripleFont}
`

export const S = {
    Footer,
}