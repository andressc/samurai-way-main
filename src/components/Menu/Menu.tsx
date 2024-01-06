import React, {FC} from "react"
import * as S from "./Menu.styled"
import {MenuItem} from "./MenuItem"
import {PropsType} from "./MenuContainer"

export const Menu: FC<PropsType> = ({menu}) => {

    const MenuList: JSX.Element[] = menu && menu.map(menu => <MenuItem key={menu.id} menu={menu}/>)

    return (
        <S.Menu>
            {MenuList}
        </S.Menu>
    )
}