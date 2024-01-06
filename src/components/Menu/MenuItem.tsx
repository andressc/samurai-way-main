import React, {FC} from "react"
import * as S from "./Menu.styled"
import {MenuItemType} from "../../redux/reducers/sidebar-reducer"

type MenuItemPropsType = {
    menu: MenuItemType
}

export const MenuItem: FC<MenuItemPropsType> = ({menu}) => {
    return (
        <S.MenuItem $icon={menu.icon}>
            <S.MenuLink to={menu.link} activeClassName={"activeClassName"}>{menu.title}</S.MenuLink>
        </S.MenuItem>
    )
}