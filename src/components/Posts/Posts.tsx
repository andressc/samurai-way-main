import React from "react"
import * as S from "./Posts.styled"
import {Post, PostType} from "./Post"

type PostsPropsTypes = {
    posts: PostType[]
}
export const Posts: React.FC<PostsPropsTypes> = ({posts}) => {

    const postsList: JSX.Element[] = posts && posts.map(post => (<Post key={post.id} post={post}/>)).reverse()

    return (
        <S.Posts>
            {postsList}
        </S.Posts>
    )
}
