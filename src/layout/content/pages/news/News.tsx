import React, {FC} from "react"
import {Posts} from "../../../../components/Posts/Posts"
import {BlockWrapper} from "../../../../components/BlockWrapper/BlockWrapper"
import {PropsType} from "./NewsContainer"
import {Redirect} from "react-router-dom"

export const News: FC<PropsType> = ({posts, authUserId}) => {

    if(!authUserId) return <Redirect to="/samurai-way-main/login"/>

    return (
        <BlockWrapper title="News">
            <Posts posts={posts}/>
        </BlockWrapper>
    )
}