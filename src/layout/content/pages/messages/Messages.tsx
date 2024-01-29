import React, {FC} from "react"
import {Friends} from "./friends/Friends"
import {Dialogs} from "./dialogs/Dialogs"
import * as S from "./Messages.styled"
import {BlockWrapper} from "../../../../components/BlockWrapper/BlockWrapper"
import {PropsType} from "./MessagesContainer"
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FlexWrapper} from "../../../../components/Styled/Components";
import {FormTextArea} from "../../../../components/Form/FormTextArea";
import {Button} from "../../../../components/Button/Button";
import messageIcon from "../../../../assets/icons/message.svg"
import {maxLength20, requiredField} from "../../../../utils/validators";

type FormDataType = {
    value: string
}

export const Messages: FC<PropsType> = ({friends, dialogs, buttonTitle, callback}) => {

    const onSubmit = (values: FormDataType) => {
        callback(values.value)
    }

    return (
        <BlockWrapper title="Messages">
            <S.Messages>
                <Friends friends={friends}/>
                <Dialogs dialogs={dialogs}/>
            </S.Messages>
            <MessageReduxForm onSubmit={onSubmit}/>
        </BlockWrapper>
    )
}

const MessageForm: FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <FlexWrapper $direction="column" $gap={20} $justify="center" $align="center">
                <Field name="value" component={FormTextArea} type="textarea" placeholder="your text here..."
                       validate={[requiredField, maxLength20]}/>
                <Button title="Send Message" icon={messageIcon}/>
            </FlexWrapper>
        </form>
    )
}

const MessageReduxForm = reduxForm<FormDataType>({form: 'message'})(MessageForm)