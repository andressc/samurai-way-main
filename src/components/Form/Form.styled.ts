import styled from "styled-components"
import {theme} from "../../styles/Theme"

export const PostForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.indentation.gap};
`

export const PostFormField = styled.input`
    max-width: 100%;
    background-color: #f3f3f3;
    border: 0;
    padding: 7px ${theme.indentation.padding};

    font-family: "Poppins", sans-serif;
    font-weight: 400;
    color: ${theme.colors.primaryFont};
    border-bottom: 1px solid ${theme.colors.primaryFont};

    &::placeholder {
        color: ${theme.colors.secondaryFont};
        text-transform: capitalize;
    }

    &:focus-visible {
        outline: 1px solid ${theme.colors.borderColor};
    }

    resize: none;
    max-height: 80px;
`