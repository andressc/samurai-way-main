import React from "react"
import {ContentBlock} from "../../../../components/ContentBlock"
import {SimpleCell} from "../../../../components/SimpleCell/SimpleCell"
import {FlexWrapper} from "../../../../components/FlexWrapper"

type DialogMessagePropType = {
    img: string
    comment: string
    userName: string
    date: string
    align?: boolean
}
export const DialogMessage: React.FC<DialogMessagePropType> = (props) => {
    return (
        <FlexWrapper justify={props.align ? "flex-end" : "flex-start"}>
            <ContentBlock size={70}>
                <SimpleCell image={props.img} title={props.userName} subtitle={props.date}/>
                <p>{props.comment}</p>
            </ContentBlock>
        </FlexWrapper>
    )
}