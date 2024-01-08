import React, {FC} from "react"
import * as S from "./Content.styled"
import {Redirect, Route, Switch} from "react-router-dom"
import {Settings} from "./pages/settings/Settings"
import {NotFound} from "./pages/not-found/NotFound"
import {MessagesContainer} from "./pages/messages/MessagesContainer"
import {NewsContainer} from "./pages/news/NewsContainer"
import UsersContainer from "./pages/users/UsersContainer"
import ProfileContainer from "./pages/profile/ProfileContainer"
import {Login} from "./pages/login/Login"

export const Content: FC = () => {
    return (

        <S.Content>
            <Switch>
                <Route path="/samurai-way-main/" exact>
                    <Redirect to="/samurai-way-main/profile"/>
                </Route>
                <Route path="/samurai-way-main/login">
                    <Login/>
                </Route>
                <Route path="/samurai-way-main/profile/:userId?">
                    <ProfileContainer/>
                </Route>
                <Route path="/samurai-way-main/messages">
                    <MessagesContainer/>
                </Route>
                <Route path="/samurai-way-main/news">
                    <NewsContainer/>
                </Route>
                <Route path="/samurai-way-main/users">
                    <UsersContainer/>
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