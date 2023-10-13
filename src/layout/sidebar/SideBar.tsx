import React from "react"
import {S} from "./Sidebar_Styles"
import {SidebarMenu} from "./SidebarMenu"

export const SideBar: React.FC = () => {
    return (
        <S.Sidebar>
            <SidebarMenu/>
        </S.Sidebar>
    )
}