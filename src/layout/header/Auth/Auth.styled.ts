import styled from "styled-components"
import {theme} from "../../../styles/Theme"

export const ProfilePhoto = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
`

export const ProfileName = styled.span`
  color: ${theme.colors.tripleFont};
`