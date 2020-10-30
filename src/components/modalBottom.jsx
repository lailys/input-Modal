import React, { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import MainCommentContainer from "./mainCommentContainer"
import CommentInputForm from "./commentInputForm"

class ModalBottom extends Component {
  render() {
    const { mainComment, mainReply } = this.props
    return (
      <Container>
        <MainCommentContainer mainComment={mainComment} />
        <CommentInputForm mainReply={mainReply} />
      </Container>
    )
  }
}
ModalBottom.propTypes = {
  mainComment: PropTypes.object,
  mainReply: PropTypes.object,
}
const Container = styled.div`
  // background: yellow;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 0 0 25px 25px;
  width: 100%;
  height: auto;
  min-height: 34.8vmin;
`
export default ModalBottom
