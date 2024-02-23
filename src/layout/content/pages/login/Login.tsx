import React, {FC} from "react"
import {BlockWrapper} from "../../../../components/BlockWrapper/BlockWrapper"
import {FlexWrapper} from "../../../../components/Styled/Components";
import {Button} from "../../../../components/Button/Button";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormField} from "../../../../components/Form/FormField";
import {email, maxLength20, requiredField} from "../../../../utils/validators";
import {LoginPayloadType} from "../../../../api/profile-api";
import {PropsType} from "./LoginContainer";
import {Redirect} from "react-router-dom";
import {ErrorField} from "../../../../components/Form/ErrorField";

type PropsCaptcha = {
    captcha: string | null
}

export const Login: FC<PropsType> = ({loginTC, authUserId, captcha}) => {

    const onSubmit = (values: LoginPayloadType) => {
        loginTC(values)
    }

    if (authUserId) return <Redirect to="/"/>

    return (
        <BlockWrapper title="Login">
            <LoginReduxForm onSubmit={onSubmit} captcha={captcha}/>
        </BlockWrapper>)
}

const LoginForm: FC<PropsCaptcha & InjectedFormProps<LoginPayloadType, PropsCaptcha>> = (props) => {

    const {handleSubmit, error, captcha} = props

    return (
        <form onSubmit={handleSubmit}>
            <FlexWrapper $direction="column" $gap={20} $justify="center" $align="center">
                <p>Sign In</p>
                <Field name="email" component={FormField} type="text" placeholder="email"
                       validate={[requiredField, maxLength20, email]}/>
                <Field name="password" component={FormField} type="password" placeholder="password"
                       validate={[requiredField, maxLength20]}/>
                <FlexWrapper $gap={10} $justify="center" $align="center">
                    <Field name="rememberMe" component="input" type="checkbox"/>
                    <span>Remember Me</span>
                </FlexWrapper>
                {captcha && <>
                    <Field name="captcha"
                           component={FormField}
                           placeholder="captcha"
                           validate={[requiredField, maxLength20]}
                    />
                    <img src={captcha} alt="captcha" style={{width: "150px"}}/>
                </>}
                <Button title="Sign In"/>
                {error && <ErrorField error={error}/>}
            </FlexWrapper>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginPayloadType, PropsCaptcha>({
    form: 'login',
})(LoginForm)
