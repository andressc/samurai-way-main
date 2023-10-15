import React from "react"
import messageIcon from "../../../../../assets/icons/message.svg"
import heartIcon from "../../../../../assets/icons/heart.svg"
import shareIcon from "../../../../../assets/icons/share.svg"
import {Button} from "../../../../../components/Button/Button"
import {SimpleCell} from "../../../../../components/SimpleCell/SimpleCell"
import {ButtonBar} from "../../../../../components/ButtonBar/ButtonBar"
import {ContentBlock} from "../../../../../components/ContentBlock"

type PostPropType = {
    img: string
    comment: string
    userName: string
    date: string
    likes: number
}

export const Post: React.FC<PostPropType> = (props) => {
    return (
        <ContentBlock>
            <SimpleCell image={props.img} title={props.userName} subtitle={props.date}/>
            <p>{props.comment}</p>
            <ButtonBar>
                <Button icon={heartIcon} title={props.likes}/>
                <Button icon={messageIcon} title="answer"/>
                <Button icon={shareIcon} title="share"/>
            </ButtonBar>
        </ContentBlock>
    )
}