import React from "react"
import * as C from "../Styled/Components"

type ButtonBarPropsType = {
    children: React.ReactNode
}

export const ButtonBar: React.FC<ButtonBarPropsType> = ({children}) => {
    return (
        <C.FlexWrapper $justify="flex-end" $gap={15}>
            {children}
        </C.FlexWrapper>
    )
}