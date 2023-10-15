import React from "react"
import {FlexWrapper} from "../FlexWrapper"

export const ButtonBar: React.FC = (props) => {
    return (
        <FlexWrapper justify="flex-end" gap={15}>
            {props.children}
        </FlexWrapper>
    )
}