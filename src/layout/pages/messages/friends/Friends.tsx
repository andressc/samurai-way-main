import React from "react"
import {Friend, FriendType} from "./Friend"
import {S} from "./Friends_Styles"

type FriendsPropsType = {
    friends: FriendType[]
}
export const Friends: React.FC<FriendsPropsType> = ({friends}) => {

    const friendsList: Array<JSX.Element> = friends.map(friend => (<Friend key={friend.id} friend={friend}/>))

    return (
        <S.Friends>
            {friendsList}
        </S.Friends>
    )
}