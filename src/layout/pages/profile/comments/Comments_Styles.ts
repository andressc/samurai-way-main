import {theme} from "../../../../styles/Theme"
import styled from "styled-components"

const Comments = styled.div`
  display: flex;
  flex-direction: column;
  gap:20px;
  margin-top: 20px;
`

const Comment = styled.div`
  display: flex;
  gap: 30px;
  background-color: ${theme.colors.tripleBg};
  color: ${theme.colors.tripleFont};
  padding: 15px;
  
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`

export const S = {
    Comments,
    Comment
}