import React from "react"
import {S} from "./Information_Styles"

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