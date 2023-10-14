import React from "react"
import {Header} from "./layout/header/Header"
import {Profile} from "./layout/pages/profile/Profile"
import {Footer} from "./layout/footer/Footer"
import {SideBar} from "./layout/sidebar/SideBar"
import {AppWrapper} from "./components/AppWrapper"
import {ContentWrapper} from "./components/ContentWrapper"

function App() {

    return (
        <AppWrapper>
            <Header/>
            <SideBar/>
            <ContentWrapper>
                <Profile/>
            </ContentWrapper>
            <Footer/>
        </AppWrapper>
    )
}

export default App

