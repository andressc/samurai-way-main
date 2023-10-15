import styled from "styled-components"
import {theme} from "../../styles/Theme"

const Content = styled.main`
  grid-area: content;
  background-color:  ${theme.colors.primaryBg};
  padding: 15px;
`

export const S = {
    Content,
}