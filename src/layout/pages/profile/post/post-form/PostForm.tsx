import React from "react"
import newsIcon from "../../../../../assets/icons/news.svg"
import {Button} from "../../../../../components/button/Button"
import { S } from "./PostForm_Styles"

export const PostForm: React.FC = () => {
    return (
        <S.PostForm>
            <S.PostFormField as="textarea" placeholder="your news..."/>
            <Button icon={newsIcon} title="publish post"/>
        </S.PostForm>
    )
}