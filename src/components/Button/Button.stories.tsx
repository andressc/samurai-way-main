import { action } from "@storybook/addon-actions"
import newsIcon from "../../assets/icons/news.svg"
import {Button} from "./Button"
import {Meta, StoryObj} from "@storybook/react"

const meta: Meta<typeof Button> = {
    component: Button,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `### Компонент кнопка`,
            },
        },
    },
}

const onClickHandler = action('onClick')

export default meta

type Story = StoryObj<typeof Button>;


export const StandardButton: Story = {
    args: {
        icon: newsIcon,
        title: "StandardButton",
        onClick: onClickHandler
    },
    parameters: {
        docs: {
            description: {
                story: `
\`\`\`

import {Button} from "../Button/Button"
\`\`\``
            },
        },
    },
}