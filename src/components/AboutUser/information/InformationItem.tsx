import React from "react"
import * as S from "./Information.styled"

export type InformationItemType = {
    id: number
    title: string
    description: string
}

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