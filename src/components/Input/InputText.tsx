import React, {FC} from 'react';
import * as S from "./Input.styled"

type PropsType = {
    value: string
}
export const InputText: FC<PropsType> = ({value}) => {
    return (
        <S.InputText value={value}/>
    );
};
