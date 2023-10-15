import React from "react"
import {ContentBlock} from "../../../../components/ContentBlock/ContentBlock"
import {SimpleCell} from "../../../../components/SimpleCell/SimpleCell"
import {FlexWrapper} from "../../../../components/Wrapper/FlexWrapper"

export type DialogType = {
    id: number
    userImg: string
    comment: string
    userName: string
    userId: number
    date: string
}
export const Dialog: React.FC<DialogType> = (props) => {
    const {userImg, comment, userName, date, id, userId} = props

    return (
        <FlexWrapper justify={userId === 1 ? "flex-end" : "flex-start"}>
            <ContentBlock size={70} chat={userId === 1 ? "Right" : "Left"}>
                <SimpleCell image={userImg} title={userName} subtitle={date}/>
                <p>{comment}</p>
            </ContentBlock>
        </FlexWrapper>
    )
}