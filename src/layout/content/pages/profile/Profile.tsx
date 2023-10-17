import React from "react"
import * as S from "./Profile.styled"
import {AboutUser} from "../../../../components/AboutUser/AboutUser"
import {PostWrapper} from "./post/PostWrapper"
import {db} from "../../../../db/db"

export const Profile: React.FC = () => {
    return (
        <S.Profile>
            <S.ProfileCover
                src="https://cs8.pikabu.ru/post_img/big/2018/02/06/12/151794761518266918.jpg"
                alt="cover"/>
            <AboutUser user={db.user}/>
            <PostWrapper/>
        </S.Profile>
    )
}