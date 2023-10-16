import React from "react"
import {ContentBlock} from "../../../../../components/ContentBlock/ContentBlock"
import {SimpleCell} from "../../../../../components/SimpleCell/SimpleCell"
import {NavLink} from "react-router-dom"
import {FriendType} from "../../friends/Friend"

type FriendPropsType = {
    friend: FriendType
}

export const Friend: React.FC<FriendPropsType> = ({friend}) => {
    return (
        <NavLink to={`/messages/${friend.userId}`}>
            <ContentBlock $hover={true}>
                <SimpleCell image={friend.userImg} title={friend.userName} subtitle={friend.city}/>
            </ContentBlock>
        </NavLink>
    )
}