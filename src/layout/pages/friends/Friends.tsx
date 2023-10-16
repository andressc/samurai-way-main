import React from "react"
import {ContentBlock} from "../../../components/ContentBlock/ContentBlock"
import {SimpleCell} from "../../../components/SimpleCell/SimpleCell"
import {ButtonBar} from "../../../components/ButtonBar/ButtonBar"
import {Button} from "../../../components/Button/Button"
import messageIcon from "../../../assets/icons/message.svg"
import viewIcon from "../../../assets/icons/view.svg"
import {BlockWrapper} from "../../../components/Wrapper/BlockWrapper"

export const Friends: React.FC = () => {
    return (
        <BlockWrapper title="Friends">
            <ContentBlock>
                <SimpleCell image={"https://брендлист.рф/upload/000/u60/73/53/manikyur-avatarka-photo-normal.jpg"} title={"Igor Petrov"} subtitle={"St. Peterburg"}/>
                <ButtonBar>
                    <Button icon={messageIcon} title="send message"/>
                    <Button icon={viewIcon} title="show user"/>
                </ButtonBar>
            </ContentBlock>

            <ContentBlock>
                <SimpleCell image={"https://брендлист.рф/upload/000/u60/73/53/manikyur-avatarka-photo-normal.jpg"} title={"Igor Petrov"} subtitle={"St. Peterburg"}/>
                <ButtonBar>
                    <Button icon={messageIcon} title="send message"/>
                    <Button icon={viewIcon} title="show user"/>
                </ButtonBar>
            </ContentBlock>

            <ContentBlock>
                <SimpleCell image={"https://брендлист.рф/upload/000/u60/73/53/manikyur-avatarka-photo-normal.jpg"} title={"Igor Petrov"} subtitle={"St. Peterburg"}/>
                <ButtonBar>
                    <Button icon={messageIcon} title="send message"/>
                    <Button icon={viewIcon} title="show user"/>
                </ButtonBar>
            </ContentBlock>

            <ContentBlock>
                <SimpleCell image={"https://брендлист.рф/upload/000/u60/73/53/manikyur-avatarka-photo-normal.jpg"} title={"Igor Petrov"} subtitle={"St. Peterburg"}/>
                <ButtonBar>
                    <Button icon={messageIcon} title="send message"/>
                    <Button icon={viewIcon} title="show user"/>
                </ButtonBar>
            </ContentBlock>
        </BlockWrapper>
    )
}