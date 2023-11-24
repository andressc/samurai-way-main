import {News} from "./News"
import {AppState} from "../../../../redux/redux-store"
import {connect} from "react-redux"

const mapStateToProps = (state: AppState) => ({
    posts: state.postsPage.posts,
})

export const NewsContainer = connect(mapStateToProps)(News)