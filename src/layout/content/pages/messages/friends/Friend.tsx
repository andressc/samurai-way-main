import React, {FC} from "react"
import {SimpleCell} from "../../../../../components/SimpleCell/SimpleCell"
import {NavLink} from "react-router-dom"
import * as C from "../../../../../components/Styled/Components"
import {FriendType} from "../../../../../redux/reducers/dialogs-reducer"

type FriendPropsType = {
    friend: FriendType
}

export const Friend: FC<FriendPropsType> = ({friend}) => {
    return (
        <NavLink to={`/messages/${friend.userId}`}>
            <C.ContentBlock $hover={true}>
                <SimpleCell image={friend.userImg} title={friend.userName} subtitle={friend.city}/>
            </C.ContentBlock>
        </NavLink>
    )
}