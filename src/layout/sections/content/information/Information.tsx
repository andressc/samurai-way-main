import React from "react"
import {S} from "../Content_Styles"

type InformationPropsType = {
    title: string
    description: string
}
export const Information: React.FC<InformationPropsType> = (props) => {
    return (
        <S.Information>{props.title}: {props.description}</S.Information>
    )
}