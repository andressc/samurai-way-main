import React from "react"
import {S} from "./Information_Styles"

type InformationItemPropsType = {
    title: string
    description: string
}
export const InformationItem: React.FC<InformationItemPropsType> = (props) => {
    return (
        <S.InformationItem>
            <span>{props.title}:</span> {props.description}
        </S.InformationItem>
    )
}