import React, {FC} from "react"
import {FlexWrapper} from "../../../components/Styled/Components"
import * as S from "./Auth.styled"
import defaultAvatar from "../../../assets/img/default_avatar.png"

type PropsType = {
    profileName: string | null
    profilePhoto: string | null
}
export const Auth: FC<PropsType> = ({profileName, profilePhoto}) => {
    return (
        <FlexWrapper $gap={10} $justify="center" $align="center">
            <S.ProfileName>{profileName ? profileName : "NoName"}</S.ProfileName>
            <S.ProfilePhoto src={profilePhoto ? profilePhoto : defaultAvatar}/>
        </FlexWrapper>
    )
}

export default Auth