import React, {FC} from "react"
import {Posts} from "../../../../components/Posts/Posts"
import {BlockWrapper} from "../../../../components/BlockWrapper/BlockWrapper"
import {PropsType} from "./NewsContainer"

export const News: FC<PropsType> = ({posts}) => {

    return (
        <BlockWrapper title="News">
            <Posts posts={posts}/>
        </BlockWrapper>
    )
}