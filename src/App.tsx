import React from "react"
import {Header} from "./layout/header/Header"
import {Content} from "./layout/sections/content/Content"
import {Footer} from "./layout/footer/Footer"
import {SideBar} from "./layout/sections/sidebar/SideBar"
import {AppWrapper} from "./components/AppWrapper"

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

