import React, {useContext} from "react"
import {StoreContext} from "../../StoreContext"
import {Posts} from "./Posts"

export const PostsContainer: React.FC = () => {

    const context = useContext(StoreContext)

    return (
        <Posts posts={context.getState().postsPage.posts}/>
    )
}
