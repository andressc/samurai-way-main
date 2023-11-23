import React from "react"
import * as S from "./Content.styled"
import {Profile} from "./pages/profile/Profile"
import {Redirect, Route, Switch} from "react-router-dom"
import {Messages} from "./pages/messages/Messages"
import {News} from "./pages/news/News"
import {Friends} from "./pages/friends/Friends"
import {Settings} from "./pages/settings/Settings"
import {StateType} from "../../redux/stateType"
import {ActionType} from "../../redux/actionType"
import {NotFound} from "./pages/not-found/NotFound"

type PropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
}
export const Content: React.FC<PropsType> = ({state, dispatch}) => {
    return (

        <S.Content>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/profile"/>
                </Route>
                <Route path="/profile">
                    <Profile user={state.user.user} posts={state.postsPage.posts} dispatch={dispatch}/>
                </Route>
                <Route path="/messages">
                    <Messages dialogs={state.dialogsPage.dialogs} friends={state.dialogsPage.friends}
                              dispatch={dispatch}/>
                </Route>
                <Route path="/news">
                    <News posts={state.postsPage.posts}/>
                </Route>
                <Route path="/friends">
                    <Friends friends={state.dialogsPage.friends}/>
                </Route>
                <Route path="/settings">
                    <Settings/>
                </Route>
                <Route path="*">
                    <NotFound/>
                </Route>
            </Switch>
        </S.Content>

    )
}