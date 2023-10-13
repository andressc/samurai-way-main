import React from "react"
import {S} from "./Sidebar_Styles"
import {Menu} from "./menu/Menu"

export const SideBar: React.FC = () => {
    return (
        <S.Sidebar>
            <Menu/>
        </S.Sidebar>
    )
}