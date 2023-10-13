import React from "react"
import {S} from "../Content_Styles"
import {Information} from "./Information"

export const InformationContainer: React.FC = () => {
    return (
        <S.InformationContainer>
            <Information title="Date of Birth" description="21 may"/>
            <Information title="City" description="St Peterburg"/>
            <Information title="Education" description="School"/>
            <Information title="Web Site" description="https://it-kamasutra.com"/>
        </S.InformationContainer>
    )
}