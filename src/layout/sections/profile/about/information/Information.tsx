import React from "react"
import { S } from "./Information_Styles"
import {InformationItem} from "./InformationItem"

export const Information: React.FC = () => {
    return (
        <S.Information>
            <InformationItem title="Date of Birth" description="21 may"/>
            <InformationItem title="City" description="St Peterburg"/>
            <InformationItem title="Education" description="School"/>
            <InformationItem title="Web Site" description="https://it-kamasutra.com"/>
        </S.Information>
    )
}