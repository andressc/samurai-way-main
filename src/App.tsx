import React from "react"
import {Header} from "./layout/header/Header"
import {Footer} from "./layout/footer/Footer"
import {SideBar} from "./layout/sidebar/SideBar"
import {Content} from "./layout/content/Content"
import * as C from "./components/Styled/Components"
import {StateType} from "./redux/state"

type PropsType = {
    state: StateType
}
function App({state}: PropsType) {

    return (
        <C.AppWrapper>
            <Header/>
            <SideBar menu={state.menu}/>
            <Content state={state}/>
            <Footer/>
        </C.AppWrapper>
    )
}

export default App

