import {SimpleCell} from "./SimpleCell"
import {Meta, StoryObj} from "@storybook/react"
import * as C from "../Styled/Components"

// export default {
//     component: SimpleCell,
// }

const meta: Meta<typeof SimpleCell> = {
    component: SimpleCell,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `### Компонент клетка пользователя`,
            },
        },
    },
}


export default meta

type Story = StoryObj<typeof SimpleCell>;


export const Cell: Story = {
    args: {
        image: "https://i.pinimg.com/736x/b0/2d/a7/b02da7cbdb25c5e1f1ae9f4e0f73903b.jpg",
        title: "Inna Morozova",
        subtitle: "12.05.1989"
    },
    parameters: {
        docs: {
            description: {
                story: `
\`\`\`

import {SimpleCell} from "../SimpleCell/SimpleCell"
\`\`\``
            },
        },
    },
}

export const CellInWrapper: Story = {
    render: (args) => (
        <C.ContentBlock>
            <SimpleCell {...args}/>
        </C.ContentBlock>
    ),
    args: {...Cell.args},
    parameters: {
        docs: {
            description: {
                story: `
\`\`\`
import {SimpleCell} from "../SimpleCell/SimpleCell"
import * as C from "../Styled/Components";
\`\`\``
            },
        },
    },
}