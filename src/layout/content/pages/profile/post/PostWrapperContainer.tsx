import {connect} from "react-redux"
import {AppStateType} from "../../../../../redux/redux-store"
import {PostWrapper} from "./PostWrapper"
import {addPostAC, PostActionsType, PostType} from "../../../../../redux/reducers/posts-reducer"
import {Dispatch} from "redux"

type MapStatePropsType = {
    posts: PostType[]
    buttonTitle: string
}

type MapDispatchPropsType = {
    callback: (newValue: string) => void
}

export type PropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    posts: state.postsPage.posts,
    buttonTitle: "Add Post",
})

const mapDispatchToProps = (dispatch: Dispatch<PostActionsType>): MapDispatchPropsType => ({
    callback: (newValue: string) => {
        dispatch(addPostAC(newValue))
    }
})

export const PostWrapperContainer = connect(mapStateToProps, mapDispatchToProps)(PostWrapper)