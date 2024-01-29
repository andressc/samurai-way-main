import React, {FC, ReactNode} from 'react';
import {ErrorField} from "./ErrorField";

type PropsType = {
    touched: boolean
    error: any
    warning: any
    children: ReactNode
}
export const FormFieldComponent: FC<PropsType> = ({
                                                      children,
                                                      touched, error, warning
                                                  }) => {
    return (
        <>
            {children}
            {touched && ((error && <ErrorField error={error}/>) || (warning && <span>{warning}</span>))}
        </>
    );
};