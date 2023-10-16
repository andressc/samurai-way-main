import React from "react"
import {FlexWrapper} from "../../../../components/Wrapper/FlexWrapper"
import {SimpleCell} from "../../../../components/SimpleCell/SimpleCell"
import {ButtonBar} from "../../../../components/ButtonBar/ButtonBar"
import {Button} from "../../../../components/Button/Button"
import messageIcon from "../../../../assets/icons/message.svg"
import profileIcon from "../../../../assets/icons/profile.svg"
import {ContentBlock} from "../../../../components/ContentBlock/ContentBlock"

export type FriendType = {
    userId: number
    userImg: string
    userName: string
    city: string
}

type FriendPropsType = {
    friend: FriendType
}

export const Friend: React.FC<FriendPropsType> = ({friend}) => {
    return (
        <ContentBlock>
            <FlexWrapper justify="space-between" align="center">
                <SimpleCell image={friend.userImg} title={friend.userName} subtitle={friend.city}/>
                <ButtonBar>
                    <Button icon={messageIcon} title="send message"/>
                    <Button icon={profileIcon} title="go to user"/>
                </ButtonBar>
            </FlexWrapper>
        </ContentBlock>
    )
}