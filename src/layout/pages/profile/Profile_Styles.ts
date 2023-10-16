import styled from "styled-components"
import {theme} from "../../../styles/Theme"

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.indentation.gap};
`

const ProfileCover = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

export const S = {
    Profile,
    ProfileCover,
}