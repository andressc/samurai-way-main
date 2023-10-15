import React from "react"
import {S} from "./Menu_Styles"

type SidebarMenuItemPropsType = {
    title: string
    link: string
    icon: string
}
export const MenuItem: React.FC<SidebarMenuItemPropsType> = ({title, link, icon}) => {
    return (
        <S.MenuItem icon={icon}>
            <S.MenuLink to={link} activeClassName={"activeClassName"}>{title}</S.MenuLink>
        </S.MenuItem>
    )
}