import React from "react"
import {S} from "./Menu_Styles"

type SidebarMenuItemPropsType = {
    title: string
    link: string
    icon: string
}
export const MenuItem: React.FC<SidebarMenuItemPropsType> = (props) => {
    return (
        <S.MenuItem icon={props.icon}>
            <S.MenuLink to={props.link} activeClassName={"activeClassName"}>{props.title}</S.MenuLink>
        </S.MenuItem>
    )
}