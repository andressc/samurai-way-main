import React from "react"
import {SimpleCell} from "../../../../../components/SimpleCell/SimpleCell"
import {NavLink} from "react-router-dom"
import {FriendType} from "../../friends/Friend"
import * as C from "../../../../../components/Styled/Components"

type FriendPropsType = {
    friend: FriendType
}

export const Friend: React.FC<FriendPropsType> = ({friend}) => {
    return (
        <NavLink to={`/messages/${friend.userId}`}>
            <C.ContentBlock $hover={true}>
                <SimpleCell image={friend.userImg} title={friend.userName} subtitle={friend.city}/>
            </C.ContentBlock>
        </NavLink>
    )
}