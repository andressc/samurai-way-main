import React from "react"
import {S} from "./Posts_Styles"
import {Post, PostType} from "./Post"

type PostsPropsTypes = {
    posts: PostType[]
}
export const Posts: React.FC<PostsPropsTypes> = ({posts}) => {

    const postsList: Array<JSX.Element> = posts.map(post => (<Post key={post.id} post={post}/>))

    return (
        <S.Posts>
            {postsList}
        </S.Posts>
    )
}
