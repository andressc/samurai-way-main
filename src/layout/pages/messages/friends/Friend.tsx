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
export const Friend: React.FC<FriendType> = ({userImg, userName, userId, active, id}) => {
    return (
        <NavLink to={`/messages/${userId}`}>
            <ContentBlock $hover={true} $active={active}>
                <SimpleCell image={userImg} title={userName}/>
            </ContentBlock>
        </NavLink>
    )
}