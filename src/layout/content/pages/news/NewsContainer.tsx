import React, {useContext} from "react"
import {News} from "./News"
import {StoreContext} from "../../../../StoreContext"

export const NewsContainer: React.FC = () => {

    const context = useContext(StoreContext)

    return (
        <News posts={context.getState().postsPage.posts}/>
    )
}