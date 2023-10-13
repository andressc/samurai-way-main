import styled from "styled-components"

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
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