import React from "react"
import {Header} from "./layout/header/Header"
import {Footer} from "./layout/footer/Footer"
import {SideBar} from "./layout/sidebar/SideBar"
import {AppWrapper} from "./components/AppWrapper"
import {Content} from "./layout/content/Content"

function App() {

    return (
        <AppWrapper>
            <Header/>
            <SideBar/>
            <Content/>
            <Footer/>
        </AppWrapper>
    )
}

export default App

