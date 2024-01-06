import React, {FC, ReactNode} from "react"
import * as C from "../Styled/Components"

type ButtonBarPropsType = {
    children: ReactNode
}

export const ButtonBar: FC<ButtonBarPropsType> = ({children}) => {
    return (
        <C.FlexWrapper $justify="flex-end" $gap={15}>
            {children}
        </C.FlexWrapper>
    )
}