import React from "react"
import {ContentBlock} from "../../../components/ContentBlock/ContentBlock"
import {BlockWrapper} from "../../../components/Wrapper/BlockWrapper"
import {AboutUser} from "../../../components/AboutUser/AboutUser"
import {db} from "../../../db/db"

export const Friends: React.FC = () => {
    return (
        <BlockWrapper title="Friends">

            {db.users && db.users.map(v => (
                <ContentBlock>
                    <AboutUser id={v.id}
                               userId={v.userId}
                               userName={v.userName}
                               userImg={v.userImg}
                               information={v.information}/>
                </ContentBlock>
            ))}
        </BlockWrapper>
    )
}