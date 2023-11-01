import React from "react"
import {SimpleCell} from "../../../../../components/SimpleCell/SimpleCell"
import * as C from "../../../../../components/Styled/Components"

export type DialogType = {
    id: number
    userImg: string
    comment: string
    userName: string
    userId: number
    date: string
}

type DialogPropsType = {
    dialog: DialogType
}
export const Dialog: React.FC<DialogPropsType> = ({dialog}) => {

    return (
        <C.FlexWrapper $justify={dialog.userId === 1 ? "flex-end" : "flex-start"}>
            <C.ContentBlock size={70} chat={dialog.userId === 1 ? "Right" : "Left"}>
                <SimpleCell image={dialog.userImg} title={dialog.userName} subtitle={dialog.date}/>
                <p>{dialog.comment}</p>
            </C.ContentBlock>
        </C.FlexWrapper>
    )
}