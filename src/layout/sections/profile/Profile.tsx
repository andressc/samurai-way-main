import React from "react"
import {S} from "./Profile_Styles"
import {Comments} from "./comments/Comments"
import {About} from "./about/About"
import {Post} from "./post/Post"

export const Profile: React.FC = () => {
    return (
        <S.Profile>
            <S.ProfileCover
                src="https://cs8.pikabu.ru/post_img/big/2018/02/06/12/151794761518266918.jpg"
                alt="cover"/>
            <About/>
            <Post/>
            <Comments/>
        </S.Profile>
    )
}