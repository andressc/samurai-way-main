import React, {FC} from "react"
import * as S from "./Sidebar.styled"
import {MenuContainer} from "../../components/Menu/MenuContainer"

export const SideBar: FC = () => {
    return (
        <S.Sidebar>
            <MenuContainer/>
        </S.Sidebar>
    )
}