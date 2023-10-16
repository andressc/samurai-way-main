import React from "react"
import {ContentBlock} from "../../../../../components/ContentBlock/ContentBlock"
import {SimpleCell} from "../../../../../components/SimpleCell/SimpleCell"
import {FlexWrapper} from "../../../../../components/Wrapper/FlexWrapper"

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
        <FlexWrapper justify={dialog.userId === 1 ? "flex-end" : "flex-start"}>
            <ContentBlock size={70} chat={dialog.userId === 1 ? "Right" : "Left"}>
                <SimpleCell image={dialog.userImg} title={dialog.userName} subtitle={dialog.date}/>
                <p>{dialog.comment}</p>
            </ContentBlock>
        </FlexWrapper>
    )
}