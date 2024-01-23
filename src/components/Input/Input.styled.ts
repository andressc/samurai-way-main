import styled from "styled-components"
import {theme} from "../../styles/Theme"

export const InputText = styled.input`
  height: 40px;
  width: 300px;
  cursor: pointer;
  font-size: 17px;
  color: ${theme.colors.primaryFont};
  padding: 10px;
  border: 1px solid ${theme.colors.primaryFont};

  &.${props => props.className} {
    background-color: ${theme.colors.quaternaryBg};
  }
`