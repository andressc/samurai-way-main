import React, {FC} from "react"
import * as S from "./Information.styled"
import {ProfileType} from "../../../redux/reducers/profile-reducer";
import {InformationItem} from "./InformationItem";
import {ProfileResponseTypeContacts} from "../../../api/profile-api";
import {Button} from "../../Button/Button";
import newsIcon from "../../../assets/icons/news.svg"
import {FlexWrapper} from "../../Styled/Components";


type InformationPropsType = {
    user: ProfileType
    isOwner: boolean
    setIsEdit: (isEdit: boolean) => void
}
export const Information: FC<InformationPropsType> = ({user, isOwner, setIsEdit}) => {

    const contactsKeys = Object.keys(user.contacts) as (keyof ProfileResponseTypeContacts)[]

    const contactsList = contactsKeys
        .map((key, index) => user.contacts[key] && <InformationItem key={index} fontWeight={600} title={key} text={user.contacts[key]}/>)

    const setIsEditHandler = () => {
        setIsEdit(true)
    }

    return (
        <S.Information>
            <FlexWrapper style={{margin: "15px 0"}} $gap={40}>
                <div>
                    <S.HeaderInformationItem>Information</S.HeaderInformationItem>
                    <InformationItem title="Full name" text={user.fullName ? user.fullName : ""}/>
                    <InformationItem title="About me" text={user.aboutMe ? user.aboutMe : ""}/>
                    <InformationItem title="lookingForAJob" text={user.lookingForAJob ? "yes" : "no"}/>
                    {user.lookingForAJob && <InformationItem title="lookingForAJobDescription"
                                                             text={user.lookingForAJobDescription}/>}
                </div>
                <div style={{marginLeft: "20px"}}>
                    <S.HeaderInformationItem>Contacts</S.HeaderInformationItem>
                    {contactsList}
                </div>
            </FlexWrapper>
            {isOwner && <Button title="edit information" onClick={setIsEditHandler} icon={newsIcon}/>}
        </S.Information>
    )
}