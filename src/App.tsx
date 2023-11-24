import React from "react"
import {Header} from "./layout/header/Header"
import {Footer} from "./layout/footer/Footer"
import {SideBar} from "./layout/sidebar/SideBar"
import {Content} from "./layout/content/Content"
import * as C from "./components/Styled/Components"

function App() {

    return (
        <C.AppWrapper>
            <Header/>
            <SideBar/>
            <Content/>
            <Footer/>
        </C.AppWrapper>
    )
}

export default App

