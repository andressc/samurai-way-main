import React, {FC} from "react"
import * as S from "./PostWrapper.styled"
import {Posts} from "../../../../../components/Posts/Posts"
import {PropsType} from "./PostWrapperContainer"
import {FlexWrapper} from "../../../../../components/Styled/Components";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Button} from "../../../../../components/Button/Button";
import {FormTextArea} from "../../../../../components/Form/FormTextArea";
import newsIcon from "../../../../../assets/icons/news.svg";
import {maxLength20, requiredField} from "../../../../../utils/validators";

type FormDataType = {
    value: string
}

export const PostWrapper: FC<PropsType> = ({posts, buttonTitle, callback}) => {

    const onSubmit = (values: FormDataType) => {
        callback(values.value)
    }

    return (
        <S.PostWrapper>
            <PostReduxForm onSubmit={onSubmit}/>
            <Posts posts={posts}/>
        </S.PostWrapper>
    )
}

const PostForm: FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <FlexWrapper $direction="column" $gap={20} $justify="center" $align="center">
                <Field name="value" component={FormTextArea} type="textarea" placeholder="your text here..."
                       validate={[requiredField, maxLength20]}/>
                <Button title="Send Post" icon={newsIcon}/>
            </FlexWrapper>
        </form>
    )
}

const PostReduxForm = reduxForm<FormDataType>({form: 'post'})(PostForm)