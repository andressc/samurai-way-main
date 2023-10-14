import styled from "styled-components"
import {theme} from "../../../styles/Theme"

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
  padding-left: 30px;
  
  &:before {
    content: "";
    width: 20px;
    height: 20px;
    background-image: url(${props => props.icon});
    background-repeat: no-repeat;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 2px;
    fill: red
  }
`

const MenuLink = styled.a`
  font-size: 17px;
  color: ${theme.colors.tripleFont}
`


export const S = {
    Menu,
    MenuItem,
    MenuLink,
}