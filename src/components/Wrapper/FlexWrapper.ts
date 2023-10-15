import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: "row" | "column"
    justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"
    align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch"
    wrap?: "nowrap" | "wrap" | "wrap-reverse"
    gap?: number
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "stretch"};
  flex-wrap: ${props => props.wrap || "nowrap"};
  gap: ${props => `${props.gap}px` || "0px"};
  height: 100%;
`