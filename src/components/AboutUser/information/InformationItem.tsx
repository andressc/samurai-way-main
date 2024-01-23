import React, {ChangeEvent, Component} from "react"
import * as S from "./Information.styled"

type InformationItemPropsType = {
    title: string
    aboutMe: string
    setStatus: (status: string) => void
}

export class InformationItem extends Component<InformationItemPropsType> {

    componentDidUpdate(prevProps: Readonly<InformationItemPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.aboutMe !== this.props.aboutMe) {
            this.setState({status: this.props.aboutMe})
        }
    }

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
                           onChange={this.onChangeHandler.bind(this)}/> : <span>{this.state.status}</span>}</div>
            </S.InformationItem>
        )
    }
}