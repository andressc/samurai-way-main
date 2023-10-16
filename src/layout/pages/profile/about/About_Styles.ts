import styled from "styled-components"
import {theme} from "../../../../styles/Theme"

const UserName = styled.h1``

const About = styled.div`
  display: flex;
  gap: ${theme.indentation.gap};
  
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`

export const S = {
    About,
    UserName,
}