import React from "react"
import styled from "styled-components"
import Gif from "../../assets/Gif.inline.svg"

const GifBtn = () => {
  return (
    <Container>
      {" "}
      <Gif />
    </Container>
  )
}
const Container = styled.div`
  // background: green;
  margin: 0;
  padding: 0.8vmin;
  border-radius: 50%;
  width: 4vmin;
  height: 4vmin;
  &:hover {
    background: #1da0f22d;
  }
`
export default GifBtn
