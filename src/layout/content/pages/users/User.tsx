import React, {FC} from "react"
import {SimpleCell} from "../../../../components/SimpleCell/SimpleCell"
import {ButtonBar} from "../../../../components/ButtonBar/ButtonBar"
import {Button} from "../../../../components/Button/Button"
import messageIcon from "../../../../assets/icons/message.svg"
import unfollowIcon from "../../../../assets/icons/unfollow.svg"
import followIcon from "../../../../assets/icons/follow.svg"
import * as C from "../../../../components/Styled/Components"
import {UserType} from "../../../../redux/reducers/users-reducer"
import defaultAvatar from "../../../../assets/img/default-avatar.png"
import buttonLoader from "../../../../assets/animations/button-loader.svg"

type PropsType = {
    user: UserType
    authUserId: number | null
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

export const User: FC<PropsType> = ({user, follow, unFollow, authUserId}) => {
    const followHandler = () => {
        follow(user.id)
    }

    const unFollowHandler = () => {
        unFollow(user.id)
    }

    const subscribeButton: JSX.Element = authUserId ? user.followed
        ? <Button icon={!user.buttonDisabled ? unfollowIcon : buttonLoader} title="UnFollow" onClick={unFollowHandler}
                  disabled={user.buttonDisabled}/>
        : <Button icon={!user.buttonDisabled ? followIcon : buttonLoader} title="Follow" onClick={followHandler}
                  disabled={user.buttonDisabled}/> : <></>

    return (
        <C.ContentBlock>
            <C.FlexWrapper $justify="space-between" $align="center">
                <SimpleCell image={user.photos.small ? user.photos.small : defaultAvatar}
                            title={user.name}
                            subtitle={"city"} link={`/profile/${user.id}`}/>
                <ButtonBar>
                    {subscribeButton}
                    <Button icon={messageIcon} title="send message"/>
                </ButtonBar>
            </C.FlexWrapper>
        </C.ContentBlock>
    )
}