import React from "react"
import {SimpleCell} from "../../../../components/SimpleCell/SimpleCell"
import {ButtonBar} from "../../../../components/ButtonBar/ButtonBar"
import {Button} from "../../../../components/Button/Button"
import messageIcon from "../../../../assets/icons/message.svg"
import profileIcon from "../../../../assets/icons/profile.svg"
import * as C from "../../../../components/Styled/Components"
import {FriendType} from "../../../../redux/reducers/dialogs-reducer"

type FriendPropsType = {
    friend: FriendType
}

export const User: React.FC<FriendPropsType> = ({friend}) => {
    return (
        <C.ContentBlock>
            <C.FlexWrapper $justify="space-between" $align="center">
                <SimpleCell image={friend.userImg} title={friend.userName} subtitle={friend.city}/>
                <ButtonBar>
                    <Button icon={messageIcon} title="send message"/>
                    <Button icon={profileIcon} title="go to user"/>
                </ButtonBar>
            </C.FlexWrapper>
        </C.ContentBlock>
    )
}