import styled from "styled-components"
import {theme} from "../../styles/Theme"

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.indentation.gap};
`

export const S = {
    Posts,
}