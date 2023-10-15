import React from "react"
import {S} from "./Content_Styles"
import {Profile} from "../pages/profile/Profile"
import {Route} from "react-router-dom"
import {Messages} from "../pages/messages/Messages"
import {News} from "../pages/news/News"
import {Music} from "../pages/music/Music"
import {Settings} from "../pages/settings/Settings"

export const Content: React.FC = () => {
    return (

            <S.Content>
                <Route path="/profile" component={Profile}/>
                <Route path="/messages" component={Messages}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </S.Content>

    )
}