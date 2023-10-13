import React from "react"
import {S} from "./Sidebar_Styles"

export const SidebarMenu: React.FC = () => {
    return (
        <S.SidebarMenu>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Messages</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">Settings</a></li>
        </S.SidebarMenu>
    )
}