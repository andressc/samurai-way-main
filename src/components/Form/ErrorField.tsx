import React, {FC} from 'react';
import * as S from './Form.styled'

type PropsType = {
    error: string
}
export const ErrorField: FC<PropsType> = ({error}) => {
    return (
        <S.ErrorField>{error}</S.ErrorField>
    )
}