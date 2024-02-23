import React, {ChangeEvent, FC, useState} from "react"
import {Information} from "./information/Information"
import * as S from "./AboutUser.styled"
import defaultAvatar from "../../assets/img/default-avatar.png"
import {ProfileType} from "../../redux/reducers/profile-reducer"
import {FlexWrapper} from "../Styled/Components";
import {InformationForm} from "./information/InformationForm";
import {StatusItem} from "./information/StatusItem";
import {UpdateProfilePayloadType} from "../../api/profile-api";

type AboutUserPropsType = {
    user: ProfileType
    isOwner: boolean
    setStatus: (status: string) => void
    savePhoto: (image: File) => void
    updateProfile: (payload: UpdateProfilePayloadType) => Promise<boolean>
}

export const AboutUser: FC<AboutUserPropsType> = ({user, setStatus, isOwner, savePhoto, updateProfile}) => {

    const [isEdit, setIsEdit] = useState(false)

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
                <StatusItem aboutMe={user.status} title="Status" setStatus={setStatus}/>
                {!isEdit
                    ? <Information user={user} isOwner={isOwner} setIsEdit={setIsEdit}/>
                    : <InformationForm setIsEdit={setIsEdit} user={user} updateProfile={updateProfile}/>}
            </div>
        </S.AboutUser>
    )
}