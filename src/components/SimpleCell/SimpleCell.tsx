import React, {FC} from "react"
import * as C from "../Styled/Components"
import {NavLink} from "react-router-dom"

type SimpleCellPropsType = {
    image: string
    title?: string
    subtitle?: string
    link?: string
}

export const SimpleCell: FC<SimpleCellPropsType> = ({image, subtitle, title, link}) => {
    return (
        <C.FlexWrapper $gap={15} $align="center">
            <NavLink to={link ? link : ""}>
                <C.Avatar src={image} alt=""/>
            </NavLink>
            <C.FlexWrapper $direction="column" $justify="center" $align="flex-start">
                {title && <h4>{title}</h4>}
                {subtitle && <span>{subtitle}</span>}
            </C.FlexWrapper>
        </C.FlexWrapper>
    )
}