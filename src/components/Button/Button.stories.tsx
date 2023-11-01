import { action } from "@storybook/addon-actions"
import newsIcon from "../../assets/icons/news.svg"

import {Button} from "./Button"

export default {
    component: Button,
}

const onClickHandler = action('onClick')

export const ButtonOnClick = () => {
    return (
        <Button icon={newsIcon} title="ButtonOnClick" onClick={onClickHandler}/>
    )
}