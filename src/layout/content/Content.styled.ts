import styled from "styled-components"
import {theme} from "../../styles/Theme"

export const Content = styled.main`
  grid-area: content;
  background-color:  ${theme.colors.primaryBg};
  padding: ${theme.indentation.padding};
`