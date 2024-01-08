import React, {FC} from "react"
import * as S from "./Information.styled"

type InformationItemPropsType = {
    title: string
    aboutMe: string
}
export const InformationItem: FC<InformationItemPropsType> = ({title, aboutMe}) => {
    return (
        <S.InformationItem>
            <span>{title}:</span> {aboutMe}
        </S.InformationItem>
    )
}