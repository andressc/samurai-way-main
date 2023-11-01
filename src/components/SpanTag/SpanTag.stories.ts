import {Meta, StoryObj} from "@storybook/react"
import {SpanTag} from "./SpanTag"

const meta: Meta<typeof SpanTag> = {
    component: SpanTag,
}

export default meta
type Story = StoryObj<typeof SpanTag>;

export const Span: Story = {
    args: {
        textColor: "light",
        text: "test text span"
    },
}