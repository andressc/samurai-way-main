import React from "react"
import * as S from "./Content.styled"
import {Redirect, Route, Switch} from "react-router-dom"
import {Settings} from "./pages/settings/Settings"
import {NotFound} from "./pages/not-found/NotFound"
import {MessagesContainer} from "./pages/messages/MessagesContainer"
import {ProfileContainer} from "./pages/profile/ProfileContainer"
import {NewsContainer} from "./pages/news/NewsContainer"
import {FriendsContainer} from "./pages/friends/FriendsContainer"

export const Content: React.FC = () => {
    return (

        <S.Content>
            <Switch>
                <Route path="/samurai-way-main/" exact>
                    <Redirect to="/samurai-way-main/profile"/>
                </Route>
                <Route path="/samurai-way-main/profile">
                    <ProfileContainer/>
                </Route>
                <Route path="/samurai-way-main/messages">
                    <MessagesContainer/>
                </Route>
                <Route path="/samurai-way-main/news">
                    <NewsContainer/>
                </Route>
                <Route path="/samurai-way-main/friends">
                    <FriendsContainer/>
                </Route>
                <Route path="/samurai-way-main/settings">
                    <Settings/>
                </Route>
                <Route path="*">
                    <NotFound/>
                </Route>
            </Switch>
        </S.Content>

    )
}