import styled from "styled-components"
import {theme} from "../../../../styles/Theme"

const Dialogs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 3;
  background-color: ${theme.colors.secondaryBg};
  padding: ${theme.indentation.padding};
  overflow-y: scroll;
  height: 70vh;
`

export const S = {
    Dialogs
}