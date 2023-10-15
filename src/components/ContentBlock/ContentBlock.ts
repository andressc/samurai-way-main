import styled from "styled-components"
import {theme} from "../../styles/Theme"

export type ChatType = "Left" | "Right"

type GroupPropsType = {
    size?: number
    hover?: boolean
    active?: boolean
    chat? : ChatType
}
export const ContentBlock = styled.div<GroupPropsType>`
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
  z-index: 1000;
  background-color: ${props => props.active ? theme.colors.quaternaryBg : theme.colors.tripleBg};
  color: ${theme.colors.tripleFont};
  padding: 15px;
  
  ${props => props.size && 'width:' + props.size + '%'};

  ${props => props.hover && `
  &:hover {
    background-color: ${theme.colors.quaternaryBg};
    cursor: pointer;
    transition: .3s;
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