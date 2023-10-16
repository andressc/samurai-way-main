import React from "react"
import {ContentBlock} from "../../../components/ContentBlock/ContentBlock"
import {BlockWrapper} from "../../../components/Wrapper/BlockWrapper"
import {db} from "../../../db/db"
import {SimpleCell} from "../../../components/SimpleCell/SimpleCell"
import {ButtonBar} from "../../../components/ButtonBar/ButtonBar"
import {Button} from "../../../components/Button/Button"
import messageIcon from "../../../assets/icons/message.svg"
import profileIcon from "../../../assets/icons/profile.svg"

export const Friends: React.FC = () => {
    return (
        <BlockWrapper title="Friends">

            {db.users && db.users.map(v => (
                    <ContentBlock key={v.id} $row={true}>
                        <SimpleCell image={v.userImg} title={v.userName} subtitle={"st. Peterburg"}/>
                        <ButtonBar>
                            <Button icon={messageIcon} title="send message"/>
                            <Button icon={profileIcon} title="go to user"/>
                        </ButtonBar>
                    </ContentBlock>
            ))}
        </BlockWrapper>
    )
}