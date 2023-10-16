import styled from "styled-components"
import {theme} from "../../../../styles/Theme"

const Friends = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.indentation.gap};
  flex: 1;
  overflow-y: scroll;
  height: 70vh;
`

export const S = {
    Friends,
}