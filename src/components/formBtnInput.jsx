import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import "emoji-mart/css/emoji-mart.css"
import { Picker } from "emoji-mart"
import GifPicker from "react-giphy-picker"
import Image from "../../assets/image.inline.svg"
import Gif from "../../assets/Gif.inline.svg"
import Emoji from "../../assets/happy.inline.svg"

const FormBtnInput = props => {
  const {
    openPicker,
    addEmojiComment,
    addGifComment,
    addImgComment,
    emojiPickerOpened,
    gifPickerOpened,
    imgPicker,
  } = props
  return (
    <Container>
      <MediaBtnContainer>
        <BtnContainer onClick={e => openPicker("img")}>
          {" "}
          <Image />
          <ImgInputBtn type="file" onChange={e => addImgComment(e)} />
        </BtnContainer>
        <BtnContainer onClick={e => openPicker("gif")}>
          {" "}
          <Gif />
        </BtnContainer>
        <BtnContainer onClick={e => openPicker("emoji")}>
          {" "}
          <Emoji />
        </BtnContainer>
        <GifModalWrapper
          emojiPickerOpened={emojiPickerOpened}
          gifPickerOpened={gifPickerOpened}
          imgPicker={imgPicker}
        >
          <GifPicker
            onSelected={e => addGifComment(e.original.url)}
            modal={true}
          />{" "}
        </GifModalWrapper>{" "}
        <EmojiModalWrapper
          emojiPickerOpened={emojiPickerOpened}
          gifPickerOpened={gifPickerOpened}
          imgPicker={imgPicker}
        >
          {" "}
          <Picker onSelect={emoji => addEmojiComment(emoji.native)} />{" "}
        </EmojiModalWrapper>{" "}
      </MediaBtnContainer>
      <ReplyBtnContainer>
        <RplBtn>Reply</RplBtn>
      </ReplyBtnContainer>
    </Container>
  )
}
FormBtnInput.propTypes = {
  openPicker: PropTypes.func,
  addEmojiComment: PropTypes.func,
  addGifComment: PropTypes.func,
  addImgComment: PropTypes.func,
  emojiPickerOpened: PropTypes.bool,
  gifPickerOpened: PropTypes.bool,
  imgPicker: PropTypes.bool,
}
const Container = styled.div`
  // background: yellow;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 0 0 25px 25px;
  width: 100%;
  height: auto;
  min-height: 6.3vmin;
`
const MediaBtnContainer = styled.div`
  background: white;
  margin: 0 0 0 6vmin;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  width: 50%;
  height: auto;
  min-height: 6vmin;
  & div {
    margin-right: 3vmin;
  }
`
const BtnContainer = styled.div`
  // background: green;
  margin: 0;
  padding: 0.8vmin;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  width: 4vmin;
  height: 4vmin;
  &:hover {
    background: #1da0f22d;
  }
`
const ReplyBtnContainer = styled.div`
  // background: red;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  width: 33.5%;
  height: auto;
  min-height: 6vmin;
`
const RplBtn = styled.div`
  background: #1da1f2;
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 80%;
  font-weight: bold;
  margin: 0;
  padding: 0.8vmin;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  width: 8vmin;
  height: 4vmin;
  &:hover {
    background: #0c97ee;
  }
`
const ImgInputBtn = styled.input`
  opacity: 0;
  // background: red;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  border-radius: 50%;
  border: none;
  width: 4vmin;
  height: 4vmin;
`
const GifModalWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: ${props =>
    !props.emojiPickerOpened && props.gifPickerOpened && !props.imgPicker
      ? "flex"
      : "none"};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 3vmin;
  left: 21.5vw;
  min-width: 21vw;
  min-height: 30vh;
  width: auto;
  height: auto;
`
const EmojiModalWrapper = styled.div`
  display: ${props =>
    props.emojiPickerOpened && !props.gifPickerOpened && !props.imgPicker
      ? "flex"
      : "none"};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 17vmin;
  left: 20vw;
  min-width: 60vw;
  min-height: 20vmin;
  width: auto;
  height: auto;
`

export default FormBtnInput
