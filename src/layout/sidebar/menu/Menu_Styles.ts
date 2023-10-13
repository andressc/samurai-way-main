import styled from "styled-components"
import {theme} from "../../../styles/Theme"
import {font} from "../../../styles/Common"

type MenuItemIcon = {
    icon: string
}

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
`

const MenuItem = styled.li<MenuItemIcon>`
  position: relative;
  padding-left: 25px;
  
  &:before {
    content: "";
    width: 20px;
    height: 20px;
    background-image: url(${props => props.icon});
    background-repeat: no-repeat;
    display: inline-block;
    position: absolute;
    left: 0;
    fill: red
  }
`

const MenuLink = styled.a`
  ${font({fMax: 17, fMin: 12, color: theme.colors.tripleFont})}
`


export const S = {
    Menu,
    MenuItem,
    MenuLink,
}