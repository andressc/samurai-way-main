import React from "react"
import * as S from "./Content.styled"
import {Profile} from "./pages/profile/Profile"
import {Route} from "react-router-dom"
import {Messages} from "./pages/messages/Messages"
import {News} from "./pages/news/News"
import {Friends} from "./pages/friends/Friends"
import {Settings} from "./pages/settings/Settings"
import {StateType} from "../../redux/stateType"

type PropsType = {
    state: StateType
    callBack: (userText: string) => void
}
export const Content: React.FC<PropsType> = ({state, callBack}) => {
    return (

            <S.Content>
                <Route path="/profile" render={() => <Profile user={state.user} posts={state.posts} callBack={callBack}/>}/>
                <Route path="/messages"  render={() => <Messages dialogs={state.dialogs} friends={state.friends}/>}/>
                <Route path="/news"  render={() => <News posts={state.posts}/>}/>
                <Route path="/friends"  render={() => <Friends friends={state.friends}/>}/>
                <Route path="/settings"  render={() => <Settings/>}/>
            </S.Content>

    )
}