import styled from "styled-components";

type FlexWrapperPropsType = {
    flexDirection?: "row" | "column"
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"
    alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch"
    wrap?: "nowrap" | "wrap" | "wrap-reverse"
    gap?: number
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.flexDirection || "row"};
  justify-content: ${props => props.justifyContent || "flex-start"};
  align-items: ${props => props.alignItems || "stretch"};
  flex-wrap: ${props => props.wrap || "nowrap"};
  gap: ${props => `${props.gap}px` || "0px"};
  height: 100%;
`