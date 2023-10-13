import styled from "styled-components"
import {theme} from "../../../../styles/Theme"

const Post = styled.div`
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

export const S = {
    Post,
    FieldPost,
}