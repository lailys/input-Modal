import React, { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import FormTextInput from "./formTextInput"
import FormBtnInput from "./formBtnInput"

class CommentInputForm extends Component {
  constructor() {
    super()
    this.state = {
      text: "",
      images: [],
      gif: "",
      emojiPickerOpened: false,
      gifPickerOpened: false,
      imgPicker: false,
    }
    this.openPicker = this.openPicker.bind(this)
    this.addTxtComment = this.addTxtComment.bind(this)
    this.addImgComment = this.addImgComment.bind(this)
    this.addGifComment = this.addGifComment.bind(this)
    this.addEmojiComment = this.addEmojiComment.bind(this)
  }
  openPicker(icon) {
    this.setState(prevState => ({
      emojiPickerOpened:
        icon === "emoji" ? !prevState.emojiPickerOpened : false,
      gifPickerOpened: icon === "gif" ? !prevState.gifPickerOpened : false,
      imgPicker: icon === "img" ? !prevState.imgPicker : false,
    }))
  }
  addTxtComment(text) {
    console.log(text, "text.......")
    this.setState({ text })
  }
  addImgComment(img) {
    console.log(img, "img.......")
    this.setState({ images: [...this.state.images, img] })
  }
  addGifComment(gif) {
    console.log(gif, "Gif.......")
    this.setState({ gif })
  }
  addEmojiComment(emoji) {
    console.log(emoji, "emoji.......")
    this.setState(prevState => ({ text: prevState.text + emoji }))
  }
  render() {
    const { mainReply } = this.props
    const {
      addTxtComment,
      addEmojiComment,
      addGifComment,
      addImgComment,
    } = this
    const { emojiPickerOpened, gifPickerOpened, imgPicker } = this.state
    return (
      <Form id="container">
        <ReplyCommentAvatar>
          <Img src={mainReply.replyOwner.avatar}></Img>
        </ReplyCommentAvatar>
        <FormTextInput addTxtComment={addTxtComment} />
        <FormBtnInput
          openPicker={this.openPicker}
          addEmojiComment={addEmojiComment}
          addGifComment={addGifComment}
          addImgComment={addImgComment}
          emojiPickerOpened={emojiPickerOpened}
          gifPickerOpened={gifPickerOpened}
          imgPicker={imgPicker}
        />
      </Form>
    )
  }
}
CommentInputForm.propTypes = {
  mainReply: PropTypes.object,
}
const Form = styled.form`
  // background: purple;
  margin: 0;
  padding: 0;
  display:flex;
  align-items: center;
  justify-content:flex-start;
  flex-direction: column;
  position relative;
  border-radius: 0 0 25px 25px;
  width: 100%;
  height: auto;
  min-height: 27.4vmin;
`
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
