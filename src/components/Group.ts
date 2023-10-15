import styled from "styled-components"
import {theme} from "../styles/Theme"

type GroupPropsType = {
    size?: number
    hover?: boolean
}
export const Group = styled.div<GroupPropsType>`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: ${theme.colors.tripleBg};
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
  
`