import React from "react"
import {Header} from "./layout/header/Header"
import {Footer} from "./layout/footer/Footer"
import {SideBar} from "./layout/sidebar/SideBar"
import {Content} from "./layout/content/Content"
import * as C from "./components/Styled/Components"
import {StateType} from "./redux/stateType"

type PropsType = {
    state: StateType
    callBack: (userText: string) => void
}
function App({state, callBack}: PropsType) {

    return (
        <C.AppWrapper>
            <Header/>
            <SideBar menu={state.menu}/>
            <Content state={state} callBack={callBack}/>
            <Footer/>
        </C.AppWrapper>
    )
}

export default App

