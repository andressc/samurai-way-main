import React, {ChangeEvent, FormEvent, useState} from "react"
import newsIcon from "../../../../../../assets/icons/news.svg"
import {Button} from "../../../../../../components/Button/Button"
import * as S from "./PostForm.styled"

type PropsType = {
    callBack: (userText: string) => void
}
export const PostForm: React.FC<PropsType> = ({callBack}) => {

    const [newPost, setNewPost] = useState<string>("")

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewPost(e.currentTarget.value)
    }
    const addNewPost = () => {
        callBack(newPost)
        setNewPost("")
    }

    return (
        <S.PostForm onSubmit={handleSubmit}>
            <S.PostFormField as="textarea" placeholder="your news..." value={newPost} onChange={changeHandler}/>
            <Button icon={newsIcon} title="publish post" callBack={addNewPost}/>
        </S.PostForm>
    )
}