import styled from "styled-components"
import {theme} from "../../../../../styles/Theme"

export const Friends = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.indentation.gap};
  flex: 1;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  height: 70vh;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`