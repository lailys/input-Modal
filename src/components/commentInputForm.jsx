import React, { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import FormTextInput from "./formTextInput"
import FormBtnInput from "./formBtnInput"
import Form from "./form"
import { getVideoLinks } from "../../helper/helpers"
import MediaContainer from "./mediaContainer"

class CommentInputForm extends Component {
  constructor() {
    super()
    this.state = {
      text: "",
      images: [],
      gif: "",
      video: "",
      imgPicker: false,
      emojiPickerOpened: false,
      gifPickerOpened: false,
      gifLocked: false,
      imgLocked: false,
    }

    this.openPicker = this.openPicker.bind(this)
    this.addTxtComment = this.addTxtComment.bind(this)
    this.addImgComment = this.addImgComment.bind(this)
    this.addGifComment = this.addGifComment.bind(this)
    this.addEmojiComment = this.addEmojiComment.bind(this)
    this.removeMedia = this.removeMedia.bind(this)
    this.submitComment = this.submitComment.bind(this)
  }
  openPicker(icon) {
    try {
      this.setState(prevState => ({
        emojiPickerOpened:
          icon === "emoji" ? !prevState.emojiPickerOpened : false,
        gifPickerOpened: icon === "gif" ? !prevState.gifPickerOpened : false,
        imgPicker: icon === "img" ? !prevState.imgPicker : false,
      }))
    } catch (error) {
      console.log(
        error,
        "This is the error from openPicker method in CommentInputForm component"
      )
    }
  }
  addTxtComment(text) {
    console.log(text, "text.....++++++..", getVideoLinks(text))
    try {
      this.setState(
        {
          video: getVideoLinks(text),
          text,
          emojiPickerOpened: false,
          gifPickerOpened: false,
          imgPicker: false,
        },
        () => console.log(this.state.video, "this.state.video...........")
      )
    } catch (error) {
      console.log(
        error,
        "This is the error from addTxtComment method in CommentInputForm component"
      )
    }
  }
  addImgComment(img) {
    console.log(img, "img.......")
    try {
      this.setState({
        images:
          this.state.gif === "" &&
          Array.isArray(this.state.images) &&
          this.state.images.length < 6
            ? [...this.state.images, URL.createObjectURL(img.target.files[0])]
            : [...this.state.images],
        gifLocked:
          this.state.gif === "" &&
          Array.isArray(this.state.images) &&
          this.state.images.length < 5
            ? true
            : false,
        imgLocked:
          Array.isArray(this.state.images) && this.state.images.length < 5
            ? false
            : true,
        emojiPickerOpened: false,
        gifPickerOpened: false,
        imgPicker: false,
      })
    } catch (error) {
      console.log(
        error,
        "This is the error from addImgComment method in CommentInputForm component"
      )
    }
  }
  addGifComment(gif) {
    console.log(gif, "Gif.......")
    try {
      this.setState({
        gif:
          Array.isArray(this.state.images) &&
          this.state.images.length < 1 &&
          this.state.gif === ""
            ? gif
            : "",
        imgLocked:
          gif !== "" &&
          Array.isArray(this.state.images) &&
          this.state.images.length < 1
            ? true
            : false,
        gifLocked: gif !== "" ? true : false,
        emojiPickerOpened: false,
        gifPickerOpened: false,
        imgPicker: false,
      })
    } catch (error) {
      console.log(
        error,
        "This is the error from addGifComment method in CommentInputForm component"
      )
    }
  }
  addEmojiComment(emoji) {
    console.log(emoji, "emoji.......")
    try {
      this.setState(
        prevState => ({
          text: prevState.text + emoji,
          emojiPickerOpened: false,
          gifPickerOpened: false,
          imgPicker: false,
        }),
        () =>
          (document.getElementById(
            "editable-comment-area"
          ).textContent = this.state.text)
      )
    } catch (error) {
      console.log(
        error,
        "This is the error from addEmoji method in CommentInputForm component"
      )
    }
  }
  submitComment() {
    try {
      this.setState(
        {
          text: "",
          images: [],
          gif: "",
          emojiPickerOpened: false,
          gifPickerOpened: false,
          imgPicker: false,
        },
        () =>
          (document.getElementById(
            "editable-comment-area"
          ).textContent = this.state.text)
      )
    } catch (error) {
      console.log(
        error,
        "This is the error from submitComment method in CommentInputForm component"
      )
    }
  }
  removeMedia = (e, i) => {
    e.preventDefault()
    try {
      this.setState({
        gif: "",
        images: this.state.images.filter((img, j) => i !== j),
        gifLocked:
          Array.isArray(this.state.images) && this.state.images.length > 1
            ? true
            : false,
        imgLocked: false,
      })
    } catch (error) {
      console.log(
        error,
        "This is the error from removePic method in CommentInputModal component"
      )
    }
  }

  render() {
    const { mainReply } = this.props
    const {
      addTxtComment,
      addEmojiComment,
      addGifComment,
      addImgComment,
      removeMedia,
      submitComment,
    } = this
    const {
      emojiPickerOpened,
      gifPickerOpened,
      imgPicker,
      text,
      images,
      gif,
      video,
      gifLocked,
      imgLocked,
    } = this.state
    return (
      <Form text={text} images={images} git={gif} submitComment={submitComment}>
        <ReplyCommentAvatar>
          <Img src={mainReply.replyOwner.avatar}></Img>
        </ReplyCommentAvatar>
        <FormTextInput addTxtComment={addTxtComment} text={text} />
        <MediaContainer
          video={video}
          media={gif !== "" ? [gif] : images}
          text={text}
          mainMediaContainer={false}
          removeMedia={removeMedia}
        />
        <FormBtnInput
          openPicker={this.openPicker}
          addEmojiComment={addEmojiComment}
          addGifComment={addGifComment}
          addImgComment={addImgComment}
          emojiPickerOpened={emojiPickerOpened}
          gifPickerOpened={gifPickerOpened}
          imgPicker={imgPicker}
          gifLocked={gifLocked}
          imgLocked={imgLocked}
        />
      </Form>
    )
  }
}
CommentInputForm.propTypes = {
  mainReply: PropTypes.object,
}

const ReplyCommentAvatar = styled.div`
  // background: green;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  top: 0vmin;
  left: 0.6vmin;
  width: 7vmin;
  height: 7vmin;
`
const Img = styled.img`
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 50%;
  object-fit: cover;
  width: 5.8vmin;
  height: 5.8vmin;
`
export default CommentInputForm
