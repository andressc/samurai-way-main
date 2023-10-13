import styled from "styled-components"
import {theme} from "../../../styles/Theme"

const Content = styled.main`
  display: flex;
  flex-direction: column;
  gap: 15px;
  grid-area: content;
  background-color:  ${theme.colors.primaryBg};
  padding: 15px;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    background-position: right;
  }
`
const AboutContainer = styled.div`
  display: flex;
  gap: 15px;
  
  img {
    width: 150px;
    height: 150px;
  }
`

const UserName = styled.h1``

const Information = styled.span``

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

const MyPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const FieldPost = styled.input`
  width: 100%;
  background-color: ${theme.colors.secondaryBg};
  border: 0;
  padding: 7px 15px;

  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: ${theme.colors.primaryFont};

  &::placeholder {
    color: ${theme.colors.secondaryFont};
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
  }
  
  resize: none;
  height: 80px;
`

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
    Content,
    UserName,
    Information,
    InformationContainer,
    AboutContainer,
    FieldPost,
    MyPostContainer,
    Comments,
    Comment
}