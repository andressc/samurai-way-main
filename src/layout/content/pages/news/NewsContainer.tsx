import {News} from "./News"
import {AppStateType} from "../../../../redux/redux-store"
import {connect} from "react-redux"
import {PostType} from "../../../../redux/reducers/posts-reducer"

type MapStatePropsType = {
    posts: PostType[]
    authUserId: number | null
}

export type PropsType = MapStatePropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    posts: state.postsPage.posts,
    authUserId: state.auth.id
})

export const NewsContainer = connect(mapStateToProps)(News)