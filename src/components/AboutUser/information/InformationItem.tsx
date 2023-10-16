import React from "react"
import {S} from "./Information_Styles"

export type InformationItem = {
    title: string
    description: string
}
export const InformationItem: React.FC<InformationItem> = ({title, description}) => {
    return (
        <S.InformationItem>
            <span>{title}:</span> {description}
        </S.InformationItem>
    )
}