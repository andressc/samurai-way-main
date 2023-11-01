import styled from "styled-components"
import {theme} from "../../styles/Theme"

export type TextColorType = "dark" | "light"

type PropsType = {
    textColor: TextColorType
}
export const SpanTag = styled.span<PropsType>`
  color: ${props => props.color === "light" ? theme.colors.primaryFont : theme.colors.secondaryFont};
`