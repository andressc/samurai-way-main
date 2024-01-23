import {News} from "./News"
import {AppStateType} from "../../../../redux/redux-store"
import {connect} from "react-redux"
import {PostType} from "../../../../redux/reducers/posts-reducer"
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect"
import {compose} from "redux";
import {ComponentType} from "react";

type MapStatePropsType = {
    posts: PostType[]
}

export type PropsType = MapStatePropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    posts: state.postsPage.posts,
})

export const NewsContainer = compose<ComponentType>(
    connect(mapStateToProps),
    withAuthRedirect
)(News)

//export const NewsContainer = withAuthRedirect(connect(mapStateToProps)(News))