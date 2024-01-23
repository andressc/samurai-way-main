import React, {FC, InputHTMLAttributes} from 'react';
import * as S from "../Form/Form.styled";
import {WrappedFieldProps} from "redux-form";

type PropsType = InputHTMLAttributes<HTMLInputElement> & WrappedFieldProps

export const FormField: FC<PropsType> = ({
                                             input,
                                             type,
                                             meta: {touched, error},
                                             ...other
                                         }
) => {
    return <S.PostFormField type={type}{...input}{...other}/>
}