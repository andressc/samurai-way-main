import styled from "styled-components"
import {theme} from "../../styles/Theme"
import {NavLink} from "react-router-dom"

type MenuItemIcon = {
    $icon: string
}

type MenuLinkPropsType = {
    activeClassName: string
}

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: ${theme.indentation.padding};
`

export const MenuItem = styled.li<MenuItemIcon>`
  position: relative;
  padding-left: 30px;
  
  &:before {
    content: "";
    width: 20px;
    height: 20px;
    background-image: url(${props => props.$icon});
    background-repeat: no-repeat;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 2px;
    fill: red
  }
`

export const MenuLink = styled(NavLink)<MenuLinkPropsType>`
  font-size: 17px;
  color: ${theme.colors.tripleFont};
  transition: ${theme.animations.transition};

  &.${props => props.activeClassName} {
    color: #a6a6a6;
  }
  
  &:hover {
    color: #a6a6a6;
  }
`