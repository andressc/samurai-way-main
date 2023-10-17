import styled from "styled-components"
import {theme} from "../../styles/Theme"

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.indentation.padding};
  
  grid-area: header;
  background-color: ${theme.colors.tripleBg};
  
  img {
    height: 30px;
  }
`