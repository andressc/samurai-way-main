import {SimpleCell} from "./SimpleCell"
import {Meta, StoryObj} from "@storybook/react"

// export default {
//     component: SimpleCell,
// }

const meta: Meta<typeof SimpleCell> = {
    component: SimpleCell,
}


export default meta
type Story = StoryObj<typeof SimpleCell>;

export const Cell: Story = {
    tags: ['autodocs'],
    args: {
        image: "https://i.pinimg.com/736x/b0/2d/a7/b02da7cbdb25c5e1f1ae9f4e0f73903b.jpg",
        title: "Inna Morozova",
        subtitle: "12.05.1989"
    },
}

export const CellLegacy = () => {
    return (
        <SimpleCell image="https://i.pinimg.com/736x/b0/2d/a7/b02da7cbdb25c5e1f1ae9f4e0f73903b.jpg"
                    title="Inna Morozova"
                    subtitle="12.05.1989"
        />
    )
}