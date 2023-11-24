import styled from "styled-components"
import {theme} from "../../styles/Theme"
import icon from "../../assets/icons/view.svg"

type FlexWrapperPropsType = {
    $direction?: "row" | "column"
    $justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"
    $align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch"
    $wrap?: "nowrap" | "wrap" | "wrap-reverse"
    $gap?: number
}

export type ChatType = "Left" | "Right"

type ContentBlockPropsType = {
    size?: number
    $hover?: boolean
    $active?: boolean
    $chat?: ChatType
}

export const AppWrapper = styled.div`
  display: grid;

  grid-template-columns: 2fr 10fr;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  width: 1200px;
  margin: 0 auto;
  gap: 20px;
`

export const ContentWrapper = styled.main`
  grid-area: content;
  background-color: ${theme.colors.primaryBg};
  padding: ${theme.indentation.padding};
`

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.$direction || "row"};
  justify-content: ${props => props.$justify || "flex-start"};
  align-items: ${props => props.$align || "stretch"};
  flex-wrap: ${props => props.$wrap || "nowrap"};
  gap: ${props => `${props.$gap}px` || "0px"};
  height: 100%;
`

export const ContentBlock = styled.div<ContentBlockPropsType>`
  display: flex;
  flex-direction: column;

  gap: ${theme.indentation.gap};
  position: relative;
  z-index: 1000;
  background-color: ${props => props.$active ? theme.colors.quaternaryBg : theme.colors.tripleBg};
  color: ${theme.colors.tripleFont};
  padding: ${theme.indentation.padding};

  ${props => props.size && "width:" + props.size + "%"};

  ${props => props.$hover && `
  &:hover {
    background-color: ${theme.colors.quaternaryBg};
    cursor: pointer;
    transition: ${theme.animations.transition};
  }
  `};

  ${props => props.$chat === "Left" && `
  &:before {
    content: '';
    position: absolute;
    display: inline-block;
    border: 10px solid transparent;
    border-top: 10px solid ${theme.colors.tripleBg};
    transform:rotate(-45deg);
    left: -10px;
    bottom: -10px;
  }
  `};

  ${props => props.$chat === "Right" && `
  &:before {
    content: '';
    position: absolute;
    display: inline-block;
    border: 10px solid transparent;
    border-top: 10px solid ${theme.colors.tripleBg};
    transform:rotate(45deg);
    right: -10px;
    bottom: -10px;
  }
  `};
`
ContentBlock.displayName = 'C.ContentBlock';

export const Views = styled.span`
  position: relative;
  padding-left: 25px;

  &:before {
    content: "";
    width: 20px;
    height: 20px;
    background-image: url(${icon});
    background-repeat: no-repeat;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 2px;
    fill: red
  }
`

export const ItemTitle = styled.h2``

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 10px;
`