import React, {FC} from "react"
import {SimpleCell} from "../../../../components/SimpleCell/SimpleCell"
import {ButtonBar} from "../../../../components/ButtonBar/ButtonBar"
import {Button} from "../../../../components/Button/Button"
import messageIcon from "../../../../assets/icons/message.svg"
import unfollowIcon from "../../../../assets/icons/unfollow.svg"
import followIcon from "../../../../assets/icons/follow.svg"
import * as C from "../../../../components/Styled/Components"
import {UserType} from "../../../../redux/reducers/users-reducer"
import defaultAvatar from "../../../../assets/img/default_avatar.png"

type PropsType = {
    user: UserType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

export const User: FC<PropsType> = ({user, follow, unFollow}) => {
    const followHandler = () => {
        follow(user.id)
    }

    const unFollowHandler = () => {
        unFollow(user.id)
    }

    const subscribeButton: JSX.Element = user.followed
        ? <Button icon={unfollowIcon} title="UnFollow" onClick={unFollowHandler}/>
        : <Button icon={followIcon} title="Follow" onClick={followHandler}/>

    return (
        <C.ContentBlock>
            <C.FlexWrapper $justify="space-between" $align="center">
                <SimpleCell image={user.photos.small ? user.photos.small : defaultAvatar}
                            title={user.name}
                            subtitle={"city"} link={`/samurai-way-main/profile/${user.id}`}/>
                <ButtonBar>
                    {subscribeButton}
                    <Button icon={messageIcon} title="send message"/>
                </ButtonBar>
            </C.FlexWrapper>
        </C.ContentBlock>
    )
}