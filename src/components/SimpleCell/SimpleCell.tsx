import React from "react"
import {Avatar} from "../Avatar"
import {FlexWrapper} from "../FlexWrapper"

type SimpleCellPropsType = {
    image: string
    title?: string
    subtitle?: string
}
export const SimpleCell: React.FC<SimpleCellPropsType> = ({image, subtitle, title}) => {
    return (
        <FlexWrapper gap={15} align="center">
            <Avatar src={image} alt=""/>
            <FlexWrapper direction="column" justify="center" align="flex-start">
                {title && <h4>{title}</h4>}
                {subtitle && <span>{subtitle}</span>}
            </FlexWrapper>
        </FlexWrapper>
    )
}