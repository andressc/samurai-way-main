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
                <Route path="/" exact>
                    <Redirect to="/profile"/>
                </Route>
                <Route path="/login">
                    <LoginContainer/>
                </Route>
                <Route path="/profile/:userId?">
                    <ProfileContainer/>
                </Route>
                <Route path="/messages">
                    <Suspense fallback={<Preloader/>}>
                    <MessagesContainer/>
                    </Suspense>
                </Route>
                <Route path="/news">
                    <NewsContainer/>
                </Route>
                <Route path="/users">
                    <UsersContainer/>
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