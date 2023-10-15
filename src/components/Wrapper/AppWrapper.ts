import styled from "styled-components"

export const AppWrapper = styled.div`
  display: grid;

  grid-template-columns: 2fr 10fr;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  width: 1200px;
  margin: 0 auto;
  gap: 20px;
`