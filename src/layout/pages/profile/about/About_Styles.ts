import styled from "styled-components"

const UserName = styled.h1``

const About = styled.div`
  display: flex;
  gap: 15px;
  
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