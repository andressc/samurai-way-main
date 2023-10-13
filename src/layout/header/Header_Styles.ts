import styled from "styled-components"
import {theme} from "../../styles/Theme"

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  
  grid-area: header;
  background-color: ${theme.colors.tripleBg};
  
  img {
    height: 30px;
  }
`


export const S = {
    Header,
}