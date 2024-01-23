import React, {Component} from "react"
import * as S from "./Information.styled"

type InformationItemPropsType = {
    title: string
    aboutMe: string
}

export class InformationItem extends Component<InformationItemPropsType> {

    state = {isEdit: false}

    onDoubleClickHandler() {
        this.setState({isEdit: true})
    }

    onBlurHandler() {
        this.setState({isEdit: false})
    }

    render() {
        return (
            <S.InformationItem>
                <><span style={{fontWeight: 700}}>{this.props.title}:</span> {this.state.isEdit ?
                    <input value={this.props.aboutMe} onBlur={this.onBlurHandler.bind(this)} autoFocus={true}/> : <span onDoubleClick={this.onDoubleClickHandler.bind(this)}>{this.props.aboutMe}</span>}</>
            </S.InformationItem>
        )
    }
}