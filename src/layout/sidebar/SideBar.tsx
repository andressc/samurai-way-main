import React from "react"
import * as S from "./Sidebar.styled"
import {Menu} from "../../components/Menu/Menu"
import {db} from "../../db/db"

export const SideBar: React.FC = () => {
    return (
        <S.Sidebar>
            <Menu menu={db.menu}/>
        </S.Sidebar>
    )
}