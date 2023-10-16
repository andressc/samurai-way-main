import React from "react"
import {S} from "./Menu_Styles"
import profileIcon from "../../../assets/icons/profile.svg"
import messageIcon from "../../../assets/icons/message.svg"
import newsIcon from "../../../assets/icons/news.svg"
import musicIcon from "../../../assets/icons/music.svg"
import settingsIcon from "../../../assets/icons/setting.svg"

import {MenuItem} from "./MenuItem"

export const Menu: React.FC = () => {
    return (
        <S.Menu>
            <MenuItem link="/profile" title="Profile" icon={profileIcon}/>
            <MenuItem link="/messages" title="Messages" icon={messageIcon}/>
            <MenuItem link="/news" title="News" icon={newsIcon}/>
            <MenuItem link="/friends" title="Friends" icon={musicIcon}/>
            <MenuItem link="/settings" title="Settings" icon={settingsIcon}/>
        </S.Menu>
    )
}