import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {GlobalStyled} from "./styles/Global.styled"

ReactDOM.render(
    <>
        <GlobalStyled/>
        <App/>
    </>,
    document.getElementById("root")
)