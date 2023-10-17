import React from "react"
import {Posts} from "../../../../components/Posts/Posts"
import {db} from "../../../../db/db"
import {BlockWrapper} from "../../../../components/BlockWrapper/BlockWrapper"

export const News: React.FC = () => {
    return (
        <BlockWrapper title="News">
            <Posts posts={db.posts}/>
        </BlockWrapper>
    )
}