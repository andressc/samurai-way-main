import React, {FC, lazy, Suspense} from "react"
import * as S from "./Content.styled"
import {Redirect, Route, Switch} from "react-router-dom"
import {Settings} from "./pages/settings/Settings"
import {NotFound} from "./pages/not-found/NotFound"
import {NewsContainer} from "./pages/news/NewsContainer"
import UsersContainer from "./pages/users/UsersContainer"
import ProfileContainer from "./pages/profile/ProfileContainer"
import {LoginContainer} from "./pages/login/LoginContainer";
import Preloader from "../../components/Preloader/Preloader";
//import MessagesContainer from "./pages/messages/MessagesContainer";
const MessagesContainer = lazy(() => import("./pages/messages/MessagesContainer"))

export const Content: FC = () => {
    return (

        <S.Content>
            <Switch>
                <Route path="/samurai-way-main/" exact>
                    <Redirect to="/samurai-way-main/profile"/>
                </Route>
                <Route path="/samurai-way-main/login">
                    <LoginContainer/>
                </Route>
                <Route path="/samurai-way-main/profile/:userId?">
                    <ProfileContainer/>
                </Route>
                <Route path="/samurai-way-main/messages">
                    <Suspense fallback={<Preloader/>}>
                    <MessagesContainer/>
                    </Suspense>
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