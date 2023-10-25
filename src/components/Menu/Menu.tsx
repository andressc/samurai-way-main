import React from "react"
import * as S from "./Menu.styled"
import {MenuItem, MenuItemType} from "./MenuItem"

type MenuPropsType = {
    menu: MenuItemType[]
}

export const Menu: React.FC<MenuPropsType> = ({menu}) => {

    const MenuList: JSX.Element[] = menu && menu.map(menu => <MenuItem key={menu.id} menu={menu}/>)

    return (
        <S.Menu>
            {MenuList}
        </S.Menu>
    )
}