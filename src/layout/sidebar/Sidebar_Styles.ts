import styled from "styled-components"
import {theme} from "../../styles/Theme"

const Sidebar = styled.nav`
  height: 100%;
  grid-area: sidebar;
  background-color: ${theme.colors.tripleBg}
`

export const S = {
    Sidebar,
}