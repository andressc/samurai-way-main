import styled from "styled-components"
import {theme} from "../../../../../styles/Theme"

export const Dialogs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 3;
  background-color: ${theme.colors.secondaryBg};
  padding: ${theme.indentation.padding};
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  max-height: 70vh;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`