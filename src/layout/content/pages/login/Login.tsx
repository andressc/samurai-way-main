import React, {FC} from "react"
import {BlockWrapper} from "../../../../components/BlockWrapper/BlockWrapper"
import {FlexWrapper} from "../../../../components/Styled/Components";
import {Button} from "../../../../components/Button/Button";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormField} from "../../../../components/Form/FormField";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const Login = () => {
    const onSubmit = (values: FormDataType) => {
        console.log(values)
    }

    return (
        <BlockWrapper title="Login">
            <LoginReduxForm onSubmit={onSubmit}/>
        </BlockWrapper>)
}

const LoginForm: FC<InjectedFormProps<FormDataType>> = (props) => {

    const {handleSubmit} = props

    return (
        <form onSubmit={handleSubmit}>
            <FlexWrapper $direction="column" $gap={20} $justify="center" $align="center">
                <p>Sign In</p>
                <Field name="login" component={FormField} type="text"/>
                <Field name="password" component={FormField} type="text"/>
                <FlexWrapper $gap={10} $justify="center" $align="center">
                    <Field name="rememberMe" component="input" type="checkbox"/>
                    <span>Remember Me</span>
                </FlexWrapper>
                <Button title="Sign In"/>
            </FlexWrapper>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
