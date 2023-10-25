import React from "react"
import {Posts} from "../../../../components/Posts/Posts"
import {BlockWrapper} from "../../../../components/BlockWrapper/BlockWrapper"
import {PostType} from "../../../../components/Posts/Post"

type PropsType = {
    posts: PostType[]
}
export const News: React.FC<PropsType> = ({posts}) => {
    return (
        <BlockWrapper title="News">
            <Posts posts={posts}/>
        </BlockWrapper>
    )
}