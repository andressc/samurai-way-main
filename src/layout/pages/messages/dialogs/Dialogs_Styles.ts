import styled from "styled-components"
import {theme} from "../../../../styles/Theme"

const Dialogs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 3;
  background-color: ${theme.colors.secondaryBg};
  padding: 15px;
`

export const S = {
    Dialogs
}