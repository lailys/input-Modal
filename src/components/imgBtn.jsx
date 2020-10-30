import React from "react"
import styled from "styled-components"
import Image from "../../assets/image.inline.svg"

const ImgBtn = () => {
  return (
    <Container>
      {" "}
      <Image />
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
export default ImgBtn
