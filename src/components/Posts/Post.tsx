import React from "react"
import messageIcon from "../../assets/icons/message.svg"
import heartIcon from "../../assets/icons/heart.svg"
import shareIcon from "../../assets/icons/share.svg"
import {Button} from "../Button/Button"
import {SimpleCell} from "../SimpleCell/SimpleCell"
import {ButtonBar} from "../ButtonBar/ButtonBar"
import {ContentBlock} from "../ContentBlock"
import {FlexWrapper} from "../FlexWrapper"
import {Views} from "../Views"

type PostPropType = {
    img: string
    comment: string
    userName: string
    date: string
    likes: number
    views: number
}

export const Post: React.FC<PostPropType> = ({img, comment, userName, date, likes, views}) => {
    return (
        <ContentBlock>
            <FlexWrapper justify="space-between">
                <SimpleCell image={img} title={userName} subtitle={date}/>
                <Views>{views}</Views>
            </FlexWrapper>
            <p>{comment}</p>
            <ButtonBar>
                <Button icon={heartIcon} title={likes}/>
                <Button icon={messageIcon} title="answer"/>
                <Button icon={shareIcon} title="share"/>
            </ButtonBar>
        </ContentBlock>
    )
}