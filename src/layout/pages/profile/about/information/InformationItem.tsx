import React from "react"
import {S} from "./Information_Styles"

type InformationItemPropsType = {
    title: string
    description: string
}
export const InformationItem: React.FC<InformationItemPropsType> = ({title, description}) => {
    return (
        <S.InformationItem>
            <span>{title}:</span> {description}
        </S.InformationItem>
    )
}