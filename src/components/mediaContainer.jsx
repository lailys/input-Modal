import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

function MediaContainer(props) {
  const { media, text, removeMedia, video, mainMediaContainer } = props
  console.log(video, ">>>>>>>??????????::::")
  return (
    <Container mainMediaContainer={mainMediaContainer}>
      {" "}
      {Array.isArray(media) && media.length > 0 ? (
        media.map((img, i) => (
          <EachImg key={i} id={i}>
            {!mainMediaContainer ? (
              <RemoveBtn onClick={e => removeMedia(e, i)}> x </RemoveBtn>
            ) : (
              <></>
            )}{" "}
            <Image src={img} />{" "}
          </EachImg>
        ))
      ) : Array.isArray(media) && media.length < 1 && video !== "" ? (
        <Video
          src={video}
          frameborder="0"
          allowfullscreen
          mainMediaContainer={mainMediaContainer}
        />
      ) : (
        <></>
      )}
    </Container>
  )
}

MediaContainer.propTypes = {
  media: PropTypes.array,
  removeMedia: PropTypes.func,
  video: PropTypes.string,
  mainMediaContainer: PropTypes.bool,
}
const Container = styled.div`
  // background: pink;
  margin: ${props => (props.mainMediaContainer ? "0" : "0 0 0 4vmin")};
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 2px;
  width: 48.5vmin;
  max-height: 20vmin;
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
const Video = styled.iframe`
  margin: ${props => (props.mainMediaContainer ? "0" : "0 0 0 6vmin")};
  padding: 0;
  border: none;
  border-radius: 5px;
  width: 46.2vmin;
  height: 20vmin;
`
export default MediaContainer
