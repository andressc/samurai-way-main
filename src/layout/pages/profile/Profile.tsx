import React from "react"
import {S} from "./Profile_Styles"
import {AboutUser} from "../../../components/AboutUser/AboutUser"
import {PostWrapper} from "./post/PostWrapper"
import {db} from "../../../db/db"

export const Profile: React.FC = () => {
    return (
        <S.Profile>
            <S.ProfileCover
                src="https://cs8.pikabu.ru/post_img/big/2018/02/06/12/151794761518266918.jpg"
                alt="cover"/>
            <AboutUser id={db.users[0].id}
                       userId={db.users[0].userId}
                       userName={db.users[0].userName}
                       userImg={db.users[0].userImg}
                       information={db.users[0].information}
            />
            <PostWrapper/>
        </S.Profile>
    )
}