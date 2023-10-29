import React from "react"
import * as S from "./Content.styled"
import {Profile} from "./pages/profile/Profile"
import {Route} from "react-router-dom"
import {Messages} from "./pages/messages/Messages"
import {News} from "./pages/news/News"
import {Friends} from "./pages/friends/Friends"
import {Settings} from "./pages/settings/Settings"
import {StateType} from "../../redux/stateType"
import {ActionType} from "../../redux/actionType"

type PropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
}
export const Content: React.FC<PropsType> = ({state, dispatch}) => {
    return (

            <S.Content>
                <Route path="/profile" render={() => <Profile user={state.user.user} posts={state.postsPage.posts} dispatch={dispatch}/>}/>
                <Route path="/messages"  render={() => <Messages dialogs={state.dialogsPage.dialogs} friends={state.dialogsPage.friends} dispatch={dispatch}/>}/>
                <Route path="/news"  render={() => <News posts={state.postsPage.posts}/>}/>
                <Route path="/friends"  render={() => <Friends friends={state.dialogsPage.friends}/>}/>
                <Route path="/settings"  render={() => <Settings/>}/>
            </S.Content>

    )
}