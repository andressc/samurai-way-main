import React, {FC} from "react"
import spinner from "../../assets/img/spinner.svg"
import {FlexWrapper} from "../Styled/Components"

export const Preloader: FC = () => {
    return (
        <FlexWrapper $gap={10} $justify="center">
            <img src={spinner} alt="spinner"/>
        </FlexWrapper>
    )
}

export default Preloader