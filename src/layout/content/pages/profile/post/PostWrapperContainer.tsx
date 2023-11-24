import {connect} from "react-redux"
import {AppDispatch, AppState} from "../../../../../redux/redux-store"
import {PostWrapper} from "./PostWrapper"
import {addPostAC} from "../../../../../redux/posts-reducer"

const mapStateToProps = (state: AppState) => ({
    posts: state.postsPage.posts,
    buttonTitle: "Add Post",
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    callback: (newValue: string) => {
        dispatch(addPostAC(newValue))
    }
})

export const PostWrapperContainer = connect(mapStateToProps, mapDispatchToProps)(PostWrapper)