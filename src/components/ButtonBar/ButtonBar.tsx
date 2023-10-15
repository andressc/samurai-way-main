import React from "react"
import {FlexWrapper} from "../FlexWrapper"

type ButtonBarPropsType = {
    children: React.ReactNode
}

export const ButtonBar: React.FC<ButtonBarPropsType> = ({children}) => {
    return (
        <FlexWrapper justify="flex-end" gap={15}>
            {children}
        </FlexWrapper>
    )
}