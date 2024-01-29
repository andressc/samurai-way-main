import React, {FC} from "react"
import {FlexWrapper} from "../../../components/Styled/Components"
import * as S from "./Auth.styled"
import defaultAvatar from "../../../assets/img/default-avatar.png"
import {Button} from "../../../components/Button/Button";

type PropsType = {
    profileName: string | null
    profilePhoto: string | null
    logoutTC: () => void
}
export const Auth: FC<PropsType> = ({profileName, profilePhoto, logoutTC}) => {

    const onclickHandler = () => {
        logoutTC()
    }

    return (
        <FlexWrapper $gap={10} $justify="center" $align="center">
            <S.ProfileName>{profileName ? profileName : "NoName"}</S.ProfileName>
            <S.ProfilePhoto src={profilePhoto ? profilePhoto : defaultAvatar}/>
            <Button title="Logout" onClick={onclickHandler} />
        </FlexWrapper>
    )
}

export default Auth