import React, {FC} from "react"
import * as S from "./Information.styled"
import {ProfileInformationType} from "../../../redux/reducers/profile-reducer"

type InformationItemPropsType = {
    information: ProfileInformationType
}
export const InformationItem: FC<InformationItemPropsType> = ({information}) => {
    return (
        <S.InformationItem>
            <span>{information.title}:</span> {information.description}
        </S.InformationItem>
    )
}