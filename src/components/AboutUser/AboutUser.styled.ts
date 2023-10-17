import styled from "styled-components"
import {theme} from "../../styles/Theme"

export const UserName = styled.h1``

export const AboutUser = styled.div`
  display: flex;
  gap: ${theme.indentation.gap};
  
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`