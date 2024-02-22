import React, {ChangeEvent, FC} from "react"
import {Information} from "./information/Information"
import * as S from "./AboutUser.styled"
import defaultAvatar from "../../assets/img/default-avatar.png"
import {ProfileType} from "../../redux/reducers/profile-reducer"
import {FlexWrapper} from "../Styled/Components";

type AboutUserPropsType = {
    user: ProfileType
    isOwner: boolean
    setStatus: (status: string) => void
    savePhoto: (image: File) => void
}

export const AboutUser: FC<AboutUserPropsType> = ({user, setStatus, isOwner, savePhoto}) => {

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.currentTarget.files?.length) {
            savePhoto(e.currentTarget.files[0])
        }
    }

    return (
        <S.AboutUser>
            <FlexWrapper $direction="column" $gap={15} $align="center">
                <img src={user.userImg ? user.userImg : defaultAvatar} alt="avatar"/>
                {/*{isOwner && <Button title="Edit Image"/>}*/}
                {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
            </FlexWrapper>
            <div>
                <S.UserName>{user.fullName}</S.UserName>
                <Information aboutMe={user.status} setStatus={setStatus}/>
            </div>
        </S.AboutUser>
    )
}