import React from "react"
import {Friend} from "./Friend"
import * as S from "./Friends.styled"
import {FriendType} from "../../../../../redux/reducers/dialogs-reducer"

type FriendsPropsType = {
    friends: FriendType[]
}
export const Friends: React.FC<FriendsPropsType> = ({friends}) => {

    const friendsList: JSX.Element[] = friends && friends.map(friend => (<Friend key={friend.userId} friend={friend}/>))

    return (
        <S.Friends>
            {friendsList}
        </S.Friends>
    )
}