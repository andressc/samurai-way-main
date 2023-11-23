import React from "react"
import {Header} from "./layout/header/Header"
import {Footer} from "./layout/footer/Footer"
import {SideBar} from "./layout/sidebar/SideBar"
import {Content} from "./layout/content/Content"
import * as C from "./components/Styled/Components"
import {StateType} from "./redux/stateType"
import {ActionType} from "./redux/actionType"

type PropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
}

function App({state, dispatch}: PropsType) {

    return (
        <C.AppWrapper>
            <Header/>
            <SideBar menu={state.sidebar.menu}/>
            <Content state={state} dispatch={dispatch}/>
            <Footer/>
        </C.AppWrapper>
    )
}

export default App

