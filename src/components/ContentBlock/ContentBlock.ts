import styled from "styled-components"
import {theme} from "../../styles/Theme"

export type ChatType = "Left" | "Right"

type ContentBlockPropsType = {
    size?: number
    $hover?: boolean
    $active?: boolean
    chat?: ChatType
    $row?: boolean
}
export const ContentBlock = styled.div<ContentBlockPropsType>`
  display: flex;
  flex-direction: ${props => props.$row ? "row" : "column"};

  ${props => props.$row && `
      justify-content: space-between;
      align-items: center;`
  }

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

  ${props => props.chat === "Left" && `
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

  ${props => props.chat === "Right" && `
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