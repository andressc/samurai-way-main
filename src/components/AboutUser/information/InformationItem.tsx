import React from "react"
import * as S from "./Information.styled"
import {InformationItemType} from "../../../redux/reducers/profile-reducer"

type InformationItemPropsType = {
    information: InformationItemType
}
export const InformationItem: React.FC<InformationItemPropsType> = ({information}) => {
    return (
        <S.InformationItem>
            <span>{information.title}:</span> {information.description}
        </S.InformationItem>
    )
}