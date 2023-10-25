import React from "react"
import * as S from "./Sidebar.styled"
import {Menu} from "../../components/Menu/Menu"
import {MenuItemType} from "../../components/Menu/MenuItem"

type PropsType = {
    menu: MenuItemType[]
}
export const SideBar: React.FC<PropsType> = ({menu}) => {
    return (
        <S.Sidebar>
            <Menu menu={menu}/>
        </S.Sidebar>
    )
}