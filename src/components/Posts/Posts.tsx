import React from "react"
import {S} from "./Posts_Styles"
import {Post, PostType} from "./Post"

type PostsPropsTypes = {
    posts: PostType[]
}
export const Posts: React.FC<PostsPropsTypes> = ({posts}) => {

    return (
        <S.Posts>
            {posts && posts.map(v => (
                <Post key={v.id}
                      id={v.id}
                      userImg={v.userImg}
                      comment={v.comment}
                      userId={v.userId}
                      userName={v.userName}
                      date={v.date}
                      likes={v.likes}
                      views={v.views}
                />
            ))}
        </S.Posts>
    )
}
