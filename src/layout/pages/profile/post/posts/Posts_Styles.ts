import {theme} from "../../../../../styles/Theme"
import styled from "styled-components"

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`

const Post = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: ${theme.colors.tripleBg};
  color: ${theme.colors.tripleFont};
  padding: 15px;
  transition: .3s;
  cursor: pointer;

  /*&:hover {
    background-color: ${theme.colors.quaternaryBg};
  }*/

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`

export const S = {
    Posts,
    Post,
}