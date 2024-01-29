import React, {FC} from "react"
import {BlockWrapper} from "../../../../components/BlockWrapper/BlockWrapper"
import {FlexWrapper} from "../../../../components/Styled/Components";
import {Button} from "../../../../components/Button/Button";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormField} from "../../../../components/Form/FormField";
import {email, maxLength20, requiredField} from "../../../../utils/validators";
import {LoginPayloadType} from "../../../../api/profile-api";
import {PropsType} from "./LoginContainer";

export const Login: FC<PropsType> = ({loginTC}) => {

    const onSubmit = (values: LoginPayloadType) => {
        loginTC(values)
    }

    return (
        <BlockWrapper title="Login">
            <LoginReduxForm onSubmit={onSubmit}/>
        </BlockWrapper>)
}

const LoginForm: FC<InjectedFormProps<LoginPayloadType>> = (props) => {

    const {handleSubmit} = props

    return (
        <form onSubmit={handleSubmit}>
            <FlexWrapper $direction="column" $gap={20} $justify="center" $align="center">
                <p>Sign In</p>
                <Field name="email" component={FormField} type="text" placeholder="email"
                       validate={[requiredField, maxLength20, email]}/>
                <Field name="password" component={FormField} type="text" placeholder="password"
                       validate={[requiredField, maxLength20]}/>
                <FlexWrapper $gap={10} $justify="center" $align="center">
                    <Field name="rememberMe" component="input" type="checkbox"/>
                    <span>Remember Me</span>
                </FlexWrapper>
                <Button title="Sign In"/>
            </FlexWrapper>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginPayloadType>({form: 'login'})(LoginForm)
