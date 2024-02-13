import React, {ChangeEvent, FC, useState} from "react"
import * as S from "./Information.styled"

type InformationItemPropsType = {
    title: string
    aboutMe: string
    setStatus: (status: string) => void
}

export const InformationItem: FC<InformationItemPropsType> = ({title, aboutMe, setStatus}) => {

    const [isEdit, setIsEdit] = useState(false)
    const [inputStatus, setInputStatus] = useState("")


    /*componentDidUpdate(prevProps: Readonly<InformationItemPropsType>, prevState: Readonly<{}>, snapshot?: any) {
         if(prevProps.aboutMe !== this.props.aboutMe) {
             this.setState({status: this.props.aboutMe})
         }
     }*/

     const onDoubleClickHandler = () => {
         setIsEdit(true)
         setInputStatus(aboutMe)
     }

     const onBlurHandler = () => {
         setIsEdit(false)
         setStatus(inputStatus)
     }

     const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputStatus(e.currentTarget.value)
     }


    return (
        <S.InformationItem>
            <input type="checkbox"/>
            <div onDoubleClick={onDoubleClickHandler}><span
                style={{fontWeight: 700}}>{title}:</span> {isEdit ?
                <input value={inputStatus} onBlur={onBlurHandler} autoFocus={true}
                       onChange={onChangeHandler}/> : <span>{aboutMe}</span>}</div>
        </S.InformationItem>
    )
}