import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

function MediaContainer(props) {
  const { media, text, removeMedia } = props
  return (
    <Container>
      {" "}
      {Array.isArray(media) && media.length > 0 ? (
        media.map((img, i) => (
          <EachImg key={i} id={i}>
            <RemoveBtn onClick={e => removeMedia(e, i)}> x </RemoveBtn>{" "}
            <Image src={img} />{" "}
          </EachImg>
        ))
      ) : (
        <></>
      )}
    </Container>
  )
}

MediaContainer.propTypes = {
  media: PropTypes.array,
  removeMedia: PropTypes.func,
}
const Container = styled.div`
  // background: pink;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 2px;
  width: 56.2vmin;
  max-height: 12vmin;
  min-height: 0;
  height: auto;
`
const EachImg = styled.div`
  // background: yellow;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 5px;
  width: 12vmin;
  height: 12vmin;
`
const RemoveBtn = styled.button`
  background: #d8bfd88f;
  color: #007dc2;
  font-family: "Roboto", sans-serif;
  font-size: 50%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10%;
  left: 10%;
  border: none;
  border-radius: 50%;
  width: 2vmin;
  height: 2vmin;
  &:hover {
    background: #007dc2;
    color: white;
  }
`
const Image = styled.img`
  margin: 0;
  padding: 0;
  border-radius: 5px;
  width: 80%;
  height: 80%;
`
export default MediaContainer
