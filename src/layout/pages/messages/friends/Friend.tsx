import React from "react"
import {ContentBlock} from "../../../../components/ContentBlock/ContentBlock"
import {SimpleCell} from "../../../../components/SimpleCell/SimpleCell"
import {NavLink} from "react-router-dom"

export type FriendType = {
    id: number
    userImg: string
    userName: string
    userId: number
    active?: boolean
}

type FriendPropsType = {
    friend: FriendType
}

export const Friend: React.FC<FriendPropsType> = ({friend}) => {
    return (
        <NavLink to={`/messages/${friend.userId}`}>
            <ContentBlock $hover={true} $active={friend.active}>
                <SimpleCell image={friend.userImg} title={friend.userName}/>
            </ContentBlock>
        </NavLink>
    )
}