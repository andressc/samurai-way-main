import React from "react"
import * as S from "./Posts.styled"
import {Post} from "./Post"
import {PostType} from "../../redux/reducers/posts-reducer"

type PostsPropsTypes = {
    posts: PostType[]
}
export const Posts: React.FC<PostsPropsTypes> = ({posts}) => {

    const postsList: JSX.Element[] = posts && posts.map(post => (<Post key={post.id} post={post}/>))

    return (
        <S.Posts>
            {postsList}
        </S.Posts>
    )
}
