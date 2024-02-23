import React, {FC} from "react"
import {ProfileType} from "../../../redux/reducers/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {ProfileResponseTypeContacts, UpdateProfilePayloadType} from "../../../api/profile-api";
import {FlexWrapper} from "../../Styled/Components";
import {FormField} from "../../Form/FormField";
import {maxLength20, requiredField} from "../../../utils/validators";
import {Button} from "../../Button/Button";
import {ErrorField} from "../../Form/ErrorField";


type InformationFormPropsType = {
    user: ProfileType
    updateProfile: (payload: UpdateProfilePayloadType) => Promise<boolean>
    setIsEdit: (isEdit: boolean) => void
}
export const InformationForm: FC<InformationFormPropsType> = ({user, updateProfile, setIsEdit}) => {

    const onSubmit = (values: UpdateProfilePayloadType) => {
        updateProfile(values).then((res) => {
            if(res) {
                setIsEdit(false)
            }
        })
    }

    const initialValues = {
        fullName: user.fullName ? user.fullName : undefined,
        aboutMe: user.aboutMe ? user.aboutMe : undefined,
        lookingForAJob: user.lookingForAJob,
        lookingForAJobDescription: user.lookingForAJobDescription ? user.lookingForAJobDescription : undefined,
        contacts: user.contacts
    }

    return (
        <InformationReduxForm onSubmit={onSubmit} initialValues={initialValues}/>
    )
}

const Form: FC<InjectedFormProps<UpdateProfilePayloadType>> = (props) => {

    const {handleSubmit, error, initialValues} = props

    let contactsList

    if(initialValues.contacts) {
        const contactsKeys = Object.keys(initialValues.contacts) as (keyof ProfileResponseTypeContacts)[]
        contactsList = contactsKeys
            .map((key) => <Field name={`contacts.${key}`} key={key} component={FormField} placeholder={key}
                                 validate={[maxLength20]}/>)
    }

    return (
        <form onSubmit={handleSubmit}>
            <FlexWrapper $direction="column" $gap={20} $justify="center" $align="center" style={{marginTop: "20px"}}>
                <Field name="fullName" component={FormField} placeholder="fullName"
                       validate={[requiredField, maxLength20]}/>
                <Field name="aboutMe" component={FormField} placeholder="aboutMe"
                       validate={[requiredField, maxLength20]}/>
                <FlexWrapper $gap={10} $justify="center" $align="center">
                    <Field name="lookingForAJob" component="input" type="checkbox"/>
                    <span>lookingForAJob</span>
                </FlexWrapper>
                <Field name="lookingForAJobDescription" component={FormField} placeholder="lookingForAJobDescription"
                       validate={[requiredField, maxLength20]}/>
                <span>Contacts</span>
                {contactsList && contactsList}
                <Button title="save"/>
                {error && <ErrorField error={error}/>}
            </FlexWrapper>
        </form>
    )
}

const InformationReduxForm = reduxForm<UpdateProfilePayloadType>({
    form: 'edit-profile',
})(Form)