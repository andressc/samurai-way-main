import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {GlobalStyled} from "./styles/Global.styled"
import {BrowserRouter} from "react-router-dom"

ReactDOM.render(
    <>
        <BrowserRouter>
            <GlobalStyled/>
            <App/>
        </BrowserRouter>
    </>,
    document.getElementById("root")
)