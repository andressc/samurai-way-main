import styled from "styled-components"
import {theme} from "../../../styles/Theme"
import {font} from "../../../styles/Common"

const Sidebar = styled.nav`
  height: 100%;
  grid-area: sidebar;
  background-color: ${theme.colors.tripleBg}
`

const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  
  a {
    ${font({fMax: 17, fMin: 12, color: theme.colors.tripleFont})}
  }
`


export const S = {
    Sidebar,
    SidebarMenu,
}