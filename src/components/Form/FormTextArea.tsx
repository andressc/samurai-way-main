import React, {FC, TextareaHTMLAttributes} from 'react';
import * as S from "../Form/Form.styled";
import {WrappedFieldProps} from "redux-form";

type PropsType = TextareaHTMLAttributes<HTMLTextAreaElement> & WrappedFieldProps

export const FormTextArea: FC<PropsType> = ({
                                             input,
                                             meta: {touched, error},
                                             ...other
                                         }
) => {
    return <S.PostFormField as="textarea" style={{width: "100%"}} {...input}{...other}/>
}