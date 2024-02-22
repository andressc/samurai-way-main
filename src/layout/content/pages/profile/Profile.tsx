import React, {FC} from "react"
import * as S from "./Profile.styled"
import {AboutUser} from "../../../../components/AboutUser/AboutUser"
import {PostWrapperContainer} from "./post/PostWrapperContainer"
import {ProfileType} from "../../../../redux/reducers/profile-reducer"

type PropsType = {
    user: ProfileType
    setStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (image: File) => void
}
export const Profile: FC<PropsType> = ({user, setStatus, isOwner, savePhoto}) => {

    return (
        <S.Profile>
            <S.ProfileCover
                src="https://cs8.pikabu.ru/post_img/big/2018/02/06/12/151794761518266918.jpg"
                alt="cover"/>
            <AboutUser user={user} setStatus={setStatus} isOwner={isOwner} savePhoto={savePhoto}/>
            <PostWrapperContainer/>
        </S.Profile>
    )
}
