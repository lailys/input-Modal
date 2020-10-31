import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

function modalImage({ images, removePic }) {
  return (
    <Wrapper length={images.length}>
      {" "}
      {images.map((img, i) => (
        <EachImg key={i} id={i}>
          <RemoveBtn onClick={e => removePic(e, i)}> x </RemoveBtn>{" "}
          <Image src={img} />{" "}
        </EachImg>
      ))}{" "}
    </Wrapper>
  )
}
modalImage.propTypes = {
  images: PropTypes.array,
  removePic: PropTypes.func,
}
const Wrapper = styled.div`
  margin: 0;
  padding: ${props => (props.length > 0 ? "1vh" : "0")};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  resize: none;
  border-radius: 4px;
  overflow-x: hidden;
  overflow-y: scroll;
  // border: solid 0.1px #80808033;
  width: 72vw;
  min-height: 0vh;
  height: auto;
`
const EachImg = styled.div`
  margin: 0.7vh;
  padding: 0;
  position: relative;
  border-radius: 5px;
  width: 10.5vw;
  height: 10.5vw;
`
const RemoveBtn = styled.button`
  background: #d8bfd88f;
  color: #2e2727cc;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border: none;
  border-radius: 50%;
  width: 1vw;
  height: 1vw;
`
const Image = styled.img`
  margin: 0;
  padding: 0;
  border-radius: 5px;
  width: 10.5vw;
  height: 10.5vw;
`

export default modalImage
