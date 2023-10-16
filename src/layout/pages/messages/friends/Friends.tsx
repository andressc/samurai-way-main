import React from "react"
import {Friend, FriendType} from "./Friend"
import {S} from "./Friends_Styles"

type FriendsPropsType = {
    friends: FriendType[]
}
export const Friends: React.FC<FriendsPropsType> = ({friends}) => {
    return (
        <S.Friends>
            {friends && friends.map(v => (
                <Friend key={v.id}
                        id={v.id}
                        userImg={v.userImg}
                        userName={v.userName}
                        userId={v.userId}
                        active={v.active}
                />
            ))}
        </S.Friends>
    )
}