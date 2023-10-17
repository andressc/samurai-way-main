import React from "react"
import * as S from "./Menu.styled"

export type MenuItemType = {
    id: number
    title: string
    link: string
    icon: string
}

type MenuItemPropsType = {
    menu: MenuItemType
}

export const MenuItem: React.FC<MenuItemPropsType> = ({menu}) => {
    return (
        <S.MenuItem icon={menu.icon}>
            <S.MenuLink to={menu.link} activeClassName={"activeClassName"}>{menu.title}</S.MenuLink>
        </S.MenuItem>
    )
}