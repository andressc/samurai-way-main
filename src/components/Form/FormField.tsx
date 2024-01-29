import React, {FC, InputHTMLAttributes} from 'react';
import * as S from "../Form/Form.styled";
import {WrappedFieldProps} from "redux-form";
import {FormFieldComponent} from "./FormFieldComponent";

type PropsType = InputHTMLAttributes<HTMLInputElement> & WrappedFieldProps

export const FormField: FC<PropsType> = ({
                                             input,
                                             type,
                                             meta: {touched, error, warning},
                                             ...other
                                         }
) => {
    return <FormFieldComponent touched={touched} error={error} warning={warning}>
        <S.PostFormField type={type}{...input}{...other}/>
    </FormFieldComponent>
}