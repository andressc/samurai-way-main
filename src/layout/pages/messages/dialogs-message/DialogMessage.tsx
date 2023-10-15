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
export const DialogMessage: React.FC<DialogMessagePropType> = ({img, comment, userName, date, align}) => {
    return (
        <FlexWrapper justify={align ? "flex-end" : "flex-start"}>
            <ContentBlock size={70}>
                <SimpleCell image={img} title={userName} subtitle={date}/>
                <p>{comment}</p>
            </ContentBlock>
        </FlexWrapper>
    )
}