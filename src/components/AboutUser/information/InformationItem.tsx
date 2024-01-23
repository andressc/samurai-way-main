import React, {ChangeEvent, Component} from "react"
import * as S from "./Information.styled"

type InformationItemPropsType = {
    title: string
    aboutMe: string
    setStatus: (status: string) => void
}

export class InformationItem extends Component<InformationItemPropsType> {

    state = {isEdit: false, status: this.props.aboutMe}

    onDoubleClickHandler() {
        this.setState({isEdit: true})
    }

    onBlurHandler() {
        this.setState({isEdit: false})
        this.props.setStatus(this.state.status)
    }

    onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        this.setState({status: e.currentTarget.value})
    }


    render() {
        return (
            <S.InformationItem>
                <div onDoubleClick={this.onDoubleClickHandler.bind(this)}><span
                    style={{fontWeight: 700}}>{this.props.title}:</span> {this.state.isEdit ?
                    <input value={this.state.status} onBlur={this.onBlurHandler.bind(this)} autoFocus={true}
                           onChange={this.onChangeHandler.bind(this)}/> : <span>{this.props.aboutMe}</span>}</div>
            </S.InformationItem>
        )
    }
}