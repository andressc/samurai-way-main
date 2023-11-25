import {News} from "./News"
import {AppStateType} from "../../../../redux/redux-store"
import {connect} from "react-redux"
import {PostType} from "../../../../redux/reducers/posts-reducer"

type MapStatePropsType = {
    posts: PostType[]
}

export type PropsType = MapStatePropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    posts: state.postsPage.posts,
})

export const NewsContainer = connect(mapStateToProps)(News)