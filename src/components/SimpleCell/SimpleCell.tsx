import React from "react"
import * as C from "../Styled/Components"

type SimpleCellPropsType = {
    image: string
    title?: string
    subtitle?: string
}
export const SimpleCell: React.FC<SimpleCellPropsType> = ({image, subtitle, title}) => {
    return (
        <C.FlexWrapper gap={15} align="center">
            <C.Avatar src={image} alt=""/>
            <C.FlexWrapper direction="column" justify="center" align="flex-start">
                {title && <h4>{title}</h4>}
                {subtitle && <span>{subtitle}</span>}
            </C.FlexWrapper>
        </C.FlexWrapper>
    )
}