import React, {FC, TextareaHTMLAttributes} from 'react';
import * as S from "../Form/Form.styled";
import {WrappedFieldProps} from "redux-form";
import {FormFieldComponent} from "./FormFieldComponent";

type PropsType = TextareaHTMLAttributes<HTMLTextAreaElement> & WrappedFieldProps

export const FormTextArea: FC<PropsType> = ({
                                                input,
                                                meta: {touched, error, warning},
                                                ...other
                                            }
) => {
    return <FormFieldComponent touched={touched} error={error} warning={warning}>
        <S.PostFormField as="textarea" style={{width: "100%"}} {...input}{...other}/>
    </FormFieldComponent>
}